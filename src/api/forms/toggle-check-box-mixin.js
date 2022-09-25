export default {
    data() {
        return {
            isChecked: false
        };
    },
    methods: {
        toggleCheckBox(_event) {
            this.isChecked = !this.isChecked;

            const data = {
                model: this.model,
                value: this.isChecked
            };

            this.$emit('onChange', data);
        }
    }
};
