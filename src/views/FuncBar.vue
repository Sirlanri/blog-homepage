<template>
  <div class="home">
    <v-row>
        <v-col cols="12" style="padding:0" >
            <v-app-bar color="rgba(0,0,0,0.3)" dark>
        <v-app-bar-nav-icon class="menubtn" @click="inorout" 
        expand-on-hover style="margin-left:0"
        ></v-app-bar-nav-icon>
        <div style="width:40%" class="d-lg-none d-block"></div>
        <v-toolbar-title >
          
          <v-btn text large @click="jump(1)">
            <v-icon>mdi-home</v-icon>
            <span class="btnrt">深蓝的小站</span>
          </v-btn>
        </v-toolbar-title>

        <v-spacer class="d-lg-flex d-none"></v-spacer>

        
        <v-btn text large @click="jump(2)" class="d-lg-flex d-none">
          <span class="btnrt">片语</span>
        </v-btn>
        <v-btn text large @click="jump(3)" class="d-lg-flex d-none">
          <span class="btnrt">开发</span>
        </v-btn>
        <v-btn text large @click="jump(9)" class="d-lg-flex d-none">
          <span class="btnrt">资源</span>
        </v-btn>
        <v-btn text large @click="jump(4)" class="d-lg-flex d-none">
          <span class="btnrt">友链</span>
        </v-btn>
        <v-btn text large  @click="jump(5)" class="d-lg-flex d-none">
          <span class="btnrt">关于</span>
        </v-btn>

        <v-btn icon style="margin-right:1rem" class="d-lg-flex d-none">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        
      </v-app-bar>
        </v-col>
      
    </v-row>
    

    <v-row justify="center" >
      <v-col cols="2" style="padding-top:0" class="d-lg-flex d-none">
        
          <v-navigation-drawer
            dark
            class="d-lg-flex d-none fill-height"
            v-model="slide"
            :mini-variant.sync="mini"
            :expand-on-hover="slide"
            color="rgba(0,0,0,.5)"
            height="950px"
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
        
      </v-col>

        

      <v-col lg="8">
        
          <v-navigation-drawer
            dark
            absolute
            class=" d-lg-none d-block drawer"
            v-model="slide"
            
            color="rgba(0,0,0,.5)"
          >
            <v-list nav >
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
        
        <router-view ></router-view>

      </v-col>
      <v-col col="2"  class="d-lg-flex d-none">

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
      slide: false,
      mini: true,
      items: [
        { title: "首页", icon: "mdi-home", num:1},
        { title: "博客", icon: "mdi-post", num:6},
        { title: "云盘", icon: "mdi-cloud-outline", num:7 },
        { title: "邮箱", icon: "mdi-email-variant", num:8 },
        { title: "片语", icon: "mdi-forum", num:2},
        { title: "开发", icon: "mdi-xml", num:3},
        { title: "友链", icon: "mdi-link-variant-plus", num:4},
        { title: "关于", icon: "mdi-information-outline", num:5},
      ]
    };
  },
  watch:{
    screenWidth(val){
        this.screenWidth = val
        let self = this
        if (this.screenWidth<=767) {
             self.peen = false
            self.seen = true
        }else{
           self.peen = true
            self.seen = false
        }
    }
},
mounted () {
    const that = this
    window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
        })()
    }
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

<style lang="less">
@media (max-width: 768px) {
    .home{
      background: url(http://127.1:8887/mobile/blue.jpg);
    }
} 
@media (min-width: 768px) {
    .home{
      background: url(http://127.1:8887/pc/lightblue.jpg);
    }
} 
.home {
  background-size: 100% 100%;
  background-attachment: fixed
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
.drawer{
  z-index: 3;
}
</style>