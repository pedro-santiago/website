import { createApp } from 'vue';
import { setupMixin } from './init';
import View from './views/index.vue';

const app = createApp(View);
setupMixin(app);
app.mount('#view');
