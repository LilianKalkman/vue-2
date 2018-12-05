<template>
  <div>
    <ul>
      <li @click="showAge(index)">{{ n }} : {{ age }}</li>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  props: ["n", "index"],
  data() {
    return {
      age: 1
    };
  },
  computed: {},
  methods: {
    showAge(i) {
      console.log("clicked");
      this.age = eventBus.showAge(i);
    }
  }
};
</script>

<style>
</style>
