<template>
    <div id="flash" class="fixed bottom-0 right-0 m-6" v-show="show">
        <div
            :class="{
                'bg-red-200 text-red-900': $page.props.flash.status === 'error',
                'bg-green-200 text-green-900': $page.props.flash.status === 'success',
                'bg-gray-200 text-gray-900': $page.props.flash.status === 'info',
              }"
            class="rounded-lg shadow-md p-6 pr-10"
            style="min-width: 240px"
        >
            <div class="flex items-center">
                {{ $page.props.flash.message }}
            </div>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-6">
                <svg
                    @click.prevent="hide_message()"
                    :class="{
                        'text-red-900': $page.props.flash.status === 'error',
                        'text-green-900': $page.props.flash.status === 'success',
                        'text-gray-900': $page.props.flash.status === 'info',
                      }"
                    class="fill-current h-6 w-6"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"><title>Close</title>
                    <path
                        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                    />
                </svg>
            </span>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch, computed } from "vue"
    import { usePage } from '@inertiajs/inertia-vue3'

    let show = ref(usePage().props.value.flash.status !== null)

    if (show) {
        setTimeout(() => {
            hide_message()
        }, 5000)
    }

    const hide_message = () => {
        show.value = false
    }
    const show_message = () => {
        show.value = true
    }
</script>

