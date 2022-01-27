<template>
  <div class="container">
    <input
      type="text"
      size="40px"
      placeholder="TODOを入力"
      v-model="todotext"
    />
    <input type="button" value="WIP" v-on:click="addwip" />
    <input type="button" value="DELETE" v-on:click="deletetask" />
  </div>
</template>

<script>
import Vue from "vue";
import kanbanApp from "./kanbanApp.vue";
import inputFormWip from "./inputFormWip.vue";
export default {
  name: "inputFormTodo",
  data: function () {
    return {
      todotext: "",
    };
  },
  methods: {
    addwip: function (event) {
      addwip(event);
    },
    deletetask: function (event) {
      kanbanApp.deletetask(event); //maeda kanbanApp.vueをインポートしない使用できないのでは？
      // kanbanApp.vueで定義しているnameと紐づけないといけないのでは？
    },
  },
};

/*
関数概要：WIP追加処理
引数：event イベントオブジェクト
戻り値：なし
*/
function addwip(event) {
  // テキストボックスの値を取得
  const todotext = event.target.previousElementSibling.value;
  // 入力チェック
  if (todotext) {
    // WIPリスト取得
    const wiplist = document.getElementById("wiplist");
    // 入力フォーム（WIP）コンポーネント生成
    const inputFormComponent = Vue.extend(inputFormWip);
    const instace = new inputFormComponent();
    // コンポーネントにテキストを設定
    instace.wiptext = todotext;
    // Vueコンポーネントのマウント
    instace.$mount();
    wiplist.append(instace.$el);
    // タスク削除
    kanbanApp.deletetask(event);
  } else {
    alert("TODOを入力してください。");
  }
}
</script>

<style></style>
