<template>
  <div class="sdtet-schedule-background">
    <div id="sdtet-schedule-section" class="sdtet-schedule-container sdtet-container">
      <h1>Event Schedule 2018</h1>
      <p>Events and times can change without notice</p>
      <v-layout align-center>
        <v-layout row wrap class="sdtet-schedule-grid">

          <v-flex lg5 class="sdtet-schedule-title sdtet-text-align-right ">Main Stage</v-flex>
          <v-flex lg2 class="sdtet-schedule-date pa-1">FRIDAY 02.16.18</v-flex>
          <v-flex lg5 class="sdtet-schedule-title sdtet-text-align-left ">Cultural Village</v-flex>
          <div class="sdtet-schedule-divider"></div>

          <!-- Friday -->
          <template v-for="(events, start_time) in friday">
            <v-flex v-if="events[0]" lg5 class="sdtet-schedule-main-stage">{{events[0].english_event}}
            </v-flex>
            <v-flex v-else lg5 class="sdtet-schedule-main-stage"></v-flex>
            <v-flex lg2 class="sdtet-schedule-date pa-1">{{start_time}}</v-flex>
            <v-flex v-if="events[1]" lg5 class="sdtet-schedule-cultural-village">
              {{events[1].english_event}}
            </v-flex>
            <v-flex v-else lg5 class="sdtet-schedule-cultural-village"></v-flex>
          </template>

          <!-- Saturday -->
          <div class="sdtet-schedule-spacer"></div>
          <v-flex lg5 class="sdtet-schedule-title sdtet-text-align-right">Main Stage</v-flex>
          <v-flex lg2 class="sdtet-schedule-date pa-1">SATURDAY 02.17.18</v-flex>
          <v-flex lg5 class="sdtet-schedule-title sdtet-text-align-left">Cultural Village</v-flex>
          <div class="sdtet-schedule-divider"></div>

          <template v-for="(events, start_time) in saturday">
            <v-flex v-if="events[0]" lg5 class="sdtet-schedule-main-stage">{{events[0].english_event}}
            </v-flex>
            <v-flex v-else lg5 class="sdtet-schedule-main-stage"></v-flex>
            <v-flex lg2 class="sdtet-schedule-date pa-1">{{start_time}}</v-flex>
            <v-flex v-if="events[1]" lg5 class="sdtet-schedule-cultural-village">
              {{events[1].english_event}}
            </v-flex>
            <v-flex v-else lg5 class="sdtet-schedule-cultural-village"></v-flex>
          </template>

          <!-- Sunday -->
          <div class="sdtet-schedule-spacer"></div>
          <v-flex lg5 class="sdtet-schedule-title sdtet-text-align-right">Main Stage</v-flex>
          <v-flex lg2 class="sdtet-schedule-date pa-1">SUNDAY 02.18.18</v-flex>
          <v-flex lg5 class="sdtet-schedule-title sdtet-text-align-left">Cultural Village</v-flex>
          <div class="sdtet-schedule-divider"></div>

          <template v-for="(events, start_time) in sunday">
            <v-flex v-if="events[0]" lg5 class="sdtet-schedule-main-stage">{{events[0].english_event}}
            </v-flex>
            <v-flex v-else lg5 class="sdtet-schedule-main-stage"></v-flex>
            <v-flex lg2 class="sdtet-schedule-date pa-1">{{start_time}}</v-flex>
            <v-flex v-if="events[1]" lg5 class="sdtet-schedule-cultural-village">
              {{events[1].english_event}}
            </v-flex>
            <v-flex v-else lg5 class="sdtet-schedule-cultural-village"></v-flex>
          </template>
          <div class="sdtet-schedule-spacer"></div>
        </v-layout>
      </v-layout>
    </div>
  </div>
</template>

<script type="text/javascript">
	import axios from "axios";
	import Vue from "vue";

	export default {
		data() {
			return {
				friday: {},
				saturday: {},
				sunday: {}
			};
		},
		created() {
			axios.get("https://cors-anywhere.herokuapp.com/https://admin.sdtet.com/php_file/get_festival_schedule.php")
      .then(response => {
					// JSON responses are automatically parsed.
					var moment = require("moment");
					for (var day in response.data) {
						for (var item in response.data[day]) {
							response.data[day][item].start_time = moment(response.data[day][item].start_time, "HH:mm").format("h:mm A");
							// console.log(response.data[day][item].start_time);
						}
					}
					// console.log("response", response.data);

					for (var day = 0; day < 3; day++) {
						// Get the day's events
						var eventList = response.data[Object.keys(response.data)[day]];
						// Get all starting times for the day
						var start_times = [...new Set(Object.keys(eventList).map(item => eventList[item].start_time))];
						// Group main stage and cultural village events by start times
						var groupedEvents = {};
						for (var eventKey in eventList) {
							var event = eventList[eventKey];
							if (!groupedEvents[event.start_time]) {
								groupedEvents[event.start_time] = [];
							}
							// Store main stage event at index 0, cultural village event at index 1
							Vue.set(groupedEvents[event.start_time], event.stage, event);
							// groupedEvents[event.start_time][event.stage] = event;
						}

						if (day === 0) {
							this.friday = Object.assign({}, this.friday, groupedEvents);
							// console.log("Friday", this.friday);
						}
						else if (day === 1) {
							this.saturday = Object.assign({}, this.saturday, groupedEvents);
							// console.log("Saturday", this.saturday);
						}
						else {
							this.sunday = Object.assign({}, this.sunday, groupedEvents);
							// console.log("Sunday", this.sunday);
						}
					}
				})
      .catch(e => {
       console.log(e);
     });
    }
  };
</script>

<style lang="scss">
@import 'schedule';
</style>