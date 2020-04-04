<template>
  <div class="about">
    <v-card
    dark color="rgba(0,0,0,.5)">
      <v-card-text class="font2">
        <h2>关于</h2>
        <p>&nbsp;</p>
        <p>不知不觉，已经学了几个月前端了，总想着给自己的网站 ri-co.cn 写个主页。</p>
        <p>主页呢，说简单也挺难，说难也不难，关键在于布局配色等艺术思维上。</p>
        <p>我翻过一些朋友的博客主页，只有一个大佬写的很不错，并且没有用模板。毕竟他是一名优秀的前端。</p>
        <p>我在没有基础的情况下尝试写一个自己的主页，我在工程的readme里面写了一句话——</p>
        <p>主页写成啥样是次要，主要是想做个material风格的页面，提高vue的水平。</p>
        <p>毕竟从中学开始学Adobe，万一写的丑就算是对自己的安慰吧hhhh</p>
        <h4>技术：</h4>
        <p>项目满足长期可迭代+前后端分离的需求。</p>
        <p>前端使用当下最流行的Vue框架，采用我最喜欢的material风格，简约并拥有绝佳的交互效果，并且实现移动端适配。</p>
        <p>短期计划的技术栈：Vue+Vuetify+Go(Iris)+Mysql</p>
        <p>将来可能会引用一些新的组件，拭目以待吧！</p>
        <p>项目开源，遵守MIT协议</p> 
        <v-btn depressed href="https://github.com/Sirlanri/blog-homepage">源码地址</v-btn>
        <br><br>
        <h4>关于我：</h4>
        <p>一个啥都想玩想成为全沾工程师的前端菜鸡。</p> <br>
        <p>联系方式：</p> 
        <v-btn depressed href="mailto://mail@ri-co.cn">邮箱</v-btn>
        &nbsp;
        <v-btn depressed href="https://github.com/sirlanri">GitHub</v-btn>
        <p>&nbsp;</p>
      </v-card-text>
    </v-card>

    

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.about{
  height: 100%;
}
.font2{
  color: rgb(255, 255, 255);
  line-height: 2rem;
  p{
    color: rgb(255, 255, 255);
    font-size: 1.3rem;
  }
  h2{
    font-size: 1.8rem;
    font-weight: 400;
  }
  h4{
    font-size: 1.6rem;
    font-weight: 300;
  }
}
</style>