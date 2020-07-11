<template>
  <v-card class="mx-auto" max-width="500">
      <v-img height="200px" 
      scr="https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg">
        <v-card-title>
            {{siteName}}
        </v-card-title>
      </v-img>
      <v-card-text class="text--primary">
          {{introduction}}
      </v-card-text>
      <v-card-actions>
          <v-icon v-if="ssl">shield-lock-outline</v-icon>
          <v-icon v-else>lock-open-alert</v-icon>
          <v-btn outlined>
              <v-icon>forward</v-icon>
          </v-btn>
      </v-card-actions>

  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>