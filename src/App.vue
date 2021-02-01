<template>
  <v-app>
    <v-main>
      <!-- <navigation></navigation>
      <carousel @showModal="showModal()"></carousel>
      <schedule></schedule>
      <entertainment></entertainment>
      <pageant></pageant>
      <vendors></vendors>
      <volunteers></volunteers>
      <sponsors></sponsors>
      <about></about>
      <directions></directions> -->
      <div style="text-align: center; padding: 8px; font-size: 18px">
        The <b>Vietnamese American Youth Alliance</b> and <b>Vietnamese Federation of San Diego</b> presents...
      </div>
      <div class="banner" style="">
        <!-- <img width="800px"
          src="https://t3.ftcdn.net/jpg/04/03/53/94/240_F_403539445_YIxppSktN5m8UcjvQYuHgQuREuD1NX6m.jpg"
          alt=""
        /> -->
        <div style="font-family: 'Oswald', sans-serif; text-shadow: 4px 3px 0 #111; text-align: center; padding-top: 32px;">
          <div style="color: white; font-size: 48px;">San Diego Tết Festival</div>
          <div style="color: white; font-size: 32px;">Hội Chợ Tết San Diego</div>
          <div style="color: white; font-size: 32px;">SDTet @ Home</div>
          <div style="color: white; font-size: 32px;">Xuân An Lành</div>
        </div>
      </div>
      
      <div style="overflow: hidden; position: relative;">
        <div style="text-align: center;"><br/>
        <p style="font-size: 24px;"><b>February 13th, 2021</b><br/> 12:00 PM - 5:00 PM<br/><u><b>{{timeLeft}} days</b></u> until the livestream! See you then!</p>
        <p>Questions? Email us at <b>info@sdtet.com</b></p>
        <p style="text-align: center;"><v-btn style="width:350px" href="https://www.paypal.com/fundraiser/charity/1440775" target="_blank" rounded color="red">Donate to us!</v-btn></p>
        <img style="width: 100%; max-width: 600px" src="./assets/tet-at-home.png" alt />
      </div>
        <img style="position: absolute; top: 200px; left: calc(50% - 650px);" src="./assets/ox-lion-dance.png" alt="">
        <img style="position: absolute; top: 200px; right: calc(50% - 650px);" src="./assets/ox-lion-dance-2.png" alt="">
      </div>
      <div class="ox-footer"></div>
      <div style="text-align: center;"><span>© 2021 San Diego Tết Festival</span></div>
      <!-- <v-dialog v-model="dialog" width="750">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title
            >16th Annual SD Tết Festival Goes Virtual Feb 13, 2021</v-card-title
          >

          <v-card-text>
            <div style="width: 400px; padding: 1rem; margin: 0 auto">
              <img width="100%" src="./assets/tet-at-home.png" alt />
            </div>
            <p>
              If you have any questions or feedback, send them to
              <b>info@sdtet.com!</b>
            </p>
            <div style="text-align: center; padding-top: 20px"></div>

            <v-layout row wrap justify-space-around class="sdtet-text-align-center">
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
            </v-layout>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="teal"
              text
              target="_blank"
              href="https://www.paypal.com/fundraiser/charity/1440775"
              >Donate to sdtet</v-btn
            >
            <v-btn color="primary" text @click="dialog = false"
              >Go to last year's Site</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>-->
    </v-main>
  </v-app>
</template>

<script>
import markdown from "./press-release-2021.md";

export default {
  name: "app",
  components: {},
  data() {
    return {
      dialog: false,
      pressReleaseText: markdown,
      timeLeft: ""
    };
  },
  methods: {
    showModal() {
      this.dialog = true;
    },
  },
  created() {
    var moment = require("moment");
    var todaysdate = moment();
    var festivalDate = moment("2021-02-13");
    this.timeLeft = festivalDate.diff(todaysdate, "days");
  }
};
</script>

<style lang="scss">
@import "theme/style.scss";
</style>
