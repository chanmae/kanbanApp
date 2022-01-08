// タスク追加
function addtask() {
    const todolist = document.getElementById("todolist");

    // div要素生成
    const divElement = createElement("div", todolist);

    // テキストボックス
    const addtaskInput = document.createElement("input");
    addtaskInput.setAttribute("type", "text");
    addtaskInput.setAttribute("size", "40px");
    divElement.appendChild(addtaskInput);

    // WIPボタン
    const wipButton = document.createElement("input");
    wipButton.setAttribute("type", "button");
    wipButton.setAttribute("value", "WIP");
    wipButton.setAttribute("onclick", "addwip(event)");
    divElement.appendChild(wipButton);

    // 削除ボタン
    const adddelete = document.createElement("input");
    adddelete.setAttribute("type", "button");
    adddelete.setAttribute("value", "削除");
    adddelete.setAttribute("onclick", "deletetask(event)");
    divElement.appendChild(adddelete);
}

// WIP追加
function addwip(event) {
    // タスク削除
    deletetask(event)
    // テキストボックスのコピー
    const todotext = event.target.previousElementSibling;
    // WIPリスト取得
    const wiplist = document.getElementById("wiplist");
    // div要素生成
    const divElement = createElement("div", wiplist);
    // テキストボックス追加（TODOをコピー）
    divElement.appendChild(todotext);
    // DONEボタン作成
    const doneButton = document.createElement("input");
    doneButton.setAttribute("type", "button");
    doneButton.setAttribute("value", "DONE");
    doneButton.setAttribute("onclick", "adddone(event)");
    divElement.appendChild(doneButton);
    // 削除ボタン作成
    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "削除");
    deleteButton.setAttribute("onclick", "deletetask(event)");
    divElement.appendChild(deleteButton);
}

// DONE追加
function adddone(event) {
    // タスク削除
    deletetask(event)
    // テキストボックスのコピー（DONEボタンの前の要素取得）
    const wiptext = event.target.previousElementSibling;
    // DONEリスト取得
    const donelist = document.getElementById("donelist");
    // div要素生成
    const divElement = createElement("div", donelist);
    // テキストボックス追加（TODOをコピー）
    divElement.appendChild(wiptext);
    // 削除ボタン作成
    const adddelete = document.createElement("input");
    adddelete.setAttribute("type", "button");
    adddelete.setAttribute("value", "削除");
    adddelete.setAttribute("onclick", "deletetask(event)");
    divElement.appendChild(adddelete);
}

// タスク削除
function deletetask(event) {
    event.target.parentNode.remove();
}

// 要素生成
function createElement(elementName, id) {
    // 生成する要素
    const Element = document.createElement(elementName);
    // 指定したidの子要素に追加
    id.appendChild(Element);

    return Element;
}