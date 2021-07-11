$(()=>{
    let inp_name = $('#name')
    let inp_age = $('#age')
    let inp_city = $('#city')
    let btn_submit = $('#submit')
    let tbl_persons = $('#persons')
    function refresh(persons) {
        tbl_persons.empty()
        tbl_persons.append(`
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>`
        )
        for(person of persons){
            tbl_persons.append(
                `<tr>
                <td>${persons.name}</td>
                <td>${persons.age}</td>
                <td>${persons.city}</td>
            </tr>`
            )
        }
    }
    $.get("/api/persons",(data)=>{
        refresh(data)
    })
    btn_submit.click(()=>{
        console.log('btn clicked')
        //create api to make functioning of submit button
        //this api basically connect front end with backend

    })
})