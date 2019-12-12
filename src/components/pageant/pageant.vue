<template>

  <div id="sdtet-pageant-section" class="sdtet-container">
    <br/>
    <h1 class="sdtet-text-align-center">{{pageantData.title}}</h1>
    <div class="sdtet-text-align-center">
      
      <div v-if="signUpTimeLeft >= 0">
        <v-btn href="https://forms.gle/dB2hLkfNsWqXo4Y58" target="_blank" large round color="teal" dark v-smooth-scroll >Sign up for Pageant 2020!</v-btn>
      </div>
      <div v-else>
        <p><span class="navy"><b>Join us on Saturday January 25th at 5:30PM on the main stage to cheer on our girls!</b></span></p>
      </div>
      
    </div>
    <br/>
    <div class="ml-5 mr-5">

      <img class="ms-vn-logo ml-2 mb-2" style="float: right; max-width: 100%;" src="../../assets/MissVietnam_Logo.png">
      <div class="ms-vn-text" v-for="text in pageantData.text" :key="text.id">
        <p>{{text}}</p>
      </div>
    </div>
    <br/>
    <h1 class="sdtet-text-align-center">Pageant {{pageantData.pageant_year}}</h1>
    <h2 class="sdtet-text-align-center">{{pageantData.slogan}}</h2>
    <!-- <div class="sdtet-text-align-center"><img style="height: 600px;" src="../../assets/pageant-preview-2019.png" alt=""></div> -->
    <div style="max-width: 750px; margin: 0 auto">
      <iframe width="100%" height="415" style="max-width:750px" src="https://www.youtube.com/embed/e8w5qf2yLOU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
    <!-- <v-container mb-4>
      <v-layout id="contestants" row wrap>
        <v-flex v-for="contestant in contestants" :key="contestant.id" xs12 sm6 md4 lg3>
          <v-card height="670px" class="ma-1" style="display: flex; flex-direction: column">
            <v-card-media :src="contestant.main_image_link" height="300px" style="background-position: center top; flex: none">
            </v-card-media>
            <v-card-title primary-title class="pb-0" style="flex: 300px; align-items: start">
              <div>
                <h3 class="headline mb-3">{{contestant.pageant_number}}. {{contestant.first_name}} {{contestant.last_name}}</h3>
                <h4 class="headline mb-3" style="color: red">{{contestant.title}}</h4>
                <p><i>{{contestant.school}}</i></p>
                <p>"{{contestant.bio}}"</p>
              </div>
            </v-card-title>
            <v-card-actions class="pb-3 pt-0" style="flex: none">
              <v-btn v-if="pageantData.voting" :href="contestant.fb_link" target="_blank" block outline round color="teal" dark>Vote for {{contestant.first_name}}!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import data from './pageant.json'

export default {
  data () {
    return {
      contestants: [],
      pageantData: data
    }
  },
  created () {
    axios.get('https://admin.sdtet.com/php_file/get_pageant_contestants.php')
    .then(response => {
      // JSON responses are automatically parsed.
      this.contestants = response.data
      //console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })

    var moment = require('moment')
    var todaysdate = moment()

    var signUpDate = moment(this.pageantData.signups_close_date);

    this.signUpTimeLeft = signUpDate.diff(todaysdate, 'days') 
  }
  
}
</script>

<style lang="scss">
  @import 'pageant';
</style>