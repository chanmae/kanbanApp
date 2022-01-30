<template>
  <div>
    <input
      type="button"
      id="addtodo"
      v-bind:value="addtodobuttonname"
      v-on:click="addtodo"
    />
  </div>
</template>

<script>
export default {
  name: "addTodoButton",
  data: function () {
    return {
      addtodobuttonname: "TODO追加",
    };
  },
  methods: {
    addtodo: function () {
      // 'addtodo'ミューテーションをコミット
      this.$store.commit('addtodo');
    },
  },
};

</script>

<style></style>
