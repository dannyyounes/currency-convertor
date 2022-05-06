<template>
    <nav>
        <div class="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">

           Logout


        </div>
    </nav>
</template>

<script>
import NavLink from './NavLink';
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue';
import {
    SearchIcon
} from '@heroicons/vue/outline';

export default {
    name: "Nav",
    components: {NavLink, Menu, MenuButton, MenuItems, MenuItem, SearchIcon},
}
</script>

<style scoped>

</style>
