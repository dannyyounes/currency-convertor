<template>

    <nav>

            <div class="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
                <div>
                    Welcome Back, {{ $page.props.auth.user.name}}
                </div>
                <div>
                    <a href="#" @click="logout" class="block py-2 px-4 text-sm text-gray-700">Log out</a>
                </div>

            </div>

    </nav>
</template>

<script>
import NavLink from './NavLink';

export default {
    name: "Nav",
    components: {NavLink},
    methods:{
        logout() {
            this.$inertia.post(route('logout'));
        },
    }
}
</script>

<style scoped>

</style>
