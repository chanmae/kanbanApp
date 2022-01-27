<template>
  <div id="app">
    <!-- topHeaderコンポーネント -->
    <top-header v-bind:title="topHeaderTitle" />
    <main>
      <div class="container">
        <section class="bord bord1">
          <!-- subHeaderコンポーネント -->
          <sub-header v-bind:sub-title="todoHeaderTitle" />
          <div id="todolist" class="tasklist"></div>
          <!-- addTodoButtonコンポーネント -->
          <add-todo-button></add-todo-button>
        </section>
        <section class="bord bord2">
          <!-- subHeaderコンポーネント -->
          <sub-header v-bind:sub-title="wipHeaderTitle" />
          <div id="wiplist" class="tasklist"></div>
        </section>
        <section class="bord bord3">
          <!-- subHeaderコンポーネント -->
          <sub-header v-bind:sub-title="doneHeaderTitle" />
          <div id="donelist" class="tasklist"></div>
        </section>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import topHeader from "./topHeader.vue";
import subHeader from "./subHeader.vue";
import addTodoButton from "./addTodoButton.vue";
import inputFormTodo from "./inputFormTodo.vue";
import inputFormWip from "./inputFormWip.vue";
import inputFormDone from "./inputFormDone.vue";
export default {
  name: "App",
  components: {
    topHeader, //maeda componentsに定義しないとどうなるのだろう→エラー起きる？
    subHeader,
    addTodoButton,
    inputFormTodo,
    inputFormWip,
    inputFormDone
  },
  data() {
    return {
      topHeaderTitle: "Kanban App",
      todoHeaderTitle: "TODO",
      wipHeaderTitle: "WIP",
      doneHeaderTitle: "DONE",
    };
  },
  methods: {
    deletetask: function (event) {
      deletetask(event);
    },
  },
};

/*
関数概要：タスク削除処理
引数：event イベントオブジェクト
戻り値：なし
*/
function deletetask(event) {
    event.target.parentNode.remove();
}

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

.tasklist{
  margin-top: 5px;
}
</style>
