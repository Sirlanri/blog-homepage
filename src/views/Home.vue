<template>
  <div class="home">
    <v-app-bar color="rgba(0,0,0,0.3)" dark>
      <v-app-bar-nav-icon
      
      @click="mini=!mini"
      expand-on-hover
      ></v-app-bar-nav-icon>

      <v-toolbar-title>深蓝的小站</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-card height="100%" width="25%" class="mx-auto" min-width="160px"
      color="rgba(0,0,0,.0)" outlined>
      <v-navigation-drawer  dark
        v-model="slide"
        :mini-variant.sync="mini"
        color="rgba(0,0,0,.3)">
        <v-list-item>
          <v-list-item-content>
            
            <v-list-item-title class="title"><v-icon>mdi-dots-vertical</v-icon>
            菜单栏</v-list-item-title>
            <v-list-item-subtitle>你想去哪？</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list  nav>
          <v-list-item v-for="item in items" :key="item.title" link
          >
            <v-list-item-icon >
              <v-icon class="listicon">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data () {
      return {
        slide:true,
        mini:true,
        items: [
          { title: '博客', icon: 'mdi-view-dashboard' },
          { title: '云盘', icon: 'mdi-image' },
          { title: '开发', icon: 'mdi-help-box' },
        ],
      }
    },
    methods:{
      inorout(){
        this.slide = !this.slide
      }
    }
};
</script>

<style lang="less">
.home {
  height: 1080px;
  background: url(http://127.1:8887/pc/lightblue.jpg);
  background-size: 100% 100%;
}
.listicon{
  margin-right: 1rem;
}
</style>