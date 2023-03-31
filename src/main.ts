import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Toast, { PluginOptions, POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from '@/App.vue';
import router from '@/routes/root';
import '@/index.css';

const pinia = createPinia();
const opt: PluginOptions = {
  position: POSITION.TOP_CENTER,
  transition: 'Vue-Toastification__fade',
  maxToasts: 20,
  newestOnTop: true,
};
createApp(App).use(router).use(pinia).use(Toast, opt).mount('#app');
