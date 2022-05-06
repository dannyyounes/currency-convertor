<template>
    <Head>
        <title>Create Income</title>
    </Head>
    <h1 class="text-3xl">Create Income</h1>

    <form @submit.prevent="submit" id="income" class="max-w-md mx-auto mt-8">
        <div class="mb-6">
            <BaseSelect
                name="interval"
                v-model="form.interval"
                @change="showPicker"
                id="interval"
                :options="this.options"
                label="Interval" />

        </div>
        <div class="mb-6" v-if="showDayPicker">
            <BaseDayPicker
                name="day_of_week"
                v-model="form.day_of_week"
                id="day_of_week"
                label="Select the Day of Week you get paid"
                :error="form.errors.day_of_week"
            />
        </div>

        <div class="mb-6" v-if="showDayOfMonthPicker">
            <BaseDateOfMonthPicker
                name="date_of_month"
                v-model="form.date_of_month"
                id="date_of_month"
                label="Select the Date of Month you get paid"
                :error="form.errors.date_of_month"
            />
        </div>

        <div class="mb-6" v-if="showDatePicker">
            <BaseInput
                name="date_paid"
                v-model="form.date_paid"
                type="date"
                id="date_paid"
                label="Select the date you got paid"
                :error="form.errors.date_paid"
            />
        </div>

        <div class="mb-6">
            <BaseInput
                name="date_paid"
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
    name: "IncomeCreate",
    mixins: [IncomeMixin],
    components: { BaseSelect, BaseInput, Button, BaseDateSelector, BaseDayPicker, BaseDateOfMonthPicker, FlashMessage },
};

</script>

<script setup>
import {useForm} from '@inertiajs/inertia-vue3';

let form = useForm({
    date_paid: '',
    day_of_week: '',
    date_of_month: '',
    company: '',
    amount: '',
    interval: '',
});

const submit = () => {
    form.post(route('incomes.store'));
};
</script>
