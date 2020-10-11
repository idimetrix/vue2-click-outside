<template>
  <div id="app">
    <div v-click-outside="onClickOutside1" class="item1">Click Outside 1</div>
    <div v-click-outside="onClickOutside2" class="item2">Click Outside 2</div>
    <div v-click-outside="onClickOutside3" class="item3">Click Outside 3</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "I LOVE vue2-click-outside directive!!!",
    };
  },
  methods: {
    onClickOutside1() {
      console.log("onClickOutside1");
    },
    onClickOutside2() {
      console.log("onClickOutside2");
    },
    onClickOutside3() {
      console.log("onClickOutside3");
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  .item1 {
    background: #3c3b6e;
    padding: 2.5rem;
    margin: 2.5rem;
  }
  .item2 {
    background: #ffffff;
    padding: 2.5rem;
    margin: 2.5rem;
  }
  .item3 {
    background: #b22234;
    padding: 2.5rem;
    margin: 2.5rem;
  }
}
</style>
