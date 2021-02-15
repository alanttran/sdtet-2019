<template>
  <v-app>
    <v-main>
      <!-- <navigation></navigation>
      <carousel @showModal="showModal()"></carousel>
      <schedule></schedule>
      <entertainment></entertainment>
      <pageant></pageant>
      <vendors></vendors>
      <volunteers></volunteers>
      <sponsors></sponsors>
      <about></about>
      <directions></directions> -->
      <div style="text-align: center; padding: 8px; font-size: 18px">
        The <b>Vietnamese American Youth Alliance</b> and
        <b>Vietnamese Federation of San Diego</b> presents...
      </div>
      <div class="banner" style="">
        <!-- <img width="800px"
          src="https://t3.ftcdn.net/jpg/04/03/53/94/240_F_403539445_YIxppSktN5m8UcjvQYuHgQuREuD1NX6m.jpg"
          alt=""
        /> -->
        <div
          style="
            font-family: 'Oswald', sans-serif;
            text-shadow: 4px 3px 0 #111;
            text-align: center;
            padding-top: 32px;
          "
        >
          <div style="color: white; font-size: 48px">
            San Diego Tết Festival
          </div>
          <div style="color: white; font-size: 32px">Hội Chợ Tết San Diego</div>
          <div style="color: white; font-size: 32px">SDTet @ Home</div>
          <div style="color: white; font-size: 32px">Xuân An Lành</div>
        </div>
      </div>

      <div style="overflow: hidden; position: relative">
        <div style="text-align: center">
          <br />
          <p style="font-size: 24px">
            <b>February 13th, 2021</b><br />
            12:00 PM - 5:00 PM<br />
            
          </p>
          <p>*** <u>This is a rebroadcast</u>. There are no giveaways today. Thank you for your support! *** </p>
          <p>See you next year for the Year of the Tiger - January 28-30, 2022!</p>
          <p>Questions? Email us at <b>info@sdtet.com</b></p>
          <p style="text-align: center">
            <v-btn
              style="width: 350px"
              href="https://www.paypal.com/fundraiser/charity/1440775"
              target="_blank"
              rounded
              color="red"
              >Donate to us!</v-btn
            >
          </p>
          <p>...or consider donating to the <a href="#MSVN-project">MSVN Project</a> below!</p>
        </div>
        <!-- <img style="position: absolute; top: 200px; left: calc(50% - 650px);" src="./assets/ox-lion-dance.png" alt="">
        <img style="position: absolute; top: 200px; right: calc(50% - 650px);" src="./assets/ox-lion-dance-2.png" alt=""> -->
      </div>
      <div style="max-width: 1024px; margin: 0 auto">
        <div style="padding: 56.25% 0 0 0; position: relative">
          <iframe
            src="https://vimeo.com/event/691615/embed/94480f9de0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
          ></iframe>
        </div>
      </div>
      <div style="display: flex; max-width: 1280px; margin: 48px auto">
        <div
          class="poster"
          style="flex: 50%; min-width: 360px; text-align: center"
        >
          <img
            style="width: 100%; margin-bottom: 48px; max-width: 600px"
            src="./assets/tet-at-home.png"
            alt
          />
        </div>
        <div
          style="
            flex: auto;
            min-width: 360px;
            padding-left: 16px;
            padding-right: 16px;
          "
        >
          <div style="margin: 0 auto; max-width: 600px">
            <p>
              <b style="font-size: 24px">Schedule</b><br /><small
                >Exact times may change without notice</small
              >
            </p>

            <p><b>Openings</b></p>
            <ul>
              <li
                v-for="timeslot in schedule1"
                :key="timeslot.id"
                class="ox-timeslot"
              >
                <span class="ox-time">{{ timeslot.time }}</span>
                <span class="ox-text">{{ timeslot.text }}</span>
              </li>
            </ul>
            <br />
            <!-- <p><b>Official Remarks</b></p>
            <ul>
              <li v-for="timeslot in schedule2" :key="timeslot.id" class="ox-timeslot">
                <span class="ox-time">{{timeslot.time}}</span>
                <span class="ox-text">{{timeslot.text}}</span>
              </li>
            </ul>
            <br/> -->
            <p><b>Entertainment</b></p>
            <ul>
              <li
                v-for="timeslot in schedule3"
                :key="timeslot.id"
                class="ox-timeslot"
              >
                <span class="ox-time">{{ timeslot.time }}</span>
                <span class="ox-text">{{ timeslot.text }}</span>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      <div style="text-align: center; max-width: 960px; margin: 75px auto; color: black">
        <h1>Miss Vietnam San Diego</h1>
        <p>Our Royal Court is proud to announce their dedication to another year of representing the Vietnamese American community of San Diego. We look forward to crowning the next Miss Vietnam San Diego Royal Court in 2022!</p>
        <p><img style="width: 100%; max-width: 1024px;" src="./assets/msvn-court.png" alt=""></p>
      </div>
      <div style="display: flex;max-width: 960px; margin: 0 auto; color: black">
        <div>
          <img class="msvn-project-image" src="./assets/community-project.png" alt="">
        </div>
        <div style="padding-left: 32px; padding-right: 32px;">
          <h1 id="MSVN-project" style="padding-top: 0">Community Project</h1>
          <h2>North County Lineline: Communities in Action</h2>
          <p>
            For our final project, Miss Vietnam San Diego is proud to raise funds
            to support Communities in Action. This program helps hardworking
            low-income individual get the support they need to live without
            worrying about paying for their next meal or meeting next month's
            rent. With your support, our goal is to raise $300 in donations to
            help these families towards financial stability and empowerment.
          </p>
          <p><u>Nearly 14% of San Diego County's population live below the federal poverty threshold.</u></p>
          <p>
            Your donation will go towards...
            <ul>
              <li>School supplies for students</li>
              <li>Essential hygiene products</li>
              <li>Gas cards and passes for North County Transit District</li>
              <li>Emergency assistance for basic needs</li>
              <li>Helping families follows a budget, increase savings and maintain permanent housing.</li>
            </ul>
          </p>
          <p>***<b>Donations can be made through Venmo <b><u>@MISSVIETNAMSD</u></b>. Every $5 donation receives a free lixi envelope from us!</b>***</p>
          <p>Thank you for your continued support!</p>
        </div>
      </div>
      <div class="ox-footer"></div>
      <div style="text-align: center">
        <span>© 2021 San Diego Tết Festival</span>
      </div>
      <!-- <v-dialog v-model="dialog" width="750">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title
            >16th Annual SD Tết Festival Goes Virtual Feb 13, 2021</v-card-title
          >

          <v-card-text>
            <div style="width: 400px; padding: 1rem; margin: 0 auto">
              <img width="100%" src="./assets/tet-at-home.png" alt />
            </div>
            <p>
              If you have any questions or feedback, send them to
              <b>info@sdtet.com!</b>
            </p>
            <div style="text-align: center; padding-top: 20px"></div>

            <v-layout row wrap justify-space-around class="sdtet-text-align-center">
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-button-flat-button sdtet-wrap-text" flat color="teal"  href="https://docs.google.com/forms/d/e/1FAIpQLSeFBN14OgWFnXxMsXV2sst0vbBAkaqkCvZqo7OJx2ru0y8G-g/viewform" target="_blank">
                  <div class="pa-2 sdtet-text-align-center" >
                    <img src="./assets/FoodBooth.svg"><br/>
                    Food Vendor Application 2019
                  </div>
                </v-btn>
              </v-flex>
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-button-flat-button sdtet-wrap-text" flat color="teal" href="https://docs.google.com/forms/d/e/1FAIpQLSdL6Xf-TZOjUR3yzvCneQSUqzTqxwSHkfA1OhgHR7XgK7IqBw/viewform" target="_blank">
                  <div class="pa-2 sdtet-text-align-center">
                    <img src="./assets/GameBooth.svg"><br/>
                    Vendor Application 2019
                  </div>
                </v-btn>
              </v-flex>
              <v-flex xs6 sm6 lg6>
                <v-btn class="sdtet-wrap-text" flat color="pink" style="height: auto" href="https://goo.gl/forms/Q67Pl4yvXMdUSUJv1" target="_blank">
                  <div class="pa-2 sdtet-text-align-center">
                    <img height="100" src="./assets/MissVietnam_Logo.png"><br/>
                    Miss Vietnam 2019 Application
                  </div>
                </v-btn>
              </v-flex>                     
            </v-layout>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="teal"
              text
              target="_blank"
              href="https://www.paypal.com/fundraiser/charity/1440775"
              >Donate to sdtet</v-btn
            >
            <v-btn color="primary" text @click="dialog = false"
              >Go to last year's Site</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>-->
    </v-main>
  </v-app>
</template>

<script>
import markdown from "./press-release-2021.md";

export default {
  name: "app",
  components: {},
  data() {
    return {
      dialog: false,
      pressReleaseText: markdown,
      timeLeft: "",
      schedule1: [
        {
          time: "12:00 PM",
          text: "National Anthem - US & VN",
        },
        {
          time: "12:04 PM",
          text: "President Remarks - Peter (HH) & Dennis (VAYA)",
        },
        {
          time: "12:08 PM",
          text: "Prayer Ceremony",
        },
        {
          time: "12:38 PM",
          text: "Lion Dance & Firecrackers",
        },
        {
          time: "12:59 PM",
          text: "San Diego City & County Officials' Remarks",
        },
      ],
      schedule2: [
        {
          time: "12:59 PM",
          text: "Senate President Pro Tempore Toni Atkins",
        },
        {
          time: "1:00 PM",
          text: "Assemblymember Brian Maienschein",
        },
        {
          time: "1:01 PM",
          text: "County Supervisor Nathan Fletcher",
        },
        {
          time: "1:02 PM",
          text: "County Supervisor Terra Lawson-Renner",
        },
        {
          time: "1:03 PM",
          text: "City Attorney's Office Mara Elliott",
        },
        {
          time: "1:04 PM",
          text: "Police Chief David Nisleit",
        },
        {
          time: "1:05 PM",
          text: "City Council President Jennifer Campbell",
        },
        {
          time: "1:05 PM",
          text: "Council District 6 - Chris Cate",
        },
      ],
      schedule3: [
        {
          time: "1:05 PM",
          text:
            '"Vội Vàng Đón Xuân" - Đoàn Phi, Hoàng Thục Linh, Hồ Hoàng Yến & Quốc Khanh',
        },
        {
          time: "",
          text:
            '"Liên Khúc Xuân Này Con Không Về/Xuân Này Con Về Mẹ Ở Đâu" - Huỳnh Phi Tiễn & Đức Tân',
        },
        {
          time: "",
          text: '"Anh Đã Thấy Mùa Xuân Chưa" - Nguyên Khang & Diễm Liên',
        },
        {
          time: "1:28 PM",
          text: "Kids Performances - Chương Trình Thiếu Nhi",
        },
        {
          time: "2:04 PM",
          text: "First Giveaway (Sat only)! $50 Pho Cow Cali",
        },
        {
          time: "2:09 PM",
          text: "Myth of Bánh Chưng",
        },
        {
          time: "2:25 PM",
          text: "Miss Vietnam Thank You Video",
        },
        {
          time: "2:31 PM",
          text: "Black Leather Couch",
        },
        {
          time: "3:01 PM",
          text: "Asian Story Theatre - Oxtail",
        },
        {
          time: "3:18 PM",
          text: "Second Giveaway (Sat only)! $25 Vien Dong/World Foods",
        },
        {
          time: "3:23 PM",
          text: "How to make Bánh Tét",
        },
        {
          time: "3:48 PM",
          text: '"Đám Cưới Đầu Xuân" - Hoàng Thục Linh & Đức Tân',
        },
        {
          time: "",
          text:
            '"Ngày Xuân Long Phụng Sum Vầy" - Xuân Nghi & Mimi (feat. Hoàng Pio & Kny)',
        },
        {
          time: "",
          text: '"Tình Em Mùa Xuân" - Nguyên Tú & Nguyên Khôi',
        },
        {
          time: "",
          text: '"Đoản Xuân Ca" - Huỳnh Phi Tiễn & Ái Ni',
        },
        {
          time: "4:14 PM",
          text: "VNTV Kids",
        },
        {
          time: "4:33 PM",
          text: "Third Giveaway (Sat only)! $50 Crab Hut",
        },
        {
          time: "4:39 PM",
          text: "Raya & the Last Dragon Clip",
        },
        {
          time: "4:41 PM",
          text: "How to Cultivate Dragon Fruits",
        },
        {
          time: "4:56 PM",
          text: '"Sắc Thắm Mùa Xuân" - Hồ Hoàng Yến & Diễm Liên',
        },
        {
          time: "",
          text: '"LK Mùa Xuân Đó Có Em/Cảm Ơn" - Huỳnh Phi Tiễn & Ngọc Đức',
        },
        {
          time: "",
          text:
            '"Xuân Vui, Xuân Tươi" - Nguyên Khang, Quốc Khanh, Đoàn Phi & Đức Tân',
        },
        {
          time: "",
          text: '"Như Hoa Mùa Xuân" - Xuân Nghi & Mimi',
        },
        {
          time: "5:15 PM",
          text: "Closing Remarks & Lion Dance",
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.dialog = true;
    },
  },
  created() {
    var moment = require("moment");
    var todaysdate = moment();
    // var festivalDate = moment("2021-02-14");
    this.timeLeft = moment("20210213 12:00", "YYYYMMDD h:mm").diff(todaysdate,); // 9 years ago
  },
};
</script>

<style lang="scss">
@import "theme/style.scss";
</style>
