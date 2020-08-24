<template>
  <nav class="sdtet-navigation">
    <!-- <v-flex layout align-center >
      <a href="#"><img class="sdtet-logo" src="../../assets/sdtet-logo.svg" alt="Logo"></a>
    </v-flex> -->
    <ul class="sdtet-navigation__links">
      <li><a id="sdtet-nav-logo" href="#home" v-smooth-scroll><img style="width: 30px;" src="../../assets/mouse-logo.png" alt="Year of Mouse Logo"></a></li>
      <li><a href="#sdtet-schedule-section" v-smooth-scroll>Schedule</a></li>
      <li><a href="#sdtet-pageant-section" v-smooth-scroll>Pageant</a></li>
      <li><a href="#sdtet-vendors-section" v-smooth-scroll>Vendors</a></li>
      <li><a href="#sdtet-volunteers-section" v-smooth-scroll>Volunteers</a></li>
      <li><a href="#sdtet-sponsors-section" v-smooth-scroll>Sponsors</a></li>
      <li><a href="#sdtet-about-section" v-smooth-scroll>About</a></li>
      <li><a href="#sdtet-contact-section" v-smooth-scroll>Contact</a></li>
      <li><a href="https://www.paypal.com/fundraiser/charity/1440775" target="_blank">Donate</a></li>
    </ul>
    <div class="sdtet-navigation-menu">
      <v-menu offset-y>
      <v-btn icon large slot="activator">
        <v-icon large color="amber darken-1">menu</v-icon>
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
            <a href="#sdtet-about-section" v-smooth-scroll><v-list-tile-title>About</v-list-tile-title></a>
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
  </nav>
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