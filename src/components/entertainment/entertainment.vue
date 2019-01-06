<template>
<v-parallax  height="800px" :src="require('@/assets/tet-bg-02.jpg')">
  <div class="sdtet-entertainment-container">
    <div class="sdtet-container">
      <h1 id="entertainment" class="sdtet-text-align-center">Entertainment</h1>
      <p class="sdtet-text-align-center">Would you like to be part of our entertainment program? Apply below!</p>

      <v-layout row wrap justify-center>

        <v-flex sm12 md4 lg3>
          <v-card class="sdtet-entertainment-card">
            <v-card-media :src="require('@/assets/StepUpDance.jpg')" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <h3 class="headline mb-3">Step Up Dance Competition</h3>
							<div>Do you love dancing? If you have an up and coming team or a new choreography to try, why not bring yourselves to our stage and wow us for the new year!</div>

              <p v-if="stepUpDanceTimeLeft < 0"><br/>Check out the competition at <b>Main Stage - Friday Feb 8 at 8:00pm!</b></p>

              <div v-if="stepUpDanceTimeLeft >= 0"><b>Deadline: {{stepUpDanceEnd}}</b></div>              
            </v-card-title>
            <v-card-actions>
              <v-btn v-if="stepUpDanceTimeLeft >= 0" href="https://goo.gl/forms/m72AzVtjPkrpAPUw2" target="_blank" block outline round color="teal" dark>Sign up! <span v-if="stepUpDanceTimeLeft < 10">{{stepUpDanceTimeLeft}} days left!</span> </v-btn>
              
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
                <div>The new year is a celebration for everyone as well as the youth! It is probably one of the few times a year that they are able to learn about their culture in an exciting way!</div>

                <div v-if="kidsSpotlightTimeLeft < 0">
                  <p><br/>See the kids at <b>Cultural Village - Sunday Feb 10 at 1:00pm!</b></p>
                  <p>Questions? Email: pphhnv@yahoo.com</p>
                </div>                
                
                <div v-if="kidsSpotlightTimeLeft >= 0">
                  <div><br/><b>Deadline: {{kidsSpotlightEnd}}</b></div>                  
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn v-if="kidsSpotlightTimeLeft >= 0" href="https://s3-us-west-1.amazonaws.com/sdtet/documents/Kids-Spotlight-Application-2019.docx" target="_blank" block outline round color="teal" dark>Download Form <span v-if="kidsSpotlightTimeLeft < 10">&nbsp;- {{kidsSpotlightTimeLeft}} days left!</span></v-btn>
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
                <div>Do you love singing? We do! Karaoke is basically in our blood! For
                  the new year, we would love to listen to you perform your favorite
                  songs on stage!</div>
                  
                  <div v-if="goldenVoiceTimeLeft < 0">
                    <p><br/>Cheer on the singers at <b>Main Stage - Sunday Feb 10 at 1:00pm!</b></p>
                    <p>Questions? Email: goldenvoice@sdtet.com</p>
                  </div> 

                  <div v-if="goldenVoiceTimeLeft >= 0"><br/><b>Deadline: {{goldenVoiceEnd}}</b></div>
                  
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn v-if="goldenVoiceTimeLeft >= 0" href="https://goo.gl/forms/BcBvEodlT3BjF2iI2" target="_blank" block outline round color="teal" dark>Sign up! <span v-if="goldenVoiceTimeLeft < 10">&nbsp;- {{goldenVoiceTimeLeft}} days left!</span></v-btn>
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
        stepUpDanceTimeLeft: 0,
        kidsSpotlightTimeLeft: 0,
        goldenVoiceTimeLeft: 0,
        stepUpDanceEnd: '',
        kidsSpotlightEnd: '',
        goldenVoiceEnd: ''
      }
    },
    created () {
      var moment = require('moment')
      var todaysdate = moment()

      var stepUpDanceDate = moment('2019-02-01')
      var kidsSpotlightDate = moment('2019-01-12')
      var goldenVoiceDate = moment('2019-02-03')

      this.stepUpDanceEnd = stepUpDanceDate.format('LL')
      this.kidsSpotlightEnd = kidsSpotlightDate.format('LL')
      this.goldenVoiceEnd = goldenVoiceDate.format('LL')
      
      this.stepUpDanceTimeLeft = stepUpDanceDate.diff(todaysdate, 'days')
      this.kidsSpotlightTimeLeft = kidsSpotlightDate.diff(todaysdate, 'days')
      this.goldenVoiceTimeLeft = goldenVoiceDate.diff(todaysdate, 'days')
    }
  }
</script>

<style lang="scss">
  @import 'entertainment';
</style>