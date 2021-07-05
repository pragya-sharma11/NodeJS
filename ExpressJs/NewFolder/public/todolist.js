$(function(){
    console.log("Page is loaded")
    let newTodoBox = $('#newtodo')
    let addtodobtn =$('#addtodo')
    let todoList = $('#todolist')
    addtodobtn.click(()=>{
        console.log("Button is clicked!!.")
        let newTodo = newTodoBox.val()
        //post is used to make a new post request.
        $.post(
            '/todos/',
            {task : newTodo}, 
            function(data){
                console.log(data)//array of todolist
                todoList.empty();
                for(todo of data){
                    todoList.append("<li>"+todo.task+"</li>")
                    
                }
            }
        )
        //when u make a post req, our page makes a post request to server and response comes back to page but page is not refresh only some data is downloaded to page.
        //it does ajax(Asysnchronous javascript and xml)
        //aysnch:-without reloading your page or without making a new request in url bar, our page will still make some get and post from browser(client pc) to server


    })

})