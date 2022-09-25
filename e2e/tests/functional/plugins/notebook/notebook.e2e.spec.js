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

/*
This test suite is dedicated to tests which verify the basic operations surrounding Notebooks.
*/

// Remove this eslint exception once tests are implemented
// eslint-disable-next-line no-unused-vars
const { test, expect } = require('../../../../baseFixtures');
const { createDomainObjectWithDefaults } = require('../../../../appActions');


test.describe('Notebook section tests', () => {
    //The following test cases are associated with Notebook Sections
    
    test('Default and new sections are automatically named Unnamed Section with Unnamed Page', async ({ page }) => {
        // Check that the default section and page are created and the name matches the defaults
        const defaultSectionName = await page.locator('.c-notebook__sections .c-list__item__name').textContent();
        expect(defaultSectionName).toBe('Unnamed Section');
        const defaultPageName = await page.locator('.c-notebook__pages .c-list__item__name').textContent();
        expect(defaultPageName).toBe('Unnamed Page');

        // Expand sidebar and add a section
        await page.locator('.c-notebook__toggle-nav-button').click();
        await page.locator('.js-sidebar-sections .c-icon-button.icon-plus').click();

        // Check that new section and page within the new section match the defaults
        const newSectionName = await page.locator('.c-notebook__sections .c-list__item__name').nth(1).textContent();
        expect(newSectionName).toBe('Unnamed Section');
        const newPageName = await page.locator('.c-notebook__pages .c-list__item__name').textContent();
        expect(newPageName).toBe('Unnamed Page');
    });
   
   
});

test.describe('Notebook page tests', () => {
    //The following test cases are associated with Notebook Pages
    test.beforeEach(async ({ page }) => {
        //Navigate to baseURL
        await page.goto('./', { waitUntil: 'networkidle' });

        // Create Notebook
        await createDomainObjectWithDefaults(page, {
            type: 'Notebook',
            name: "Test Notebook"
        });
    });
    //Test will need to be implemented after a refactor in #5713
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip('Delete page popup is removed properly on clicking dropdown again', async ({ page }) => {
        test.info().annotations.push({
            type: 'issue',
            description: 'https://github.com/nasa/openmct/issues/5713'
        });
        // Expand sidebar and add a second page
        await page.locator('.c-notebook__toggle-nav-button').click();
        await page.locator('text=Page Add >> button').click();

        // Click on the 2nd page dropdown button and expect the Delete Page option to appear
        await page.locator('button[title="Open context menu"]').nth(2).click();
        await expect(page.locator('text=Delete Page')).toBeEnabled();
        // Clicking on the same page a second time causes the same Delete Page option to recreate
        await page.locator('button[title="Open context menu"]').nth(2).click();
        await expect(page.locator('text=Delete Page')).toBeEnabled();
        // Clicking on the first page causes the first delete button to detach and recreate on the first page
        await page.locator('button[title="Open context menu"]').nth(1).click();
        const numOfDeletePagePopups = await page.locator('li[title="Delete Page"]').count();
        expect(numOfDeletePagePopups).toBe(1);
    });
});

test.describe('Notebook search tests', () => {
    test.skip('Can search for a single result', async ({ _page }) => {});
    test.skip('Can search for many results', async ({ _page }) => {});
    test.skip('Can search for new and recently modified entries', async ({ _page }) => {});
    test.skip('Can search for section text', async ({ _page }) => {});
    test.skip('Can search for page text', async ({ _page }) => {});
    test.skip('Can search for entry text', async ({ _page }) => {});
});





