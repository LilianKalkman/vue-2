<template>
  <div>
    <child v-for="(name, index) in names" :n="name" :index="index">
      <li>{{ name }} + {{ index }}</li>
    </child>
    <button @click="activeComponent = 'Test'">Test Dynamic Component</button>
    <button @click="activeComponent = ''">Weg</button>
    <component :is="activeComponent"></component>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import Child from "./Child.vue";
import Test from "./Test.vue";

export default {
  data: function() {
    return {
      names: eventBus.names,
      activeComponent: ""
    };
  },
  components: {
    Child,
    Test
  }
};
</script>

<style>
</style>
