<template>
    <div class="w-64  border-r border-gray-200 bg-gray-600 text-cyan-10">
        <div class="py-4 px-6">
            <a href="/" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="h-10 w-10 text-orange-600"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     stroke-width="2">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-2xl font-extrabold text-white px-2">Five9</span>
            </a>
        </div>

        <div class="mb-10">
            <h3 class="mx-6 mb-2 text-xs text-white uppercase tracking-widest">
                Main
            </h3>

            <a v-for="(item, index) in mainNavigation"
               :href="item.href" :key="index"
               class="flex items-center py-3 px-4 hover:bg-gray-700 rounded hover:text-gray-300 group transition duration-200 text-white">
                <component
                    :is="item.icon"
                    class="h-5 w-5 text-white mr-2 group-hover:text-orange-500"/>
                {{ item.label }}
            </a>
        </div>

    </div>
</template>

<script>

import {
    CreditCardIcon,
    CollectionIcon,
    BanIcon,
    ShieldCheckIcon,
    CurrencyDollarIcon,
    HomeIcon,
    SearchIcon
} from '@heroicons/vue/outline';

export default {
    name: "Menu",
    components: {CurrencyDollarIcon, HomeIcon, SearchIcon, CreditCardIcon, CollectionIcon, BanIcon, ShieldCheckIcon},
    data() {
        return {
            mainNavigation: [
                {href: '/', label: 'Dashboard', icon: HomeIcon},
                {href: '/report', label: 'Report', icon:CurrencyDollarIcon},
            ],
        };
    },
}
</script>

<style scoped>

</style>
