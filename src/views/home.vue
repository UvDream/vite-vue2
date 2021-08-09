<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-02 09:25:11
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-08-09 15:33:52
 * @Description: home
 * @Email: UvDream@163.com
-->
<template>
  <div class="home">
    home
    <div v-for="(value, key, index) in colors" :key="index">
      {{ key }}
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      colors: {
        red: [
          "#e6ffff",
          "#adfeff",
          "#85f9ff",
          "#5cf1ff",
          "#33e7ff",
          "#0bdaff",
          "#00b1d9",
          "#008cb3",
          "#00698c",
          "#004966",
        ],
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>
<style lang="scss" >
@import "../styles/common.scss";
.home {
  @include themeify() {
    outline: 1px solid red;
    color: themed(color);
  }
}
</style>
