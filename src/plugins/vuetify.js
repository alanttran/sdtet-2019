import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VMenu,
  VCard,
  VParallax,
  VAlert,
  VBtn,
  VDialog,
  VDivider,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VParallax,
    VAlert,
    VDialog,
    VDivider,
    VMenu,
    VCard,
    VGrid,
    VToolbar,
    transitions
  },
})
