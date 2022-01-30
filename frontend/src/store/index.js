import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
    ],
    wipList: [
    ],
    doneList: [
    ],
    // 次に追加するid（初期値：1）
    nextTodoId: 0,
    nextWipId: 0,
    nextDoneId: 0
  },
  mutations: {
    //todo追加
    addtodo(state) {
      //todoListに1件追加
      state.todoList.push({
        id: state.nextTodoId,
        name: ''
      });
      //次に追加するtodo.idをインクリメント
      state.nextTodoId++;
    },

    //wip追加
    addwip(state, { todo }) {
      // wipListに1件追加
      state.wipList.push({
        id: state.nextWipId,
        name: todo.name,
      })

      // todo削除
      state.todoList.splice(todo.id, 1);
      // 次に追加するtodo.idデクリメント
      state.nextTodoId--;

      //次に追加するwip.idをインクリメント
      state.nextWipId++;

    },

    // done追加
    adddone(state, { wip }) {
      // doneListに1件追加
      state.doneList.push({
        id: state.nextDoneId,
        name: wip.name,
      })
      // wip削除
      state.wipList.splice(wip.id, 1);
      // 次に追加するwip.idをデクリメント
      state.nextWipId--;

      // 次に追加するdone.idをインクリメント
      state.nextDoneId++;
    },

    // todo削除
    deletetodo(state, { todo }) {
      state.todoList.splice(todo.id, 1);
    },

    // wip削除
    deletewip(state, { wip }) {
      state.wipList.splice(wip.id, 1);
    },
    // done削除
    deletedone(state, { done }) {
      state.doneList.splice(done.id, 1);
    },

  },
  actions: {
  },
  modules: {
  }
})
