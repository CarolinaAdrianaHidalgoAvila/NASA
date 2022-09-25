/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2021, United States Government
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

import ScatterPlotView from './ScatterPlotView.vue';
import { SCATTER_PLOT_KEY, SCATTER_PLOT_VIEW, TIME_STRIP_KEY } from './scatterPlotConstants.js';
import Vue from 'vue';

export default function ScatterPlotViewProvider(openmct) {
    function isCompactView(objectPath) {
        let isChildOfTimeStrip = objectPath.find(object => object.type === TIME_STRIP_KEY);

        return isChildOfTimeStrip && !openmct.router.isNavigatedObject(objectPath);
    }

    return {
        key: SCATTER_PLOT_VIEW,
        name: 'Scatter Plot',
        cssClass: 'icon-telemetry',
        canView(domainObject, _objectPath) {
            return domainObject && domainObject.type === SCATTER_PLOT_KEY;
        },

        canEdit(domainObject, _objectPath) {
            return domainObject && domainObject.type === SCATTER_PLOT_KEY;
        },

        view: function (domainObject, objectPath) {
            let component;

            return {
                show: function (element) {
                    let isCompact = isCompactView(objectPath);
                    component = new Vue({
                        el: element,
                        components: {
                            ScatterPlotView
                        },
                        provide: {
                            openmct,
                            domainObject,
                            path: objectPath
                        },
                        data() {
                            return {
                                options: {
                                    compact: isCompact
                                }
                            };
                        },
                        template: '<scatter-plot-view :options="options"></scatter-plot-view>'
                    });
                },
                destroy: function () {
                    component.$destroy();
                    component = undefined;
                }
            };
        }
    };
}
