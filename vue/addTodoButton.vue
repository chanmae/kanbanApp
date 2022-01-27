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
import Vue from 'vue';
import inputFormTodo from "./inputFormTodo";
export default {
  name: "addTodoButton",
  data: function () {
    return {
      addtodobuttonname: "TODO追加",
    };
  },
  methods: {
    addtodo: function () {
      addtodo();
    },
  },
};

/*
関数概要：TODO追加処理
引数：なし
戻り値：なし
*/
function addtodo() {
  //TODOリスト取得
  const todolist = document.getElementById("todolist"); //maeda 異なるコンポーネントの要素を取得できるのだろうか？
  // Vueコンポーネント生成
  const inputformComponent = Vue.extend(inputFormTodo);//maeda Vueが定義されていないと怒られる
  const instance = new inputformComponent();
  // コンポーネントをTODOリストにマウント
  instance.$mount();
  todolist.append(instance.$el);
}
</script>

<style></style>
