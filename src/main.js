import VueBstcode from './vue-qr.vue'

const install = function (Vue) {
  if (install.installed) return;
  install.installed
  Vue.component('vue-code', VueBstcode)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}