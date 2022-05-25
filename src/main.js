import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import '@/assets/styles/app.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {ripple: true})
app.component('DataTable', DataTable)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Column', Column)

app.mount('#app')
