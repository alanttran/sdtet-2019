<template>
  <div id="sdtet-volunteers-section" class="sdtet-container">
    <div class="sdtet-divider"></div>
    <div class="ml-5 mr-5">
      <v-layout row wrap>
        <v-flex xs12 md6 order-md2>
          <h1 id="volunteers">Volunteers</h1>
          <p>
            <strong>We are currently looking for volunteers!</strong>
          </p>
          <div v-for="text in volunteerData.text" :key="text.id">
            <p>{{text}}</p>
          </div>
          <p>-VAYA (For more info email us at
              <a href="mailto:volunteer@sdtet.com ">volunteer@sdtet.com</a>)</p>
        </v-flex>
        <v-flex xs12 md6>
          <div class="sdtet-volunteers-forms-container sdtet-text-align-center">
            <div v-if="!volunteerData.signups_open">
              <p><span class="navy"><b>Signups are closed!</b></span></p>
              <div class="sdtet-h1-spacer">
                <h1>&nbsp;</h1>
              </div>
            </div>
            <div v-else>
              <p><span class="sdtet-text-red-bold">Signups are open again!</span></p>
              <a target="_blank" v-bind:href="volunteerData.signup_form_url">
                <v-btn round color="teal" dark>Sign up now!</v-btn>
              </a>
            </div>
            
            <br>
            <v-layout row justify-space-around>
              <v-flex md6>
                <v-btn class="sdtet-button-flat-button sdtet-wrap-text sdtet-volunteers-form" flat
                  color="teal" target="_blank" href="https://s3-us-west-1.amazonaws.com/sdtet/documents/Release-of-Liability.pdf">
                  <div class="sdtet-text-align-center">
                    <img src="../../assets/Volunteer.svg" alt="Consent and Release of Liability Form">
                    <br/>
                    <strong>required:</strong>
                    <br/> Consent & Release
                    <br/> of Liability Form
                  </div>
                </v-btn>
              </v-flex>
              <v-flex md6>
                <v-btn class="sdtet-button-flat-button sdtet-wrap-text sdtet-volunteers-form" flat
                  color="teal" target="_blank" href="https://s3-us-west-1.amazonaws.com/sdtet/documents/hours_verification.pdf">
                  <div class="sdtet-text-align-center sdtet-form-text">
                    <img src="../../assets/Volunteer.svg" alt="Hours Verification form">
                    <br/>
                    <strong>optional: </strong>
                    <br/> Hours Verification
                    <br/> Form
                  </div>
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
          <br>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<style lang="scss">
  @import 'volunteers';
</style>

<script>
  import data from './volunteers.json'

  export default {
  data () {
    return {
      volunteerData: data
    }
  }
}
</script>