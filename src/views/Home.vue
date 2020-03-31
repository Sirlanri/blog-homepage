<template>
  <div class="home">
    
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#000000"
        dark
        shrink-on-scroll
        fade-img-on-scroll
        src="@/assets/PC/white-grey.jpg"
        scroll-target="#scrolling-techniques-2"
      >
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.33)"></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>深蓝的小站</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="1000">
        <v-container></v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="less">
.home{
  height: 1000px;
  background: url(http://127.0.0.1:8887/pc/white-grey.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.test{
  color: rgba(255, 255, 255, 0.329),rgba(226, 239, 250, 0.445);
}
</style>