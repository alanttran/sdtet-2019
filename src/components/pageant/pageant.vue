<template>
  <div id="sdtet-pageant-section" class="sdtet-container">
    <h1 class="sdtet-text-align-center">{{pageantData.title}}</h1>
    <div class="ml-5 mr-5">

      <img class="ms-vn-logo ml-2 mb-2" style="float: right; max-width: 100%;" src="../../assets/MissVietnam_Logo.png">
      <div v-for="text in pageantData.text" :key="text.id">
        <p>{{text}}</p>
      </div>
    </div>
    
    <h1 class="sdtet-text-align-center">Pageant {{pageantData.pageant_year}}</h1>
    <h2 class="sdtet-text-align-center">{{pageantData.slogan}}</h2>

    <v-container mb-4>
      <v-layout id="contestants" row wrap>
        <v-flex v-for="contestant in contestants" :key="contestant.id" xs12 sm6 md4 lg3>
          <v-card height="720px" class="ma-1">
            <v-card-media :src="contestant.main_image_link" height="300px" style="background-position: center top">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-3">{{contestant.pageant_number}}. {{contestant.first_name}} {{contestant.last_name}}</h3>
                <h4 class="headline mb-3" style="color: red">{{contestant.title}}</h4>
                <p>{{contestant.school}}</p>
                <p>"{{contestant.bio}}"</p>
              </div>
            </v-card-title>
            <v-card-actions>
              <!-- <v-btn :href="contestant.fb_link" target="_blank" block outline round color="teal" dark>Vote for me!</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
    axios.get('https://cors-anywhere.herokuapp.com/http://admin.sdtet.com/php_file/get_pageant_contestants.php')
    .then(response => {
      // JSON responses are automatically parsed.
      this.contestants = response.data
      //console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })  
  }
  
}
</script>

<style lang="scss">
  @import 'pageant';
</style>