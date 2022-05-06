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
        <option v-for="option in options" :value="option" :selected="option === selectedValue">{{ option }}</option>
    </select>
    <div v-if="error" v-text="error" class="text-red-500 text-xs mt-1"></div>
</template>

<script>
export default {
    name: "BaseSelect",
    props: {
        options: {
            type: Array,
            required: true,
        },
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
}
</script>

<style scoped>

</style>
