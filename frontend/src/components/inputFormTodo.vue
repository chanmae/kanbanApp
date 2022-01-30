<template>
  <ul>
    <li v-for="todo in todoList" v-bind:key="todo.id">
      <div class="container">
        <input
          type="text"
          size="40px"
          placeholder="TODOを入力"
          v-model="todo.name"
        />
        <input type="button" value="WIP" v-on:click="addwip({ todo })" />
        <input type="button" value="DELETE" v-on:click="deletetodo({ todo })" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "inputFormTodo",
  components: {},
  data: function () {
    return {};
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
  },
  methods: {
    addwip: function ({ todo }) {
      // 'addwip'ミューテーションをコミット
      this.$store.commit("addwip", { todo });
    },
    deletetodo: function ({ todo }) {
      // 'deletetodo'ミューテーションをコミット
      this.$store.commit("deletetodo", { todo });
      // this.$delete(this.todoList, index);
    },
  },
};
</script>

<style></style>
