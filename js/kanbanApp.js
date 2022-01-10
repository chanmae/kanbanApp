/*トップヘッダーコンポーネント*/
let topHeader = Vue.component('top-header', {
    props: {
        title: {
            type: String,
        }
    },
    template: `
    <header id="header">
       <h1 class="title">{{title}}</h1>
    </header>
    `,
})

/*サブヘッダーコンポ―ネント*/
let subHeader = Vue.component('sub-header', {
    props: {
        subTitle: {
            type: String,
        }
    },
    template: `
    <header class="bordheader">
        <h2 class="bordtitle">{{subTitle}}</h2>
    </header>
    `
})

/*入力フォーム（TODO）コンポーネント*/
let inputFormTodo = Vue.component('input-form-todo', {
    template: `
    <div class="container">
        <input type="text" size="40px" placeholder="TODOを入力"　v-model="todotext">
        <input type="button" value="WIP" v-on:click="addwip">
        <input type="button" value="DELETE" v-on:click="deletetask">
    </div>
    `,
    data: function () {
        return {
            todotext: ""
        }
    },
    methods: {
        addwip: function (event) {
            addwip(event);
        },
        deletetask: function (event) {
            deletetask(event);
        },

    }
})

/* 入力フォーム（WIP）コンポーネント*/
const inputFormWip = Vue.component('input-form-wip', {
    template: `
    <div class="container">
        <input type="text" size="40px" v-model="wiptext">
        <input type="button" value="DONE" v-on:click="adddone">
        <input type="button" value="DELETE" v-on:click="deletetask">
    </div>
    `,
    data: function () {
        return {
            wiptext: ""
        }
    },
    methods: {
        adddone: function (event) {
            adddone(event);
        },
        deletetask: function (event) {
            deletetask(event);
        }
    }
})

/* 入力フォーム（DONE）コンポーネント */
const inputFormDone = Vue.component('input-form-done', {
    template: `
    <div class="container">
        <input type="text" size="40px" v-model="donetext">
        <input type="button" value="DELETE" v-on:click="deletetask">
    </div>
    `,
    data: function () {
        return {
            donetext: ""
        }
    },
    methods: {
        deletetask: function (event) {
            deletetask(event);
        }
    }
})

/* TODO追加ボタンコンポーネント */
const addTodoButton = Vue.component('add-todo-button', {
    template: `
    <div>
        <input type="button" v-bind:value="addtodobuttonname" id="addtodo" v-on:click="addtodo">
    </div>
    `,
    data: function () {
        return {
            addtodobuttonname: "TODO追加"
        }
    },
    methods: {
        addtodo: function () {
            addtodo();
        }
    }
})

/* Vueインスタンス定義 */
const vm = new Vue({
    el: '#app',
    components:{
        'top-header':topHeader,
        'sub-header':subHeader,
        'input-form-todo':inputFormTodo,
        'input-form-wip':inputFormWip,
        'input-form-done':inputFormDone,
        'add-todo-button':addTodoButton,                
    },
    data: {
        headerTitle: 'Kanban App',
        todoHeaderTitle: 'TODO',
        wipHeaderTitle: 'WIP',
        doneHeaderTitle: 'DONE',
    },
    filters: {

    },
    computed: {

    },
    methods: {
        addtodo: function () {
            addtodo();
        },
        addwip: function (event) {
            addwip(event);
        },
        adddone: function (event) {
            adddone(event);
        },
        deletetask: function (event) {
            deletetask(event);
        }
    }
})

/*
関数概要：TODO追加処理
引数：なし
戻り値：なし
*/
function addtodo() {
    //TODOリスト取得
    const todolist = document.getElementById("todolist");
    // Vueコンポーネント生成
    const inputformComponent = Vue.extend(inputFormTodo);
    const instance = new inputformComponent();
    // コンポーネントをTODOリストにマウント
    instance.$mount();
    todolist.append(instance.$el);
}

/*
関数概要：WIP追加処理
引数：event イベントオブジェクト
戻り値：なし
*/
function addwip(event) {
    // WIPリスト取得
    const wiplist = document.getElementById("wiplist");
    // テキストボックスの値を取得
    const todotext = event.target.previousElementSibling.value;
    // 入力フォーム（WIP）コンポーネント生成
    const inputFormComponent = Vue.extend(inputFormWip);
    const instace = new inputFormComponent();
    // コンポーネントにテキストを設定
    instace.wiptext = todotext;
    // Vueコンポーネントのマウント
    instace.$mount();
    wiplist.append(instace.$el);
    // タスク削除
    deletetask(event)
}

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
    deletetask(event)
}

/*
関数概要：タスク削除処理
引数：event イベントオブジェクト
戻り値：なし
*/
function deletetask(event) {
    event.target.parentNode.remove();
}

/*
関数概要：子要素生成処理
引数：event イベントオブジェクト
   id 親要素id
戻り値：なし
*/
function createElement(elementName, id) {
    // 生成する要素
    const Element = document.createElement(elementName);
    // 指定したid（親要素）の子要素に追加
    id.appendChild(Element);
    // 戻り値返却
    return Element;
}