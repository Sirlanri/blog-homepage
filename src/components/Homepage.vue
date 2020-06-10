<template>
  <div>
    <v-container style="padding:0">
      <v-row 
        align="center" justify="center" 
        class="d-lg-flex d-none"
      >
        <v-col cols="12"  class="headline centerwords" 
          lg="12" >
          <p>Hi~</p> 
          <p>我是一个爱着数字媒体玩着前端还想学后端的家伙</p>
          <p>喜欢做梦，最近的梦是成为全沾工程师</p>
          <br>
          芜湖~ 向着全栈，起飞！
        </v-col>
      </v-row>

      
      <v-row >
        <!-- 电脑端 -->
        <v-col cols="4" class="d-lg-flex d-none">
          <v-card outlined color="rgba(255,255,255,0.5)" raised class="card">
            <div class="cardfont subtitle-1">
              <h3 class="headline">博客</h3> 
              <del>技术流的笔记本</del>  <del>分享生活</del> <del>干货满满</del><br> 
              沙雕日常 √
              <br>
              <p>使用WordPress搭建</p>
            </div>
            <v-card-actions>
              <v-row  >
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#ffffff" block @click="goto(1)">
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="4" class="d-lg-flex d-none">
          <v-card outlined color="rgba(255,255,255,0.5)" raised class="card">
            <div class="cardfont subtitle-1">
              <h3 class="headline">GitHub</h3> 
              <del>全球最大的同性交友网站</del><br> 
              注册于2017年，但最近才写项目
              <br>
              <p>欢迎大佬来fo</p>
            </div>
            <v-card-actions>
              <v-row >
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#ffffff" block  @click="goto(2)">
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="4" class="d-lg-flex d-none">
          <v-card outlined color="rgba(255,255,255,0.5)" raised class="card">
            <div class="cardfont subtitle-1">
              <h3 class="headline">Twitter</h3> 
              曾经的回忆 <br> 
              认识了很多朋友
              
              <br>
              <p>于2019年离开</p>
            </div>
            <v-card-actions>
              <v-row>
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#ffffff" block disabled>
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- 手机端 -->
        <v-col class="d-flex-inline d-lg-none">

          <v-card outlined color="rgba(255,255,255,0.5)" raised  class="card-sm">
            <div class="cardfont">
              <h3>博客</h3> 
              <del>技术流的笔记本</del>  <del>分享生活</del> <del>干货满满</del><br> 
              沙雕日常 √
              <br>
              <p>使用WordPress搭建</p>
            </div>
            <v-card-actions>
              <v-row  >
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#ffffff" block @click="goto(1)">
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>

          <v-card outlined color="rgba(255,255,255,0.5)" raised class="card-sm">
            <div class="cardfont">
              <h3>GitHub</h3> 
              <del>全球最大的同性交友网站</del><br> 
              注册于2017年，但最近才写项目
              <br>
              <p>欢迎大佬来fo</p>
            </div>
            <v-card-actions>
              <v-row >
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#ffffff" block  @click="goto(2)">
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>

          <v-card outlined color="rgba(255,255,255,0.5)" raised class="card-sm">
            <div class="cardfont">
              <h3>Twitter</h3> 
              曾经的回忆 <br> 
              认识了很多朋友
              
              <br>
              <p>于2019年离开</p>
            </div>
            <v-card-actions>
              <v-row>
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#ffffff" block disabled>
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>

        </v-col>
        
        </v-row>
      <v-bottom-navigation id="bottom" class="d-none d-lg-flex"
       background-color="rgba(0,0,0,0.0)">
        <p>鲁ICP备20005309号-1 | 鲁公网安备37011302000267号</p>
      </v-bottom-navigation>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    goto(num){
      switch (num) {
        case 1:
          window.open('https://blog.ri-co.cn')
          break;
        case 2:
          window.open('https://github.com/Sirlanri')
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="less">
.btnrt2 {
  font-size: 1.5rem;
  font-family: "Segoe UI";
  text-transform: none;
}
.centerwords{
  padding-bottom: 23vh;
  padding-top: 8vh;
}
.cardfont{
  color:#282828;
  padding: 1rem;
  line-height: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.font1{
  color: #282828;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  p{
    font-size: 1.4rem;
    
  }
}
.font1-sm{
  color: #282828;
  
}
.card{
  width: 100%;
}
.card-sm{
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
#bottom{
  box-shadow: none;
  margin-top: 1.5rem; 
  height:auto; 
  color:#00000070;
  p{
    font-size: 0.8rem;
  }
}
.drawer{
  height: 93vh;
}
</style>