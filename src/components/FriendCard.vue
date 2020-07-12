<template>
  <v-card class="mx-auto" max-width="500"  >
      <v-img height="200px" class="align-end"
      :src="picAddress">
        <v-card-title>
            {{siteName}}
        </v-card-title>
      </v-img>
      <v-card-text class="text--primary">
          {{introduction}} 
      </v-card-text>

      <v-card-actions v-if="isroot">
          <v-btn text small>修改</v-btn>
          <v-btn text small color="error">删除</v-btn>
          <v-btn outlined icon>
              <v-icon>mdi-forward</v-icon>
          </v-btn>
      </v-card-actions>

      <v-card-actions v-else>
          <v-icon v-if="ssl">mdi-shield-lock-outline</v-icon>
          <v-icon v-else>mdi-lock-open-alert</v-icon>
          <v-btn dark  >
              参观
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

    },
    computed:{
        isroot(){
            return store.getters.isroot
        }
    },
    methods:{
        edit(){
            store.commit('changeId',this.id)
        }
    }
}
</script>

<style>

</style>