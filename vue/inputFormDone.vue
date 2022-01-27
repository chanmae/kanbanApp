<template>
  <div class="container">
    <input type="text" size="40px" v-model="donetext" />
    <input type="button" value="DELETE" v-on:click="deletetask" />
  </div>
</template>

<script>
import kanbanApp from "./kanbanApp.vue";
export default {
  name: 'inputFormDone',
  data: function () {
    return {
      donetext: "",
    };
  },
  methods: {
    deletetask: function (event) {
      kanbanApp.deletetask(event);
    },
  },
};
</script>

<style></style>
