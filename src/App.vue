<template>
  <v-app>
    <v-main>
      <navigation></navigation>
      <carousel></carousel>
      <schedule></schedule>
      <entertainment></entertainment>
      <pageant></pageant>
      <vendors></vendors>
      <volunteers></volunteers>
      <sponsors></sponsors>
      <about></about>
      <directions></directions>
      <v-dialog v-model="dialog" width="600">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Thank you for joining us!</v-card-title>

          <v-card-text>
            <h2>
              Next festival is on
              <b>Feb 12-14, 2021</b>! For the year of the Ox!
            </h2>
            <div style="width: 250px; padding: 1rem; margin: 0 auto">
              <img height="200" src="./assets/Ox-2021.png" alt />
            </div>

            <p>
              If you have any questions or feedback, send them to
              <b>info@sdtet.com!</b>
            </p>
            <div style="text-align: center; padding-top: 20px;"></div>

            <!-- <v-layout row wrap justify-space-around class="sdtet-text-align-center">
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-button-flat-button sdtet-wrap-text" flat color="teal"  href="https://docs.google.com/forms/d/e/1FAIpQLSeFBN14OgWFnXxMsXV2sst0vbBAkaqkCvZqo7OJx2ru0y8G-g/viewform" target="_blank">
                  <div class="pa-2 sdtet-text-align-center" >
                    <img src="./assets/FoodBooth.svg"><br/>
                    Food Vendor Application 2019
                  </div>
                </v-btn>
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
            </v-layout>-->
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="teal"
              text
              target="_blank"
              href="https://www.paypal.com/fundraiser/charity/1440775"
            >Donate to sdtet</v-btn>
            <v-btn color="primary" text @click="dialog = false">Go to last year's Site</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/navigation/navigation";
import Carousel from "./components/carousel/carousel";
import Schedule from "./components/schedule/schedule";
import Entertainment from "./components/entertainment/entertainment";
import Pageant from "./components/pageant/pageant";
import Sponsors from "./components/sponsors/sponsors";
import Vendors from "./components/vendors/vendors";
import Volunteers from "./components/volunteers/volunteers";
import Directions from "./components/directions/directions";
import About from "./components/about/about";

export default {
  name: "app",
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
    About
  },
  data() {
    return {
      dialog: true
    };
  }
};
</script>

<style lang="scss">
@import "theme/style.scss";
</style>
