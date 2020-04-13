<template>
<v-app>
  <home></home>

</v-app>
</template>

<script>
import home from '@/views/Home';

export default {
  name: 'App',

  components: {
    home,
  },

  data: () => ({
    //
  }),
};
</script>
