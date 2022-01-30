<template>
  <div id="app">
    <!-- topHeaderコンポーネント -->
    <top-header v-bind:title="topHeaderTitle" />
    <main>
      <div class="container">
        <section class="bord bord1">
          <!-- subHeaderコンポーネント -->
          <sub-header v-bind:sub-title="todoHeaderTitle" />
          <!-- inputFormTodoコンポーネント -->
          <input-form-todo></input-form-todo>
          <!-- addTodoButtonコンポーネント -->
          <add-todo-button></add-todo-button>
        </section>
        <section class="bord bord2">
          <!-- subHeaderコンポーネント -->
          <sub-header v-bind:sub-title="wipHeaderTitle" />
          <!-- inputFormWipコンポーネント -->
          <input-form-wip></input-form-wip>
        </section>
        <section class="bord bord3">
          <!-- subHeaderコンポーネント -->
          <sub-header v-bind:sub-title="doneHeaderTitle" />
          <!-- inputFormDoneコンポーネント -->
          <input-form-done></input-form-done>
        </section>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import topHeader from "./components/topHeader.vue";
import subHeader from "./components/subHeader.vue";
import addTodoButton from "./components/addTodoButton.vue";
import inputFormTodo from "./components/inputFormTodo.vue";
import inputFormWip from "./components/inputFormWip.vue";
import inputFormDone from "./components/inputFormDone.vue";
export default {
  name: "App",
  components: {
    topHeader, //maeda componentsに定義しないとどうなるのだろう→エラー起きる？
    subHeader,
    addTodoButton,
    inputFormTodo,
    inputFormWip,
    inputFormDone,
  },
  data() {
    return {
      topHeaderTitle: "Kanban App",
      todoHeaderTitle: "TODO",
      wipHeaderTitle: "WIP",
      doneHeaderTitle: "DONE",
    };
  },
  methods: {},
};
</script>

<style>
/* グローバルスタイル */
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.bord {
  flex: 1;
  border: 2px solid black;
}

.bord1 {
  background-color: pink;
  margin-right: 10px;
}

.bord2 {
  background-color: skyblue;
}

.bord3 {
  background-color: yellowgreen;
  margin-left: 10px;
}

.tasklist {
  margin-top: 5px;
}
</style>
