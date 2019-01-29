<template>
  <!-- <v-carousel>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel> -->
  <div id="sdtet-schedule-section"  class="sdtet-jumbotron">
    <v-layout column align-center justify-center class="sdtet-container">
      <!-- <h1>San Diego Tết Festival 2018<br/>Spring Blossoms - Mira Mesa<br/>February 16 - 18, 2018</h1> -->
      <img class="sdtet-center-logo" src="../../assets/pig-logo.svg" alt="">
      <span style="font-family: 'Verdana'"><br/>MIRA MESA COMMUNITY PARK - FREE ADMISSION</span>
      <!-- <v-btn href="#entertainment" large round color="teal" dark v-smooth-scroll><v-icon left style="width:20px;">movie creation</v-icon>Join our entertainment!</v-btn> -->
      <!-- <v-btn href="#sdtet-vendors-section" large round color="teal" dark v-smooth-scroll><v-icon left style="width:20px;">store</v-icon>Become a vendor!</v-btn>
      <v-btn href="#sdtet-sponsors-section" large round color="teal" dark v-smooth-scroll><v-icon left style="width:20px;">business center</v-icon>Sponsor us!</v-btn> -->
      <!-- <v-btn href="#sdtet-vendors-section" target="_blank" large round color="teal" dark v-smooth-scroll >Vendor Applications 2019 Open!</v-btn> -->
      <v-flex class="sdtet-container" >
        <div class="sdtet-date-container">
          <p><b>FEBRUARY</b></p>
          <table>
            <tr>
              <td>8<sup>th</sup></td>
              <td>|</td>
              <td><b>Friday</b></td>
              <td style="text-align: right">5:00 pm</td>
              <td>-</td>
              <td style="text-align: right">10:00 pm</td>
            </tr>
            <tr>
              <td>9<sup>th</sup></td>
              <td>|</td>
              <td><b>Saturday</b></td>
              <td style="text-align: right">11:00 am</td>
              <td>-</td>
              <td style="text-align: right">10:00 pm</td>
            </tr>
            <tr>
              <td>10<sup>th</sup></td>
              <td>|</td>
              <td><b>Sunday</b></td>
              <td style="text-align: right">11:00 am</td>
              <td>-</td>
              <td style="text-align: right">9:00 pm*</td>
            </tr>
            <tr>
              <td colspan="2"></td>
              <td colspan="4"><small>* <b>Tết Festival</b> ends at 6pm, <b>Carnival</b> ends at 9pm</small></td>
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
    background-color: #023C52;
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
    height: 180px;
    margin-top: 40px;
  }
  .sdtet-date-container{
    width: 520px;
    padding-top:30px;
    font-size: 16px;
  }
  td{
    padding-right: 7px;
  }
</style>
