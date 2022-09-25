export const MY_ITEMS_KEY = 'mine';

export function createMyItemsidentifier(namespace = '') {
    return {
        key: MY_ITEMS_KEY,
        namespace
    };
}
