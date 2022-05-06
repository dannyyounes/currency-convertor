<template>
    <Head>
        <title>Currency Convertor - Report</title>
    </Head>

    <h1 class="text-3xl">Report</h1>
    <div>
        <div class="mt-10">
            <div class="border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal rounded-lg">
                <form @submit.prevent="submit" id="currency-convertor">

                    <div class="mb-6">
                        <div class="mb-4">
                            Select a currency to generate a report
                        </div>
                        <label
                            class="block mb-2 uppercase font-bold text-xs text-gray-700">
                            Currency
                        </label>
                        <Select2 v-model="form.currencies_selected"
                                 :options="currencies"
                                 :settings="{ placeholder: 'Select currency', width: '100%' }" />
                        <div v-if="this.error" v-text="this.error" class="text-red-500 text-sm mt-1"></div>
                    </div>

                    <div class="mb-6">
                        <label
                            class="block mb-2 uppercase font-bold text-xs text-gray-700">
                            Time Frame
                        </label>
                        <select name="timeframe"
                                id="timeframe"
                                v-model="form.timeframe"
                                class="form-select appearance-none block w-full px-3 py-1.5
                                  text-base font-normal text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                            <option value="12">Range: One Year, Interval: Monthly</option>
                            <option value="6">Range: Six Months, Interval: Weekly</option>
                            <option value="1">Range: One Month, Interval: Daily</option>
                        </select>
                        <div v-if="this.error" v-text="this.error" class="text-red-500 text-sm mt-1"></div>
                    </div>

                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" type="submit">
                        Generate Report
                    </button>
                </form>
            </div>
        </div>
    </div>

    <div>
        <!--    <div class="mt-10" v-if="$page.props.convert !== undefined && $page.props.convert.success">-->
        <div class="mt-10">
            <label
                class="block mb-2 uppercase font-bold text-xs text-gray-700">
                Display of currencies
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
                                        Status
                                    </th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <!--                            <tr class="border-b" v-for="(price, symbol) in $page.props.convert.rates">-->
                                <tr class="border-b">
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <!--                                    {{ symbol }}-->AUD
                                    </td>
                                    <!--                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" v-text="getCurrencyName(symbol)" />-->
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"  >Australian Dollar</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <!--                                    {{ price}}-->Pending
                                    </td>
                                    <td><a href="/report/show/3">view</a></td>
                                </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CurrencyMixin from "../../Mixins/currency";
import { Inertia } from '@inertiajs/inertia'
import Select2 from 'vue3-select2-component';
import {reactive, ref} from "vue";
import { usePage } from '@inertiajs/inertia-vue3'

export default {
    name: "Report",
    components: {Select2},
    mixins: [CurrencyMixin],
    data() {
        return {
            currencies_selected: [],
            timeframe: ''
        }
    },
    setup () {
        const form = reactive({
            currencies_selected: '',
        })

        const error = ref('')
        function submit() {
            //also check that a currency is selected before submitting

            this.error = ''

            if (form.currencies_selected.length === 0) {
                this.error = "A currency must be selected";
            } else {
                Inertia.post('/report/store/'+usePage().props.value.auth.user.id, form)
            }
        }

        return { form, submit, error }
    },
}
</script>

<style scoped>

</style>
