<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-02 09:25:11
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-08-10 14:18:40
 * @Description: home
 * @Email: UvDream@163.com
-->
<template>
  <div class="home">
    home
    <Editor :value="markdownValue" @change="handleChange" />
    <Viewer v-model="markdownValue" />
    <div v-for="(value, key, index) in colors" :key="index">
      {{ key }}
    </div>
  </div>
</template>

<script>
import "@uvdream/bytemd-plugin-vu2/styles/index.scss";
// import "bytemd/dist/index.min.css";
export default {
  props: {},
  data() {
    return {
      markdownValue: "",
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
  methods: {
    handleChange(val) {
      this.$emit("input", val);
      this.markdownValue = val;
    },
  },
  components: {},
};
</script>
<style lang="scss" >
@import "../styles/common.scss";
.home {
  @include themeify() {
    outline: 1px solid red;
    // color: themed(color);
  }
}
</style>
