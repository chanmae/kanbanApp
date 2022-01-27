<template>
  <div class="container">
    <input type="text" size="40px" v-model="wiptext" />
    <input type="button" value="DONE" v-on:click="adddone" />
    <input type="button" value="DELETE" v-on:click="deletetask" />
  </div>
</template>

<script>
import Vue from "vue";
import kanbanApp from "./kanbanApp.vue";
import inputFormDone from "./inputFormDone.vue";
export default {
  name: "inputFormWip",
  data: function () {
    return {
      wiptext: "",
    };
  },
  methods: {
    adddone: function (event) {
      adddone(event);
    },
    deletetask: function (event) {
      kanbanApp.deletetask(event);
    },
  },
};

/*
関数概要：DONE追加処理
引数：event イベントオブジェクト
戻り値：なし
*/
function adddone(event) {
  // DONEリスト取得
  const donelist = document.getElementById("donelist");
  // WIPテキストボックスの値を取得
  const wiptext = event.target.previousElementSibling.value;
  // Vueコンポーネント生成
  const inputFormComponent = Vue.extend(inputFormDone);
  const instace = new inputFormComponent();
  // コンポーネントにテキストを設定
  instace.donetext = wiptext;
  // 入力フォーム（DONE）コンポーネントをマウント
  instace.$mount();
  donelist.append(instace.$el);
  // タスク削除
  kanbanApp.deletetask(event);
}
</script>

<style></style>
