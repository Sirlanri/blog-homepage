<template>
  <div>
    <v-container>
      <v-row style="height:550px;" 
        align="center" justify="center" 
        class="d-lg-flex d-none"
      >
        <v-col cols="12"  class="font1" 
          lg="12" >
          <p>Hi~</p> 
          <p>我是一个爱着数字媒体玩着前端还想学后端的家伙</p>
          <p>喜欢做梦，最近的梦是成为全沾工程师</p>
          <br>
          芜湖~ 向着全栈，起飞！
        </v-col>
      </v-row>

      <!--
      <v-row style="height:200px;" 
        align="center" justify="center" no-gutters
        class="d-flex d-lg-none"
      >
      
        <v-col cols="12"  class="font1-sm" 
          lg="12" >
          <p>Hi~</p> 
          <p>我是一个爱着数字媒体玩着前端还想学后端的家伙</p>
          <p>喜欢做梦，最近的梦是成为全沾工程师</p>
          <br>
          芜湖~ 向着全栈，起飞！
        </v-col>
      </v-row>
      !-->
      
      <v-row >

        <v-col cols="4" class="d-lg-flex d-none">
          <v-card outlined color="rgba(255,255,255,0.5)" raised class="card">
            <v-card-text class="font">
              <h3>博客</h3> 
              <del>技术流的笔记本</del>  <del>分享生活</del> <del>干货满满</del><br> 
              沙雕日常 √
              <br>
              <p>使用WordPress搭建</p>
            </v-card-text>
            <v-card-actions>
              <v-row  >
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#E3F2FD" block @click="goto(1)">
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
            <v-card-text class="font">
              <h3>GitHub</h3> 
              <del>全球最大的同性交友网站</del><br> 
              注册于2017年，但最近才写项目
              <br>
              <p>欢迎大佬来fo</p>
            </v-card-text>
            <v-card-actions>
              <v-row >
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#E3F2FD" block  @click="goto(2)">
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
            <v-card-text class="font">
              <h3>Twitter</h3> 
              曾经的回忆 <br> 
              认识了很多朋友
              
              <br>
              <p>于2019年离开</p>
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#E3F2FD" block disabled>
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>


        <v-col class="d-flex-inline d-lg-none">

          <v-card outlined color="rgba(255,255,255,0.5)" raised class="card-sm">
            <v-card-text class="font">
              <h3>博客</h3> 
              <del>技术流的笔记本</del>  <del>分享生活</del> <del>干货满满</del><br> 
              沙雕日常 √
              <br>
              <p>使用WordPress搭建</p>
            </v-card-text>
            <v-card-actions>
              <v-row  >
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#E3F2FD" block @click="goto(1)">
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>

          <v-card outlined color="rgba(255,255,255,0.5)" raised class="card-sm">
            <v-card-text class="font">
              <h3>GitHub</h3> 
              <del>全球最大的同性交友网站</del><br> 
              注册于2017年，但最近才写项目
              <br>
              <p>欢迎大佬来fo</p>
            </v-card-text>
            <v-card-actions>
              <v-row >
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#E3F2FD" block  @click="goto(2)">
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>

          <v-card outlined color="rgba(255,255,255,0.5)" raised class="card-sm">
            <v-card-text class="font">
              <h3>Twitter</h3> 
              曾经的回忆 <br> 
              认识了很多朋友
              
              <br>
              <p>于2019年离开</p>
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#E3F2FD" block disabled>
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-card-actions>
          </v-card>

        </v-col>
        

      </v-row>
      <v-bottom-navigation style="box-shadow: none;margin-top: 1.5rem; "
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
.font{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.3rem;
  line-height: 2.5rem;
  h3{
    font-size: 1.6rem;
    font-weight: 600;
  }
  p{
    font-size: 1.2rem;
  }
  del{
    font-size: 1.1rem;
  }
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.2rem;
  p{
    font-size: 1.2rem;
    
  }
}
.card-sm{
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>