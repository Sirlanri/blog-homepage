<template>
  <v-card class="mx-auto" max-width="500" >
      <v-img height="200px" class="align-end img1" @click="visit"
      :src="picAddress" gradient="to bottom , rgba(0,0,0,.0), rgba(0,0,0,.5)">
        <v-card-text class="cardtext">
            {{introduction}} 
        </v-card-text>
      </v-img>
      <v-card-title>
        {{siteName}}
      </v-card-title>

      <v-card-actions v-if="isroot">
          <v-btn text small>修改</v-btn>
          <v-btn text small color="error">删除</v-btn>
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
          
          <v-icon v-else class="ssl">mdi-lock-open-alert</v-icon>
          <v-icon v-if="speed<=100" color="green">mdi-speedometer</v-icon>
          <v-icon v-if="speed<=1000&&speed>100" color="#998a09">mdi-speedometer-medium</v-icon>
          <v-icon v-if="speed>1000" color="red">mdi-speedometer-slow</v-icon>
          <span class="msnum" v-if="speed<999">{{speed}}ms</span>
          <span class="msnum" v-else>999+ms</span>
          
          <v-btn outlined  large class="jumpbtn" @click="visit">
              <v-icon>mdi-forward</v-icon>
          </v-btn>
      </v-card-actions>

  </v-card>
</template>

<script>
import store from "@/store/index"
export default {
    props:{
        id:Number,
        picAddress:String,
        siteName:String,
        siteAddress:String,
        introduction:String,
        ssl:Boolean,
        speed:Number,
    },
    computed:{
        isroot(){
            return store.getters.isroot
        }
    },
    methods:{
        edit(){
            store.commit('changeId',this.id)
        },
        visit(){
            window.open(this.siteAddress)
        }
    }
}
</script>

<style>

</style>