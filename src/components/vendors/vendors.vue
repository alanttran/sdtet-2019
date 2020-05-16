<template>
  <div id="sdtet-vendors-section" class="sdtet-container">
    <div class="sdtet-divider"></div>
    <div class="ml-5 mr-5">
      <v-layout row wrap>
        <v-flex xs12 md6 lg6>
          <h1>Vendors</h1>
          <p v-for="text in vendorData.text" :key="text.id">{{text}}</p>
          <p>
            Questions or details?:
            <a href="mailto:vendor@sdtet.com">{{vendorData.email}}</a>
          </p>
        </v-flex>
        <v-flex xs12 md6 lg6 class="sdtet-text-align-center">
          <div class="sdtet-h1-spacer">
            <h1>&nbsp;</h1>
          </div>
          <template v-if="vendorData.isAppOpen">
            <h2>Select your booth to <b>apply or pay</b></h2>
            <v-layout row wrap justify-space-around>
              <v-flex xs6 sm6 lg6>
                <GameCommercialBooth></GameCommercialBooth>
              </v-flex>
              <v-flex xs6 sm6 lg6>
                <InfoArtBooth></InfoArtBooth>
              </v-flex>
              <v-flex
                xs6
                sm6
                lg6
                style="display: flex; justify-content: center; align-items: center"
              >
                <FoodBeverageBooth v-if="vendorData.foodAvail"></FoodBeverageBooth>
                <div v-else>
                  <b>Food vendors spots are sold out!</b>
                  <br />
                  <br />If you have any questions or would like to be on the waitlist, contact vendor@sdtet.com
                </div>
              </v-flex>
              <v-flex xs6 sm6 lg6>
                <NonProfitGovBooth></NonProfitGovBooth>
              </v-flex>
              <div></div>
            </v-layout>
          </template>
          <h2 v-else style="width: 250px; margin: 0 auto;">Vendor signups are now closed. If you have any questions, please contact vendor@sdtet.com</h2>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script type="text/javascript">
import GameCommercialBooth from "./types/game-commercial-booth";
import InfoArtBooth from "./types/info-art-booth";
import FoodBeverageBooth from "./types/food-beverage";
import NonProfitGovBooth from "./types/non-profit-gov";
import data from "./vendors.json";

export default {
  data() {
    return {
      dialog: false,
      vendorData: data
    };
  },
  components: {
    GameCommercialBooth,
    InfoArtBooth,
    FoodBeverageBooth,
    NonProfitGovBooth
  }
};
</script>
