require('./bootstrap')
const { default: Echo } = require('laravel-echo')

import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3'
import Layout  from "./Shared/Layout"
import route from "ziggy-js";
import Select2 from 'vue3-select2-component';

import { InertiaProgress } from '@inertiajs/progress'

const app = createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;

        if (page.layout === undefined) {
            page.layout = Layout;
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        const VueApp = createApp({ render: () => h(App, props) })
            .use(plugin)
            .mixin({ methods: { route } })
            .component("Link", Link)
            .component("Head", Head)
            .component('Select2', Select2)
            .mount(el)
    },

    title: title => `Currency Convertor - ${title}`
})

InertiaProgress.init({
    color: 'red',
    showSpinner: true,
})

let echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
});

echo.channel('conversion-complete')
    .listen('CurrencyDataFetched', (e) => {

    })

