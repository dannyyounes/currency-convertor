<template>
    <h1 class="text-3xl">Currency Convertor</h1>
    <div class="mt-10">
        <div class="border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

                <h2
                    class="block mb-2 uppercase font-bold text-xs text-gray-700">
                    Currencies
                </h2>


            <form @submit.prevent="convert" id="currency-convertor">
                <div>
                    Select up to 5 currencies to display their price against the US Dollar
                </div>
                <Select2 v-model="currencies_selected"
                         :options="currencies"
                         :settings="{ placeholder: 'Select up to five currencies', width: '100%', multiple: true }" />
                <div v-if="this.error" v-text="this.error" class="text-red-500 text-sm mt-1"></div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                        type="submit">
                    Convert
                </button>
            </form>
        </div>
    </div>
<!--    <div class="mt-10" v-if="$page.props.convert !== undefined && $page.props.convert.success">-->
    <div class="mt-10" v-if="this.data.success">
        <label
            class="block mb-2 uppercase font-bold text-xs text-gray-700">
            Currency conversions against the US Dollar
        </label>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="border-b">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Currency Code
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Currency Name
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Price
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="border-b" v-for="rates in this.rates">

                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ rates.code }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" v-text="getCurrencyName(rates.code)" />
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ rates.price }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Select2 from 'vue3-select2-component';
import CurrencyMixin from "../../Mixins/currency";
import axios from "axios";


export default {
    name: "Currency Convertor",
    components: {Select2},
    mixins: [CurrencyMixin],
    data () {
        return {
            currencies_selected: [],
            data: '',
            error: '',
            rates: ''
        }
    },
    methods: {
        convert(){
            const MAX_CURRENCIES = 5
            this.error = ''
            if (this.currencies_selected.length === 0) {
                this.error = 'You must select a currency to convert';
                return
            }

            if (this.currencies_selected.length > MAX_CURRENCIES) {
                this.error = "Only a maximum of 5 currencies may be selected";
                return
            }

            axios
                .post('/convert', {
                    data: {
                        currencies_selected: this.currencies_selected
                    }
                })
                .then(response => {
                    if (response.data.message){
                        this.error = response.data.message
                    }

                    let rates = response.data.rates
                    this.rates = Object.keys(rates).map(key => {
                        return {
                            code: key,
                            price: rates[key]
                        };
                    })

                    this.data = response.data
                })

        }
    }
}
</script>

<style scoped>

</style>
