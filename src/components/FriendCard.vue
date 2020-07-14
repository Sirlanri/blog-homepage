<template>
  <v-card class="mx-auto" max-width="500">
    <v-img
      height="200px"
      class="align-end img1"
      @click="visit"
      :src="picAddress"
      gradient="to bottom , rgba(0,0,0,.0), rgba(0,0,0,.5)"
    >
      <v-card-text class="cardtext">{{introduction}}</v-card-text>
    </v-img>
    <v-card-title>{{siteName}}</v-card-title>

    <v-card-actions v-if="isroot">
      <v-btn text color="primary" @click="editwindow=true">修改</v-btn>
      <v-btn text color="error" @click="delwindow=true">删除</v-btn>
      <v-btn outlined large class="jumpbtn" @click="visit">
        <v-icon>mdi-forward</v-icon>
      </v-btn>
    </v-card-actions>

    <v-card-actions v-else>
      <v-tooltip bottom v-if="ssl">
        <template v-slot:activator="{ on, attrs }">
          <v-icon class="ssl" v-bind="attrs" v-on="on">mdi-shield-lock-outline</v-icon>
        </template>
        <span>已开启SSL加密</span>
      </v-tooltip>
      <v-tooltip bottom v-else>
        <template v-slot:activator="{ on, attrs }">
          <v-icon class="ssl" v-bind="attrs" v-on="on">mdi-lock-open-alert</v-icon>
        </template>
        <span>未开启SSL加密</span>
      </v-tooltip>

      <v-icon v-if="speed<=100" color="green">mdi-speedometer</v-icon>
      <v-icon v-if="speed<1000&&speed>100" color="#998a09">mdi-speedometer-medium</v-icon>
      <v-icon v-if="speed>=1000" color="red">mdi-speedometer-slow</v-icon>

      <v-tooltip bottom v-if="speed<=999">
        <template v-slot:activator="{ on, attrs }">
          <span class="msnum" v-bind="attrs" v-on="on">{{speed}}ms</span>
        </template>
        <span>网站速度</span>
      </v-tooltip>
      <v-tooltip bottom v-else>
        <template v-slot:activator="{ on, attrs }">
          <span class="msnum" v-bind="attrs" v-on="on">999+ms</span>
        </template>
        <span>此网站无法访问</span>
      </v-tooltip>

      <v-btn outlined large class="jumpbtn" @click="visit" color="rgb(94, 94, 94)">
        <v-icon>mdi-forward</v-icon>
      </v-btn>
    </v-card-actions>

    <v-dialog v-model="editwindow" max-width="1000px">
      <v-card>
        <v-card-title>修改友链</v-card-title>
        <v-row justify="center">
          <v-col cols="10">
            <v-text-field label="网站地址" v-model="siteAddress">
            </v-text-field>
            <v-text-field label="名称" v-model="siteName"></v-text-field>
            <v-text-field label="简介" v-model="introduction"></v-text-field>
            <v-file-input @change="sendpic" label="图片/封面"></v-file-input>
            <v-checkbox v-model="ssl" label="Https"></v-checkbox>
            <v-btn text @click="editwindow=false">取消</v-btn>
            <v-btn text color="primary" @click="edit">确认</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="delwindow"
      max-width="400px"
    >
      <v-card>
        <v-card-title class="headline">确定删除此友链</v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="delwindow = false"
          >
            取消
          </v-btn>

          <v-btn
            color="red"
            text
            @click="deletecard()"
          >
            删除
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="resultWindow"
    >
      {{result}}
        <v-btn
          color="blue"
          text
          @click="resultWindow = false"
        >
          知道啦
        </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import store from "@/store/index";
import axios  from "axios";
export default {
  data() {
    return {
      delwindow:false,
      editwindow: false,
      isssl:false,
      result:"",
      resultWindow:false
    };
  },
  props: {
    id: Number,
    picAddress: String,
    siteName: String,
    siteAddress: String,
    introduction: String,
    ssl: Boolean,
    speed: Number
  },
  computed: {
    isroot() {
      return store.getters.isroot;
    }
  },
  methods: {
    deletecard(){
      axios.defaults.withCredentials = true;
      axios.post('http://localhost:8090/blog/delfriend',this.id)
        .then(res=>{
          if (res.status==200) {
            this.result="成功删除"
            this.resultWindow=true
            this.delwindow=false
          }
        })
    },
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
            store.commit("changePicAddress",res.data)
           }) //将服务器返回的图片链接添加进img数组，进行预览展示
          //失败回调
          .catch(err => {alert(err);});  
    },
    edit() {
      store.commit("changeId", this.id);
      let sendData={
        id:this.id,
        siteName:this.siteName,
        siteAddress:this.siteAddress,
        introduction:this.introduction,
        ssl:this.ssl,
      }
      axios.post("http://localhost:8090/blog/updatefriend",sendData)
      .then(res=>{
        if(res.status==200){
          this.result="发送成功"
          this.resultWindow=true
        }
      }).catch(e=>{
          this.result="发送出错，请查看控制台"
          this.resultWindow=true
          console.log(e)
      })
      this.editwindow=false
    },
    visit() {
      window.open(this.siteAddress);
    }
  }
};
</script>

<style>
.msnum {
  padding-left: 3px;
  padding-right: 10px;
  color: #7d7d7d;
}
.ssl {
  margin-right: 10px;
}
.jumpbtn {
  margin-left: 68%;
  position: absolute;
  margin-bottom: 10%;
}
.cardtext {
  color: aliceblue;
}
</style>