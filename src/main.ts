import './styles/global.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-icons' 
import quasarLang from 'quasar/lang/pt-BR'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())

app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
  iconSet: quasarIconSet,
})

app.mount('#app')