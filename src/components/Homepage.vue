<template>
  <div>
    <v-contianer >
      <v-row style="height:600px;" >

      </v-row>
      <v-row :align="center" :justify="center" >

        <v-col cols="4" >
          <v-card outlined color="rgba(255,255,255,0.5)" raised>
            <v-card-text class="font">
              <h3>博客</h3> 
              <del>技术流的笔记本</del>  <del>记录分享生活</del> <br> 
              沙雕日常 √
              <br>
              <p>使用WordPress搭建。</p>
              
              
            </v-card-text>
            <v-card-actions>
              <v-row :justify="center" :align="center" >
                <v-col cols="3"></v-col>
                <v-col style="padding-top:0">
                  <v-btn large color="#E3F2FD" block>
                    <span class="btnrt2">Visit</span>
                  </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
                
              </v-row>
              
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="4" :align="center">
          <v-card outlined>
            <v-card-text>
              <p text--primary>GitHub</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="4" :align="center">
          <v-card outlined>
            <v-card-text>
              <p text--primary>Email</p>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-contianer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
</style>