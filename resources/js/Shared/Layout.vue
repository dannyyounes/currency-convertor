<template>
    <div class="flex min-h-screen">

        <SideBarMenu />
        <div class="flex-1">

            <Nav />
            <main class="px-5">
                <section class="p-6">
                    <div class="max-w-12xl mx-auto">
                        <slot />
                    </div>

                </section>
            </main>
        </div>
    </div>
</template>

<script>
import SideBarMenu from './Menu'
import Nav from './Nav'


export default {
    components: {SideBarMenu, Nav},
}

</script>
