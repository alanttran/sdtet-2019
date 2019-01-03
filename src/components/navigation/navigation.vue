<template>
  <v-layout class="sdtet-navigation sdtet-container">
    <v-flex layout align-center >
      <a href="#"><img class="sdtet-logo" src="../../assets/sdtet-logo.svg" alt="Logo"></a>
    </v-flex>
    <v-layout align-center justify-center class="sdtet-navigation__links">
      <v-flex><a href="#sdtet-schedule-section" v-smooth-scroll>Schedule</a></v-flex>
      <v-flex><a href="#sdtet-pageant-section" v-smooth-scroll>Pageant</a></v-flex>
      <v-flex><a href="#sdtet-vendors-section" v-smooth-scroll>Vendors</a></v-flex>
      <v-flex><a href="#sdtet-volunteers-section" v-smooth-scroll>Volunteers</a></v-flex>
      <v-flex><a href="#sdtet-sponsors-section" v-smooth-scroll>Sponsors</a></v-flex>
      <v-flex><a href="#sdtet-contact-section" v-smooth-scroll>Contact</a></v-flex>
      <v-flex><a href="https://www.paypal.com/fundraiser/charity/1440775" target="_blank">Donate</a></v-flex>
    </v-layout>
    <div class="sdtet-navigation-menu">
      <v-menu offset-y>
      <v-btn icon large slot="activator">
        <v-icon large color="red">menu</v-icon>
      </v-btn>
        <v-list>
          <v-list-tile>
            <a href="#sdtet-schedule-section" v-smooth-scroll><v-list-tile-title>Schedule</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="#sdtet-pageant-section" v-smooth-scroll><v-list-tile-title>Pageant</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="#sdtet-vendors-section" v-smooth-scroll><v-list-tile-title>Vendors</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="#sdtet-volunteers-section" v-smooth-scroll><v-list-tile-title>Volunteers</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="#sdtet-sponsors-section" v-smooth-scroll><v-list-tile-title>Sponsors</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="#sdtet-contact-section" v-smooth-scroll><v-list-tile-title>Contact</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="https://www.paypal.com/fundraiser/charity/1440775"><v-list-tile-title>Donate</v-list-tile-title></a>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
  </v-layout>
</template>

<script>
  export default {
    name: 'navigation',
    data () {
      return {
        title: 'Navigation!'
      }
    }
  }
</script>

<style lang="scss">
  @import 'navigation';
</style>