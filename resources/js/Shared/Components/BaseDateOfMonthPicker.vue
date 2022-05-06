<template>
    <label
        class="block mb-2 uppercase font-bold text-xs text-gray-700"
        :for="this.$attrs.name">
        {{ label }}
    </label>
    <select
        class="border p-2 w-full rounded"
        v-bind="$attrs"
        @input="this.$emit('update:modelValue', $event.target.value)">
        <option value=""></option>
        <option v-for="day in days" :value="day" :selected="day === selectedValue">{{ day }}</option>
    </select>
    <div v-if="error" v-text="error" class="text-red-500 text-xs mt-1"></div>
</template>

<script>
export default {
    name: "BaseDateOfMonthPicker",
    props: {
        modelValue: {
            type: [String, Number],
            required: false,
            default: '',
        },
        selectedValue: {
            type: [String, Number],
            required: false,
            default: '',
        },
        label: {
            type: String,
            required: true,
        },
        error: {
            type: String,
            required: false,
            default: '',
        }
    },
    data () {
        return {
            days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        }
    }
}
</script>

<style scoped>

</style>
