<template>
  <!-- <v-carousel>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel> -->
  <div class="sdtet-jumbotron">
    <div class="sdtet-container">
      <h1>San Diego Tết Festival 2018<br/>Spring Blossoms - Mira Mesa<br/>February 16 - 18, 2018</h1>
      <h2>Thank you for coming to our festival! See you next year on Feb 8-10, 2019!</h2><br/>
      <!-- <v-btn href="#entertainment" large round color="teal" dark v-smooth-scroll><v-icon left style="width:20px;">movie creation</v-icon>Join our entertainment!</v-btn> -->
      <!-- <v-btn href="#sdtet-vendors-section" large round color="teal" dark v-smooth-scroll><v-icon left style="width:20px;">store</v-icon>Become a vendor!</v-btn>
      <v-btn href="#sdtet-sponsors-section" large round color="teal" dark v-smooth-scroll><v-icon left style="width:20px;">business center</v-icon>Sponsor us!</v-btn> -->
      <v-btn href="https://goo.gl/forms/Q67Pl4yvXMdUSUJv1" target="_blank" large round color="teal" dark v-smooth-scroll >Sign Up for Pageant 2019!</v-btn>
    </div>
    
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
    background-image: url('../../assets/blossoms-banner.png');
    
  }
</style>
