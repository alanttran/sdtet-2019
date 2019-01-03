<template>
<v-parallax  height="800px" :src="require('@/assets/tet-bg-02.jpg')">
  <div class="sdtet-entertainment-container">
    <div class="sdtet-container">
      <h1 id="entertainment" class="sdtet-text-align-center">Entertainment</h1>
      <p class="sdtet-text-align-center">Would you like to be part of our entertainment program? Apply below!</p>

      <v-layout row wrap>

        <v-flex sm12 md4 lg3>
          <v-card class="sdtet-entertainment-card">
            <v-card-media :src="require('@/assets/StepUpDance.jpg')" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <h3 class="headline mb-3">Step Up Dance Competition</h3>
							<div>Do you love dancing? If you have an up and coming team or a new choreography to try,
              why not bring yourselves to our stage and wow us for the new year!</div>
              <!-- <p><br/>Check out the competition at <b>Main Stage - Friday Feb 16 at 8:00pm!</b></p> -->
            </v-card-title>
            <v-card-actions>
              <v-btn v-if="stepUpDanceTimeLeft > 0" href="https://goo.gl/forms/m72AzVtjPkrpAPUw2" target="_blank" block outline round color="teal" dark>Sign up! {{stepUpDanceTimeLeft}} days left!</v-btn>
              
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex sm12 md4 lg3>
          <v-card class="sdtet-entertainment-card">
            <v-card-media :src="require('@/assets/KidsSpotlight.jpg')" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-3">Kid's Spotlight</h3>
                <div>While the new year is a celebration for everyone, we know that it
                  is the most enjoyable for the youth! It is probably one of the
                  few times a year that they are able to learn about their culture
                  in a fun and exciting way!</div>
                  <!-- <p><br/>See the kids at <b>Cultural Village - Sunday Feb 18 at 1:00pm!</b></p> -->
                  <v-btn href="https://s3-us-west-1.amazonaws.com/sdtet/documents/Kids-Spotlight-Application-2019.docx" target="_blank" block outline round color="teal" dark>Download Application</v-btn>
              </div>
            </v-card-title>
            <v-card-actions>
              <!-- <v-btn flat color="orange">Share</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex sm12 md4 lg3>
          <v-card class="sdtet-entertainment-card">
            <v-card-media :src="require('@/assets/GoldenVoice.jpg')" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-3">Golden Voice</h3>
                <div>Do you love singing? We do! Kareoke is basically in our blood! For
                  the new year, we would love to listen to you perform your favorite
                  songs on stage!</div>
                <!-- <p><br/>Cheer on the singers at <b>Main Stage - Sunday Feb 18 at 1:00pm!</b></p> -->
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn href="https://goo.gl/forms/BcBvEodlT3BjF2iI2" target="_blank" block outline round color="teal" dark>Sign up!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>

    </div>
  </div>
</v-parallax>
</template>

<script type="text/javascript">
  export default{
    data () {
      return {
        stepUpDanceTimeLeft: 0
      }
    },
    created () {
      var moment = require('moment')
      var eventdate = moment('2019-01-25')
      var todaysdate = moment()
      this.stepUpDanceTimeLeft = eventdate.diff(todaysdate, 'days')
    }
  }
</script>

<style lang="scss">
  @import 'entertainment';
</style>