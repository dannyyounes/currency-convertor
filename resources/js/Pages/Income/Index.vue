<template>
    <Head>
        <title>Income</title>
    </Head>

    <FlashMessage />
    <h1 class="text-3xl">Income</h1>
    <div class="px-4 py-3 text-right sm:px-6">
        <ButtonLink :href="route('incomes.create')"
                    :active="$page.component === 'Income'">Create Income
        </ButtonLink>
    </div>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date Paid
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Company
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Interval
                            </th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Occurence
                            </th>

                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="income in incomes">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ formatDate(income.date_paid) }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ income.company }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ income.interval }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap" v-if="income.interval === 'Weekly'">
                                <div class="text-sm text-gray-900">Every {{ income.day_of_week }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap" v-else-if="income.interval === 'Fortnightly'">
                                <div class="text-sm text-gray-900">
                                    Every 2nd {{ income.day_of_week }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap" v-else-if="income.interval === 'Monthly'">
                                <div class="text-sm text-gray-900"
                                     v-text="formatDateOfMonth(income.date_of_month)">

                                </div>
                            </td>
                            <span v-else>
                                <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">N/A</div>
                            </td>
                            </span>

                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {{ formatPrice(income.amount) }}
                                </span>
                            </td>
                            <td>
                                <NavLink :href="route('incomes.edit', income.id)">Edit</NavLink>
                                <NavLink @click="destroy(income.id)">Delete</NavLink>
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
import ButtonLink from "../../Shared/ButtonLink";
import NavLink from "../../Shared/NavLink";
import FlashMessage from "../../Shared/FlashMessage"
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import {Inertia} from "@inertiajs/inertia"

dayjs.extend(advancedFormat);


export default {
    name: 'IncomeIndex',
    components: {ButtonLink, NavLink, FlashMessage},
    props: {
        incomes: {
            type: Array,
            required: true,
        }
    },
    methods: {
        formatDate(value) {
            return value !== null ? dayjs(value).format('MMMM D, YYYY') : '';
        },
        formatPrice(value) {
            return new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'AUD',
            }).format(value);

        },
        formatDateOfMonth(value) {
            return dayjs().date(value).format('Do') + " of every month";
        },
    },

}
</script>

<script setup>
    import {Inertia} from "@inertiajs/inertia";

    const destroy = (id) => {
        if (confirm('Are You Sure?')) {
            Inertia.delete(route('incomes.destroy', id))
        }
    }

</script>

