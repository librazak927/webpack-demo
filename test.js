<body>
        <h1 id="weather">臺中市氣象預報</h1>
        <h2>最低溫度</h2>
        <h2>最高溫度</h2>
        <h2>日期</h2>
        <h2>今日白天</h2>
        <h2>12:00~18:00</h2>







        <script src="./weather/index.js"></script>

</body>


computed:{

},methods:{

},
filters: {
}




el: "#App",
              data() {
              return {
                locationName: '臺中市',
                elementName: ['Wx','PoP','CI','MinT','MaxT']
              },