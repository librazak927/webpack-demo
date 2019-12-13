     <template>
  <div>
    <div class="hello">Hello {{ name }}</div>

   <div id="time">{{formatDate}}</div>

   </div>
</template>

    <script>
    
    export default {
         
         el:"#time",
        data() {
            return {
                name: "Vue",
                date : new Date(),
                formatDate: "",
            }
        },filters:{
                zero : function(value){
                        return value <10 ? "0"+value : value;
                },
                formatDate : function() {
                    let yyyy = date.getFullYear();
                    let mm = zero(date.getMonth() + 1)
                    let dd = zero(date.getDate());
                    let hh = zero(date.getHours());
                    let min = zero(date.getMinutes());
                    let sec = zero( date.getSeconds()) ;
                    
                    return yyyy + "-" + mm + "-" + dd + "  " + hh + ":" + min + ":" + sec;
                }
         },mounted: function(){
                let _this = this;
                this.timer = setInterval(function(){
                    _this.date = new Date();
                },1000);

         },beforeDestroy:function(){
                if (this.timer){
                    clearInterval(this.timer);
                }
         }
         
    }
    
    </script>

    <style scoped>
.hello {
  color: blue;
}
#time {
  color: green;
}
</style>

   
   
  



