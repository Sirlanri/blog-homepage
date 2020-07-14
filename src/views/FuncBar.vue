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

 

         <v-menu
            left
            bottom
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                style="margin-right:1rem"  
                class="d-lg-flex d-none"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-if="isLoggin"
                @click="logout"
              >
                <v-list-item-title>注销登录</v-list-item-title>
              </v-list-item>
              <v-list-item
                v-if="isLoggin"
                @click="addFriendWindow=true"
              >
                <v-list-item-title>添加友链</v-list-item-title>
              </v-list-item>
              <v-list-item
                v-else
                @click="rootLoginWindow=true"
              >
                <v-list-item-title>Root登录</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-dialog v-model="rootLoginWindow" max-width="600px"  >
            <v-card>
              <v-card-title>
                Root用户登录
              </v-card-title>
              <v-row justify="center" >
                <v-col cols="10" >
                  <v-text-field v-model="emailaddress"
                  label="邮箱">
                  </v-text-field>
                  <v-text-field v-model="password" 
                    :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showpassword ? 'text' : 'password'"
                    @click:append="showpassword = !showpassword"
                    label="密码">

                  </v-text-field>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="darken-1" text @click="rootLoginWindow = false">取消</v-btn>
                <v-btn color="blue darken-1" text @click="rootLogin">登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="addFriendWindow" max-width="1000px">
            <v-card>
              <v-card-title>添加友链</v-card-title>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field label="网站地址" v-model="siteAddress">
                  </v-text-field>
                  <v-text-field label="名称" v-model="siteName"></v-text-field>
                  <v-text-field label="简介" v-model="introduction"></v-text-field>
                  <v-file-input type="file" @change="sendpic" label="图片/封面"></v-file-input>
                  <v-checkbox v-model="ssl" label="Https"></v-checkbox>
                  <v-btn text @click="addFriendWindow=false">取消</v-btn>
                  <v-btn text color="primary" @click="addFriend()">确认</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-dialog>

          <v-snackbar
            v-model="snackbar"
          >
            {{loginInfor}}
              <v-btn
                color="blue"
                text
                @click="snackbar = false"
              >
                知道啦
              </v-btn>
          </v-snackbar>

        
      </v-app-bar>
        </v-col>
      
    </v-row>
    

    <v-row justify="center" >
      <v-col cols="2" style="padding-top:0;" class="d-lg-flex d-none">
        
          <v-navigation-drawer
            dark
            class="d-lg-flex d-none pcdraw"
            v-model="slide"
            
            :mini-variant.sync="mini"
            :expand-on-hover="slide"
            color="rgba(0,0,0,.5)"
            permanent
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
            class=" d-lg-none d-flex "
            v-model="slide"
            color="rgba(0,0,0,.7)"

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
import axios from "axios"
import store from "@/store/index"
export default {
  name: "funcbar",
  components: {},
  data() {
    return {
      //添加友链的信息
      siteName: "",
      siteAddress: "",
      introduction: "",
      ssl: false,

      addFriendWindow:false,
      showpassword:false,
      loginInfor:"登录中，请稍后",
      snackbar:false,
      emailaddress:"",
      password:"",
      rootLoginWindow:false,
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
  computed:{
    //从store判断是否登录
    isLoggin(){
      return store.getters.isroot
    },
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
    sendpic(e){
      //注意，我们这里没有使用form表单提交文件，所以需要用new FormData来进行提交
      let fd= new FormData();
      fd.append("pic", e);//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
      // 对所有 axios 请求做处理，支持cookies
      console.log(fd.get("pic"))
      axios.defaults.withCredentials = true;
      axios.defaults.headers={'Content-Type': 'multipart/form-data'}
      axios.post("http://localhost:8090/blog/uploadpic", fd) //url是服务器的提交地址
          //成功回调
          .then(res => {
            console.log(res.data)
            
           }) //将服务器返回的图片链接添加进img数组，进行预览展示
          //失败回调
          .catch(err => {alert(err);});
          
    },
    addFriend(){

    },
    logout(){
      axios.get("http://localhost:8090/blog/rootlogout")
      .then(res=>{
        if (res.data=="done") {
          this.loginInfor="Root已注销"
          store.commit("logout")
          this.snackbar=true
        }
      })
    },
    rootLogin(){
      this.rootLoginWindow=false
      axios.post("http://localhost:8090/blog/rootlogin",{
        "mail":this.emailaddress,
        "password":this.password
      }).then(res=>{
        if (res.data=="yes") {
          console.log("root验证通过")
          store.commit("raisePower")
          this.loginInfor="Root登录成功"
        }
        if (res.data=="no") {
          console.log("root验证失败，非管理员")
          this.loginInfor="Root验证失败，非管理员"
        }
        if (res.data=="wrong") {
          console.log("root验证失败，密码错误")
          this.loginInfor="Root验证失败，密码错误"
        }
      }).catch(e=>{
        console.log("root请求失败",e)
        this.loginInfor="网络错误，请求失败"
      })
      this.snackbar=true
    },
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
//移动端配置
@media (max-width: 768px) {
    .home{
      background: url(https://blog.ri-co.cn/wp-content/uploads/2020/04/blue.jpg);
      background-attachment: fixed

    }
} 
//PC端
@media (min-width: 768px) {
    .home{
      background: url(https://blog.ri-co.cn/wp-content/uploads/2020/04/lightblue.jpg);
      background-attachment: fixed

    }
} 
.home {
  background-size: 100% 100%;
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
.pcdraw{
  min-height: 100vh;

}
.v-dialog{
  overflow-y: initial;
}
</style>