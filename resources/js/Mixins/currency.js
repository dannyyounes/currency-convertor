export default {
    data() {
        return {
            currencies: [
                {id: 'AUD', text: 'Australian Dollar'},
                {id: 'GBP', text: 'British Pound'},
                {id: 'CAD', text: 'Canadian Dollar'},
                {id: 'EUR', text: 'Euro'},
                {id: 'JPY', text: 'Japanese Yen'},
                {id: 'NZD', text: 'New Zealand Dollar'},
                {id: 'CHF', text: 'Swiss Franc'},
            ]
        }
    },
    methods: {
        getCurrencyName(symbol) {
            let currency =  this.currencies.find(({ id }) => id === symbol)

            return currency.text
        },
        showPeriodText(period) {
            if (period === 12) {
                return "Monthly";
            }
            else if (period === 6) {
                return "Weekly";
            }
            else if (period === 1) {
                return "Daily"
            }
        },
        showPeriodDescription() {
            if (period === 12) {
                return "Monthly (12 Months)";
            }
            else if (period === 6) {
                return "Weekly (6 Months)";
            }
            else if (period === 1) {
                return "Daily (30 days)"
            }
        }
    }
}

