<template>
  <div class="weather">
    <div id="location">
      <textContent weatherText="true" :text="`${localActual} - ${stateActual}`" />
    </div>
    <div id="weatherInfo">
      <img draggable="false" :src="iconActual" alt="Weather Icon" />
      <Title weatherTitle="true" level="3" :text="`${temp}°`" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/title/index.vue";
import textContent from "../textContent";
export default {
  name: "weather",
  components: {
    textContent,
    Title,
  },
  data() {
    return {
      iconActual: "",
      local: "",
      temp: "",
      localActual: "",
      stateActual: "",
      city: "",

    };
  },
  methods: {
    weatherActual() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          
          fetch(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyA8q6vKiMTvtbNazbuQsDPwe6XSSzZkbMg" 
              

          )
            .then((resposta) => resposta.json())
            .then((dataCity) => {
              this.city = dataCity.results[0].address_components[3].long_name.replace(/ /g, "-");
              console.log(dataCity.results[0].address_components[4].short_name)
              this.state = dataCity.results[0].address_components[4].short_name;
              this.stateActual = `${this.state}`
              
              fetch(
                "https://api.weatherapi.com/v1/current.json?key=1908e74e14814574bc602922220602&q=" +
                  this.city +
                  "a&aqi=no"
              )
                .then((resposta) => resposta.json())
                .then((data) => {
                  this.local = data.location.name;
                  this.temp = data.current.temp_c.toFixed(0);
                  this.localActual = `${this.local}`;
                  this.icon =  data.current.condition.icon;
                  this.iconActual = this.icon;
                  
                });
            });
        });
      }
    },
   
  },
  
  created() {
    this.weatherActual();
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>