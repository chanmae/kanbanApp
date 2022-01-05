// タスク追加
function addtask(){
    const todolist = document.getElementById("todolist");

    const div = document.createElement("div");
    todolist.appendChild(div);

    const addtask = document.createElement("input");
    addtask.setAttribute("type","text");
    addtask.setAttribute("size","40px");
    div.appendChild(addtask);

    const addwip = document.createElement("input");
    addwip.setAttribute("type","button");
    addwip.setAttribute("value","WIP");
    addwip.setAttribute("onclick","addwip(event)");
    div.appendChild(addwip);

    const adddelete = document.createElement("input");
    adddelete.setAttribute("type","button");
    adddelete.setAttribute("value","削除");
    adddelete.setAttribute("onclick","deletetask(event)");
    div.appendChild(adddelete);
}

// WIP追加
function addwip(event){
    // タスク削除
    deletetask(event)
    // テキストボックスのコピー
    var todotext  = event.target.previousElementSibling;
    // div要素作成
    const div = document.createElement("div");
    wiplist.appendChild(div);
    // テキストボックス追加（TODOをコピー）
    div.appendChild(todotext);
    // DONEボタン作成
    const adddone = document.createElement("input");
    adddone.setAttribute("type","button");
    adddone.setAttribute("value","DONE");
    adddone.setAttribute("onclick","adddone(event)");
    div.appendChild(adddone);
    // 削除ボタン作成
    const adddelete = document.createElement("input");
    adddelete.setAttribute("type","button");
    adddelete.setAttribute("value","削除");
    adddelete.setAttribute("onclick","deletetask(event)");
    div.appendChild(adddelete);
}

// DONE追加
function adddone(event){
        // タスク削除
        deletetask(event)
        // テキストボックスのコピー
        var wiptext  = event.target.previousElementSibling;
        // div要素作成
        const div = document.createElement("div");
        donelist.appendChild(div);
        // テキストボックス追加（TODOをコピー）
        div.appendChild(wiptext);
        // 削除ボタン作成
        const adddelete = document.createElement("input");
        adddelete.setAttribute("type","button");
        adddelete.setAttribute("value","削除");
        adddelete.setAttribute("onclick","deletetask(event)");
        div.appendChild(adddelete);    
}

// タスク削除
function deletetask(event){
    event.target.parentNode.remove();
}