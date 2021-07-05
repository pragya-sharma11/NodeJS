$(function(){
    console.log("Page is loaded")
    let newTodoBox = $('#newtodo')
    let addtodobtn =$('#addtodo')
    let todoList = $('#todolist')
    addtodobtn.click(()=>{
        console.log("Button is clicked!!.")
        let newTodo = newTodoBox.val()
        $.post()//it does ajax(Asysnchronous javascript and xml)
        //aysnch:-without reloading your page, our page will still post 
    })

})