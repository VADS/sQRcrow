import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

//vue-meta
import VueMeta from 'vue-meta';
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
});

//Geolocation
import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);

//Load Leaflet Stuff
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

// eslint-disable-next-line
delete L.Icon.Default.prototype._getIconUrl;
// eslint-disable-next-line
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

//QR Reader
import VueQrcodeReader from 'vue-qrcode-reader';
Vue.use(VueQrcodeReader);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
