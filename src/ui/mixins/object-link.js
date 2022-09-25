import objectPathToUrl from '../../tools/url';

export default {
    inject: ['openmct'],
    props: {
        'objectPath': {
            type: Array,
            default() {
                return [];
            }
        }
    },
    computed: {
        objectLink() {
            if (!this.objectPath.length) {
                return;
            }

            if (this.navigateToPath) {
                return '#' + this.navigateToPath;
            }

            return objectPathToUrl(this.openmct, this.objectPath);
        }
    }
};
