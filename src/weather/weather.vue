<template>
  <div>
    <!-- <div id="app">臺中市氣象預報</div>
    <div id="minT">最低溫度</div>
    <div id="maxT">最高溫度</div>
    <div id="rain">降雨機率</div>
    <div id="date">日期</div>
    <div id="dayAndNight">今日白天</div>
    <div id="time">12:00~18:00</div> -->
  </div>
</template>

<script>
import { getLocalWeather } from "./api";
import { futureTime } from "./time";

export default {
  mounted() {
    getLocalWeather(
      {
        Authorization: "CWB-C74C5F5B-F703-4FCC-8511-0CE67FF010C3",
        locationName: "臺中市",
        elementName: "Wx,PoP,CI,MinT,MaxT",
        startTime: futureTime(),
      },
      function(data) {
        
      }
    );
  }
};
</script>

<style scoped></style>
