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

import PlanViewProvider from './PlanViewProvider';
import PlanInspectorViewProvider from "./inspector/PlanInspectorViewProvider";

export default function (configuration) {
    return function install(openmct) {
        openmct.types.addType('plan', {
            name: 'Plan',
            key: 'plan',
            description: 'A configurable timeline-like view for a compatible mission plan file.',
            creatable: true,
            cssClass: 'icon-plan',
            form: [
                {
                    name: 'Upload Plan (JSON File)',
                    key: 'selectFile',
                    control: 'file-input',
                    required: true,
                    text: 'Select File...',
                    type: 'application/json',
                    property: [
                        "selectFile"
                    ]
                }
            ],
            initialize: function (domainObject) {
                // This is intentional
            }
        });
        openmct.objectViews.addProvider(new PlanViewProvider(openmct));
        openmct.inspectorViews.addProvider(new PlanInspectorViewProvider(openmct));
    };
}

