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
        <div class="mt-10">
            <label
                class="block mb-2 uppercase font-bold text-xs text-gray-700">
                Your saved reports
            </label>
            <div class="mt-3" v-if="success" v-text="success" />
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Code
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Period
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Status
                                    </th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="border-b" v-for="report in reports">
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ report.symbol }}</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" v-text="getCurrencyName(report.symbol)" />
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" v-text="showPeriodText(report.period)"/>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" :id="'currency-'+report.id">{{ report.status }}</td>
                                    <td>
                                        <div class="flex">
                                            <div class="px-2">
                                                <a :href="'/report/show/'+report.id">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <title>View Report</title>
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div>
                                                <a :href="'/report/show/'+report.id+'?show=chart'">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <title>View Chart</title>
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>



                                    </td>
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
import { reactive, ref} from "vue";
import { usePage } from '@inertiajs/inertia-vue3'

export default {
    name: "Report",
    components: {Select2},
    mixins: [CurrencyMixin],
    props: {
        reports: {
            type: Object,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            currencies_selected: [],
            timeframe: '',
        }
    },
    setup () {
        const form = reactive({
            currencies_selected: '',
        })

        const error = ref('')
        const success = ref('')

        function submit() {
            this.error = ''
            this.success = ''
            if (form.currencies_selected.length === 0) {
                this.error = "A currency must be selected";
            } else {
                console.log('submit form')
                this.success = 'Your report is currently being generated, it will be completed shortly';
                Inertia.post('/report/store/'+usePage().props.value.auth.user.id, form)
            }
        }

        return { form, submit, error, success }
    },
}
</script>

<style scoped>

</style>
