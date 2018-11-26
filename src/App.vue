<template>
  <div id="app">
    <v-app>
      <v-content>
        <navigation></navigation>
        <carousel></carousel>
        <schedule></schedule>
        <entertainment></entertainment>
        <pageant></pageant>
        <vendors></vendors>
        <volunteers></volunteers>
        <sponsors></sponsors>
        <directions></directions>
        <v-dialog
        v-model="dialog"
        width="600"
      >
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            We are working on the new website!
          </v-card-title>
  
          <v-card-text>
            Join us next year on Feb 8-10, 2019! More applications coming soon! If you have any questions, email <b>info@sdtet.com</b>. <br/>
            <v-layout row wrap justify-space-around class="sdtet-text-align-center">
              <v-flex xs6 sm6 lg6>
                <br/><br/><br/>
                Food Vendor applications are full. Please email vendor@sdtet.com if you have any questions. 
              </v-flex>
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-button-flat-button sdtet-wrap-text" flat color="teal" href="https://docs.google.com/forms/d/e/1FAIpQLSdL6Xf-TZOjUR3yzvCneQSUqzTqxwSHkfA1OhgHR7XgK7IqBw/viewform" target="_blank">
                  <div class="pa-2 sdtet-text-align-center">
                    <img src="./assets/GameBooth.svg"><br/>
                    Vendor Application 2019
                  </div>
                </v-btn>
              </v-flex>
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-wrap-text" flat color="pink" style="height: auto" href="https://goo.gl/forms/Q67Pl4yvXMdUSUJv1" target="_blank">
                  <div class="pa-2 sdtet-text-align-center">
                    <img height="100" src="./assets/MissVietnam_Logo.png"><br/>
                    Miss Vietnam 2019 Application
                  </div>
                </v-btn>
              </v-flex>
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-wrap-text" flat color="teal" style="height: auto" href="https://docs.google.com/forms/d/1bxjmW1YjVQ9w75CITudI0XXj-m861T-kfneH2z_F9_0" target="_blank">
                  <div class="pa-2 sdtet-text-align-center">
                    <img height="100" src="./assets/Volunteer.svg"><br/>
                    Volunteers 2019
                  </div>
                </v-btn>
              </v-flex>
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-wrap-text" flat color="teal" style="height: auto" href="https://s3-us-west-1.amazonaws.com/sdtet/documents/VAYA_Sponsorship_2018_v1hi-res.pdf" target="_blank">
                  <div class="pa-2 sdtet-text-align-center">
                    <img height="100" src="./assets/Volunteer.svg"><br/>
                    Sponsors 2019
                  </div>
                </v-btn>
              </v-flex>                      
            </v-layout>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Navigation from './components/navigation/navigation'
  import Carousel from './components/carousel/carousel'
  import Schedule from './components/schedule/schedule'
  import Entertainment from './components/entertainment/entertainment'
  import Pageant from './components/pageant/pageant'
  import Sponsors from './components/sponsors/sponsors'
  import Vendors from './components/vendors/vendors'
  import Volunteers from './components/volunteers/volunteers'
  import Directions from './components/directions/directions'
  import Contact from './components/contact/contact'

  export default {
    name: 'app',
    components: {
      Navigation,
      Carousel,
      Schedule,
      Entertainment,
      Pageant,
      Sponsors,
      Vendors,
      Volunteers,
      Directions,
      Contact
    },
    data () {
      return {
        dialog: true
      }
    }

  }
</script>

<style lang="scss">
  @import 'theme/style.scss';
</style>
