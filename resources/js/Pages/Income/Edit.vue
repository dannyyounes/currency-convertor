<template>
    <Head>
        <title>Edit Income</title>
    </Head>
    <h1 class="text-3xl">Edit Income</h1>

    <FlashMessage />

    <form @submit.prevent="submit" id="income" class="max-w-md mx-auto mt-8">
        <div class="mb-6">
            <BaseSelect
                name="interval"
                :selectedValue="income.interval"
                @change="showPicker"
                id="interval"
                :options="this.options"
                label="Interval" />

        </div>
        <div class="mb-6" v-if="showDayPicker">
            <BaseDayPicker
                name="day_of_week"
                :selectedValue="income.day_of_week"
                id="day_of_week"
                label="Select the Day of Week you get paid" />
        </div>

        <div class="mb-6" v-if="showDayOfMonthPicker">
            <BaseDateOfMonthPicker
                name="date_of_month"
                :selectedValue="income.date_of_month"
                id="date_of_month"
                label="Select the Date of Month you get paid" />
        </div>

        <div class="mb-6" v-if="showDatePicker">
            <BaseInput
                name="date_paid"
                v-model="form.date_paid"
                type="date"
                id="date_paid"
                label="Select the date you got paid" />
        </div>

        <div class="mb-6">
            <BaseInput
                name="company"
                v-model="form.company"
                type="text"
                id="company"
                label="Company"
                :error="form.errors.company" />
        </div>
        <div class="mb-6">
            <BaseInput
                name="amount"
                v-model="form.amount"
                type="number"
                id="amount"
                label="Amount"
                :error="form.errors.amount" />
        </div>

        <div class="mb-6">
            <Button type="submit">Submit</Button>
        </div>
    </form>
</template>

<script>
import BaseInput from "../../Shared/Components/BaseInput";
import BaseSelect from "../../Shared/Components/BaseSelect";
import BaseDateSelector from "../../Shared/Components/BaseDateSelector";
import BaseDayPicker from "../../Shared/Components/BaseDayPicker";
import BaseDateOfMonthPicker from "../../Shared/Components/BaseDateOfMonthPicker";
import Button from "../../Shared/Button";
import FlashMessage from "../../Shared/FlashMessage";
import IncomeMixin from "../../Mixins/income";

export default {
    name: "IncomeEdit",
    mixins: [IncomeMixin],
    components: { BaseSelect, BaseInput, Button, BaseDateSelector, BaseDayPicker, BaseDateOfMonthPicker, FlashMessage },
};

</script>

<script setup>
import {useForm} from '@inertiajs/inertia-vue3';

const props = defineProps({
    income: Object
})

let form = useForm(props.income);

let submit = () => {
    form.put(route('incomes.update', props.income.id));
};
</script>
