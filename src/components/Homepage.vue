<template>
  <div>
    <v-contianer >
      <v-row style="height:600px;" 
        :align="center" :justify="center" 
      >
        
        <v-col cols="12" class="font1" >
          <p>Hi~</p> 
          <p>我是一个爱着数字媒体玩着前端还想学后端的家伙</p>
          <p>喜欢做梦，最近的梦是成为全沾工程师</p>
          <br>
          芜湖~ 向着全栈，起飞！
        </v-col>
        
        
        
        
        
        
        

      </v-row>
      
      <v-row :align="center" :justify="center" >

        <v-col cols="4" >
          <v-card outlined color="rgba(255,255,255,0.5)" raised>
            <v-card-text class="font">
              <h3>博客</h3> 
              <del>技术流的笔记本</del>  <del>分享生活</del> <del>干货满满</del><br> 
              沙雕日常 √
              <br>
              <p>使用WordPress搭建</p>
            </v-card-text>
            <v-card-actions>
              <v-row :justify="center" :align="center" >
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

        <v-col cols="4" >
          <v-card outlined color="rgba(255,255,255,0.5)" raised>
            <v-card-text class="font">
              <h3>GitHub</h3> 
              <del>全球最大的同性交友网站</del><br> 
              注册于2017年，但最近才写项目
              <br>
              <p>欢迎大佬来fo</p>
            </v-card-text>
            <v-card-actions>
              <v-row :justify="center" :align="center" >
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

        <v-col cols="4" >
          <v-card outlined color="rgba(255,255,255,0.5)" raised>
            <v-card-text class="font">
              <h3>Twitter</h3> 
              曾经的回忆 <br> 
              认识了很多朋友
              
              <br>
              <p>于2019年离开</p>
            </v-card-text>
            <v-card-actions>
              <v-row :justify="center" :align="center" >
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
      <v-bottom-navigation style="box-shadow: none;margin-top: 0.6rem;"
       background-color="rgba(0,0,0,0.0)">
        <p>鲁ICP备20005309号-1 | 鲁公网安备37011302000267号</p>
      </v-bottom-navigation>
    </v-contianer>
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
  font-size: 22px;
  line-height: 2.5rem;
  h3{
    font-size: 30px;
  }
  p{
    font-size: 20px;
  }
  del{
    font-size: 18px;
  }
}
.font1{
  padding-top: 17%;
  padding-left: 5%;
  color: #282828;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 2.5rem;
  p{
    font-size: 24px;
    
  }
}

</style>