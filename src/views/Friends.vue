<template>
  <div>
    <v-container>
    <v-row justify="center" justify-md="start">
      <v-col cols="10" lg="4" md="6" xl="3"
        v-for="card in cardsData" :key="card.id">
        <cards 
          :siteName="card.sitename" :picAddress="card.picaddress" :ssl="card.ssl" :speed="card.ping"
          :id="card.id" :siteAddress="card.url" :introduction="card.introduction" >
        </cards>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
import cards from "@/components/FriendCard.vue"
import axios from "axios"
export default {
  components:{
    cards
  },
  data(){
    return{
      cardsData:[
        
      ]
    }
  },
  mounted(){
    this.getFriends()
  },
  methods:{
    getFriends(){
      axios.get("http://localhost:8090/blog/getfriends")
        .then(res=>{
          if (res.status==200) {
            this.cardsData=res.data.list
          }else{
            console.log("获取friends信息失败")
          }
        })
    }
  }
}
</script>

<style lang="less">

</style>