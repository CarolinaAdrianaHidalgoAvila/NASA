/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2022, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define([

], function (

) {

    /**
     * Utility for checking if a thing is an Open MCT identifier.
     * @private
     */
    function isidentifier(thing) {
        return typeof thing === 'object'
            && Object.prototype.hasOwnProperty.call(thing, 'key')
            && Object.prototype.hasOwnProperty.call(thing, 'namespace');
    }

    /**
     * Utility for checking if a thing is a key string.  Not perfect.
     * @private
     */
    function isKeyString(thing) {
        return typeof thing === 'string';
    }

    /**
     * Convert a keyString into an Open MCT identifier, ex:
     * 'scratch:root' ==> {namespace: 'scratch', key: 'root'}
     *
     * Idempotent.
     *
     * @param keyString
     * @returns identifier
     */
    function parseKeyString(keyString) {
        if (isidentifier(keyString)) {
            return keyString;
        }
        
        let namespace = '';
        let key = keyString;
        let skipEscapeCharCount = 0;
        for (let i = 0; i < key.length; i = i + 1 + skipEscapeCharCount) {
            if (key[i] === "\\" && key[i + 1] === ":") {
                skipEscapeCharCount++
            } else if (key[i] === ":") {
                skipEscapeCharCount--
                key = key.slice(i + 1);
                break;
            }

            namespace += key[i];
        }

        if (keyString === namespace) {
            namespace = '';
        }

        return {
            namespace: namespace,
            key: key
        };
    }

    /**
     * Convert an Open MCT identifier into a keyString, ex:
     * {namespace: 'scratch', key: 'root'} ==> 'scratch:root'
     *
     * Idempotent
     *
     * @param identifier
     * @returns keyString
     */
    function makeKeyString(identifier) {
        if (!identifier) {
            throw new Error("Cannot make key string from null identifier");
        }

        if (isKeyString(identifier)) {
            return identifier;
        }

        if (!identifier.namespace) {
            return identifier.key;
        }

        return [
            identifier.namespace.replace(/:/g, '\\:'),
            identifier.key
        ].join(':');
    }

    /**
     * Convert a new domain object into an old format model, removing the
     * identifier and converting the composition array from Open MCT identifiers
     * to old format keyStrings.
     *
     * @param domainObject
     * @returns oldFormatModel
     */
    function toOldFormat(model) {
        model = JSON.parse(JSON.stringify(model));
        delete model.identifier;
        if (model.composition) {
            model.composition = model.composition.map(makeKeyString);
        }

        return model;
    }

    /**
     * Convert an old format domain object model into a new format domain
     * object.  Adds an identifier using the provided keyString, and converts
     * the composition array to utilize Open MCT identifiers.
     *
     * @param model
     * @param keyString
     * @returns domainObject
     */
    function toNewFormat(model, keyString) {
        model = JSON.parse(JSON.stringify(model));
        model.identifier = parseKeyString(keyString);
        if (model.composition) {
            model.composition = model.composition.map(parseKeyString);
        }

        return model;
    }

    /**
     * Compare two Open MCT identifiers, returning true if they are equal.
     *
     * @param identifier
     * @param otheridentifier
     * @returns Boolean true if identifiers are equal.
     */
    function identifierEquals(a, b) {
        return a.key === b.key && a.namespace === b.namespace;
    }

    /**
     * Compare two domain objects, return true if they're the same object.
     * Equality is determined by identifier.
     *
     * @param domainObject
     * @param otherDomainOBject
     * @returns Boolean true if objects are equal.
     */
    function objectEquals(a, b) {
        return identifierEquals(a.identifier, b.identifier);
    }

    function refresh(oldObject, newObject) {
        let deleted = _.difference(Object.keys(oldObject), Object.keys(newObject));
        deleted.forEach((propertyName) => delete oldObject[propertyName]);
        Object.assign(oldObject, newObject);
    }

    return {
        isidentifier: isidentifier,
        toOldFormat: toOldFormat,
        toNewFormat: toNewFormat,
        makeKeyString: makeKeyString,
        parseKeyString: parseKeyString,
        equals: objectEquals,
        identifierEquals: identifierEquals,
        refresh: refresh
    };
});
