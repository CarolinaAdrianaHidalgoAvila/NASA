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

import { evaluateResults } from './evaluator';
import { TRIGGER } from './constants';

describe('evaluate results', () => {
    

    const tests = [
        {
            name: 'allTrue',
            values: [true, true, true, true, true],
            any: true,
            all: true,
            not: false,
            xor: false
        }, {
            name: 'oneTrue',
            values: [false, false, false, false, true],
            any: true,
            all: false,
            not: false,
            xor: true
        }, {
            name: 'multipleTrue',
            values: [false, true, false, true, false],
            any: true,
            all: false,
            not: false,
            xor: false
        }, {
            name: 'noneTrue',
            values: [false, false, false, false, false],
            any: false,
            all: false,
            not: true,
            xor: false
        }, {
            name: 'allTrueWithUndefined',
            values: [true, true, true, undefined, true],
            any: true,
            all: false,
            not: false,
            xor: false
        }, {
            name: 'oneTrueWithUndefined',
            values: [undefined, undefined, undefined, undefined, true],
            any: true,
            all: false,
            not: false,
            xor: true
        }, {
            name: 'multipleTrueWithUndefined',
            values: [true, undefined, true, undefined, true],
            any: true,
            all: false,
            not: false,
            xor: false
        }, {
            name: 'allUndefined',
            values: [undefined, undefined, undefined, undefined, undefined],
            any: false,
            all: false,
            not: true,
            xor: false
        }, {
            name: 'singleTrue',
            values: [true],
            any: true,
            all: true,
            not: false,
            xor: true
        }, {
            name: 'singleFalse',
            values: [false],
            any: false,
            all: false,
            not: true,
            xor: false
        }, {
            name: 'singleUndefined',
            values: [undefined],
            any: false,
            all: false,
            not: true,
            xor: false
        }
       
    ];

    describe(`based on trigger ${TRIGGER.ANY}`, () => {
        it('should evaluate to expected result', () => {
            tests.forEach(test => {
                const result = evaluateResults(test.values, TRIGGER.ANY);
                expect(result).toEqual(test[TRIGGER.ANY]);
            });
        });
    });

    describe(`based on trigger ${TRIGGER.ALL}`, () => {
        it('should evaluate to expected result', () => {
            tests.forEach(test => {
                const result = evaluateResults(test.values, TRIGGER.ALL);
                expect(result).toEqual(test[TRIGGER.ALL]);
            });
        });
    });

    describe(`based on trigger ${TRIGGER.NOT}`, () => {
        it('should evaluate to expected result', () => {
            tests.forEach(test => {
                const result = evaluateResults(test.values, TRIGGER.NOT);
                expect(result).toEqual(test[TRIGGER.NOT]);
            });
        });
    });

    describe(`based on trigger ${TRIGGER.XOR}`, () => {
        it('should evaluate to expected result', () => {
            tests.forEach(test => {
                const result = evaluateResults(test.values, TRIGGER.XOR);
                expect(result).toEqual(test[TRIGGER.XOR]);
            });
        });
    });

    
});
