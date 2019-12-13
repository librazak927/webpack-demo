import Vue from 'vue';
import weather from './weather.vue';
import { getLocalWeather } from "./api";
import { futureTime } from "./time";





new Vue({
        el: '#app',
        data: {
                return: {
                        area: [{}],
                        city: "",
                        info: {},
                        //obj: {},




                }

        },
        computed: {
                //obj


        },
        methods: {

        }, mounted() {
                getLocalWeather(
                        {
                                Authorization: "CWB-C74C5F5B-F703-4FCC-8511-0CE67FF010C3",
                                locationName: "臺中市",
                                elementName: "Wx,PoP,CI,MinT,MaxT",
                                startTime: futureTime()
                        },
                        function (data) {
                                
                        }
                );

        }, components: {
                weather: weather,
                sidebar: sidebar,
        }, template: `
                <div>
                        <weather></weather>
                </div>
        `

});