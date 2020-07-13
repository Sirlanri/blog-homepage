<template>
  <div>
    <v-container>
    <v-row>
      <v-col cols="4" lg="4" md="3" sm="2" 
        v-for="card in cardsData" :key="card.id">
        <cards 
          :siteName="card.sitename" :picAddress="card.picaddress" :ssl="card.ssl" :speed="card.ping"
          :id="card.id" :siteAddress="card.siteaddress" :introduction="card.introduction" >
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
        {id:1,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍简单的介绍简单的介绍简单的介绍简单的介绍简单的介绍简单的介绍v简单的介绍",ssl:true,speed:50},
        {id:2,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:true,speed:120},
        {id:3,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:true,speed:300},
        {id:4,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:false,speed:1200},
        {id:5,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:false,speed:1200},
        {id:6,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:false,speed:1200},
        {id:7,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:false,speed:1200},
        {id:8,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:false,speed:1200},
        {id:9,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:false,speed:1200},
        {id:10,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:false,speed:1200},
        {id:11,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:false,speed:1200},

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