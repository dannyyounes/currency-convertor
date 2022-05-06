<template>
    <Head>
        <title>Currency Convertor - Report Display</title>
    </Head>

    <h1 class="text-3xl">Report Display</h1>

    <div class="mt-5">
        Price display for base currency {{ report.base }} against {{ report.secondary }}<p> <span v-text="showPeriodText(report.period)"></span></p>
    </div>

    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="border-b">
                        <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Date
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Price
                            </th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr class="border-b" v-for="data in report.currency_report_data">
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ data.price_at }}
                            </td>

                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ data.price }}
                            </td>
                        </tr>



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { computed } from "vue";
import { usePage } from '@inertiajs/inertia-vue3'

export default {
    name: "ReportDsiplay",
    setup () {
        const report = computed(() => usePage().props.value.report)

        return { report }
    },
    methods: {
        showPeriodText(period) {
            if (period === 12) {
                return "Monthly display of prices";
            }
            else if (period === 6) {
                return "Weekly display of prices";
            }
            else if (period === 1) {
                return "Daily Display of prices"
            }
        }
    }
}
</script>

<style scoped>

</style>
