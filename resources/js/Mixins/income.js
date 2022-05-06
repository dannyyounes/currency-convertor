export default {
    data() {
        return {
            options: ['Weekly', 'Fortnightly', 'Monthly', 'One-Off'],
            showDayPicker: false,
            showDayOfMonthPicker: false,
            showDatePicker: false,
        }
    },
    methods: {
        showPicker() {
            const DAY_PICKER = true;
            const DAY_OF_MONTH_PICKER = true;
            const DATE_PICKER = true;

            const pickerMapper = {
                "Weekly": [DAY_PICKER, !DAY_OF_MONTH_PICKER, !DATE_PICKER],
                "Fortnightly": [DAY_PICKER, !DAY_OF_MONTH_PICKER, !DATE_PICKER],
                "Monthly": [!DAY_PICKER, DAY_OF_MONTH_PICKER, !DATE_PICKER],
                "One-Off": [!DAY_PICKER, !DAY_OF_MONTH_PICKER, DATE_PICKER]
            }

            this.setPicker(...pickerMapper[this.form.interval])
        },
        setPicker(dayPicker, dayOfMonthPicker, datePicker) {
            this.showDayPicker = dayPicker
            this.showDayOfMonthPicker = dayOfMonthPicker;
            this.showDatePicker = datePicker;
        }
    }
}

