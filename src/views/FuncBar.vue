<template>
  <div class="home">
    <v-row>
        <v-col cols="12" style="padding:0" >
            <v-app-bar color="rgba(0,0,0,0.3)" dark>
        <v-app-bar-nav-icon class="menubtn" @click="inorout" expand-on-hover></v-app-bar-nav-icon>

        <v-toolbar-title>
          <v-btn text large @click="jump(1)">
            <v-icon>mdi-home</v-icon>
            <span class="btnrt">深蓝的小站</span>
          </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        
        <v-btn text large @click="jump(2)">
          <span class="btnrt">片语</span>
        </v-btn>
        <v-btn text large @click="jump(3)">
          <span class="btnrt">开发</span>
        </v-btn>
        <v-btn text large @click="jump(9)">
          <span class="btnrt">资源</span>
        </v-btn>
        <v-btn text large @click="jump(4)">
          <span class="btnrt">友链</span>
        </v-btn>
        <v-btn text large  @click="jump(5)">
          <span class="btnrt">关于</span>
        </v-btn>
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
        </v-col>
      
    </v-row>

    <v-row >
      <v-col cols="2" style="padding-top:0" >
        <v-card
          height="1000px"
          width="20%"
          min-width="160px"
          class="mx-auto"
          color="rgba(0,0,0,.0)"
          outlined
        >
          <v-navigation-drawer
            dark
            v-model="slide"
            :mini-variant.sync="mini"
            :expand-on-hover="slide"
            color="rgba(0,0,0,.3)"
          >
            <v-list nav>
              <v-list-item v-for="item in items" :key="item.title" link 
              @click="jump(item.num)">
                <v-list-item-icon>
                  <v-icon class="listicon">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>

      <v-col cols="8">
        <router-view ></router-view>
      </v-col>
      <v-col col="2">

      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  name: "funcbar",
  components: {},
  data() {
    return {
      slide: true,
      mini: true,
      items: [
        { title: "博客", icon: "mdi-post", num:6},
        { title: "云盘", icon: "mdi-cloud-outline", num:7 },
        //{ title: "开发", icon: "mdi-xml" },
        { title: "邮箱", icon: "mdi-email-variant", num:8 },

      ]
    };
  },
  methods: {
    inorout() {
      this.slide = !this.slide;
    },
    jump(num){
      switch (num) {
        case 1:
          this.$router.push({path:'/'})
          break;
        case 2:
          this.$router.push({path:'/sentences'})
          break;
        case 3:
          this.$router.push({path:'/dev'})
          break;
        case 4:
          this.$router.push({path:'/friends'})
          break;
        case 5:
          this.$router.push({path:'/about'})
          break;
        //在新窗口打开的页面
        case 6:
          window.open('https://blog.ri-co.cn')
          break;
        case 7:
          window.open('https://cloud.ri-co.cn')
          break;
        case 8:
          window.open('https://qiye.aliyun.com/')
          break;
        case 9:
          window.open('https://cloud.ri-co.cn/s/2kp9zw58Gi9PAR4')
          break;
      
        default:
          break;
      }
    }
  }
};
</script>

<style >
.home {
  height: 1100px;
  background: url(http://127.1:8887/pc/lightblue.jpg);
  background-size: 100% 100%;
}
.listicon {
  margin-right: 1rem;
}
.menubtn {
  margin-right: 2rem;
}
.btnrt {
  font-size: 1.2rem;
  font-family: "Segoe UI";
}
.rightbtn{
  margin-top: 2rem;
}
</style>