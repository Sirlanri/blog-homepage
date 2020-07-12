<template>
  <div>
    <v-container>
    <v-row>
      <v-col cols="4" lg="4" md="3" sm="2" 
        v-for="card in cardsData" :key="card.id">
        <cards 
          :siteName="card.siteName" :picAddress="card.picAddress" :ssl="card.ssl" 
          :id="card.id" :siteAddress="card.siteAddress" :introduction="card.introduction" >
        </cards>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
import cards from "@/components/FriendCard.vue"
export default {
  components:{
    cards
  },
  data(){
    return{
      cardsData:[
        {id:1,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:true},
        {id:2,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:true},
        {id:3,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:true},
        {id:4,picAddress:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
        siteName:"站点名称",siteAddress:"https://blog.ri-co.cn",introduction:"简单的介绍",ssl:false},
      ]
    }
  }
}
</script>

<style lang="less">

</style>