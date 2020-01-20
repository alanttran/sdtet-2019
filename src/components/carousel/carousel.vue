<template>
  <!-- <v-carousel>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel> -->
  <div class="sdtet-jumbotron" id="home">
    <v-layout column align-center justify-center class="sdtet-container" style="padding-bottom: 24px;" >
      <!-- <h1>San Diego Tết Festival 2018<br/>Spring Blossoms - Mira Mesa<br/>February 16 - 18, 2018</h1> -->
      <img style="width: 80%" src="../../assets/sdtet_web_header.png" alt="">

      <!-- <p style="text-align: center; margin-top: 15px;"><span style="font-size: 20px;">Join us at our Autumn Gala Fundraiser! November 9th!</span> <v-btn normal round color="light-green lighten-2" target="_blank" href="https://business.facebook.com/events/1229801887192852/"><span>Thu Quyến Rũ — Autumn Gala Fundraiser</span></v-btn></p> --><br/>
      <div style="max-width: 700px; width: 80%">
        <iframe width="100%" height="335" src="https://www.youtube.com/embed/aR0iNq8FPcM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      <span style="font-family: 'Verdana', sans-serif; text-align: center; font-size: 20px;"><br/><b>MIRA MESA COMMUNITY PARK - FREE ADMISSION</b></span>
      <!-- <v-btn href="#entertainment" large round color="teal" dark v-smooth-scroll><v-icon left style="width:20px;">movie creation</v-icon>Join our entertainment!</v-btn> -->
      <!-- <v-btn href="#sdtet-vendors-section" large round color="teal" dark v-smooth-scroll><v-icon left style="width:20px;">store</v-icon>Become a vendor!</v-btn>
      <v-btn href="#sdtet-sponsors-section" large round color="teal" dark v-smooth-scroll><v-icon left style="width:20px;">business center</v-icon>Sponsor us!</v-btn> -->
      <!-- <v-btn href="#sdtet-vendors-section" target="_blank" large round color="teal" dark v-smooth-scroll >Vendor Applications 2019 Open!</v-btn> -->
      <v-flex class="sdtet-container" >
        <div class="sdtet-date-container">
          <p class="sdtet-text-align-center"><b>JANUARY</b></p>
          <table class="sdtet-element-align-center" style="font-size: 20px;">
            <tr>
              <td>24<sup>th</sup></td>
              <td>|</td>
              <td><b>Friday</b></td>
              <td style="text-align: right">5:00 pm</td>
              <td>-</td>
              <td style="text-align: right">10:00 pm</td>
            </tr>
            <tr>
              <td>25<sup>th</sup></td>
              <td>|</td>
              <td><b>Saturday</b></td>
              <td style="text-align: right">11:00 am</td>
              <td>-</td>
              <td style="text-align: right">10:00 pm</td>
            </tr>
            <tr>
              <td>26<sup>th</sup></td>
              <td>|</td>
              <td><b>Sunday</b></td>
              <td style="text-align: right">11:00 am</td>
              <td>-</td>
              <td style="text-align: right">9:00 pm*</td>
            </tr>
            <tr>
              <td colspan="6"><small>* <b>Tết Festival</b> ends at 6pm, <b>Carnival</b> ends at 9pm</small></td>
            </tr>
          </table>
        </div>
      </v-flex>
    </v-layout>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: './static/carousel/blossoms-banner.png'
          },
          {
            src: './static/carousel/fans.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .sdtet-jumbotron{
    background-color: #ffd200;
  }
  .sdtet-banner-message{
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 800px) {
    .sdtet-banner-message{
      font-size: 2.5em;
      
    }
    .sdtet-message-1{
      display: none;
    }
  }
  .sdtet-center-logo{
    max-height: 180px;
    width: 100%;
    max-width: 375px;
  }
  .sdtet-date-container{
    width: 100%;
    padding-top:30px;
    font-size: 16px;
  }
  @media screen and (max-width: 800px) {
    .sdtet-date-container{
      font-size: 1em;
    }
  }
  td{
    padding-right: 7px;
  }
</style>
