const {db,student} = require('./create_model')
const task = async ()=>{
    try{
        await db.sync()

    const students = await student.findAll(
        {
            where:{
                age:{
                    $or:{
                        $lt:12,
                        $gt:18  //less than 12 or greater than 18.
                    }
                }
            }
            // where:{age:{$gt:15}} //give data where age is greater than 15
            //where:{age:12}
            order : [
                ['name', 'ASC'],
                ['age', 'DESC']
                //for more, we can go through the sequelize documentation
            ]
        }
    ) // gives complete details
    console.log(students)

    //student has all functions as promises, so we can use await 
    students.forEach(student => console.log(`
    age : ${student.datavalues.age}\t\tname : ${student.datavalues.name}
    `))
    }
    catch (e){
        console.log(e)
    }
}

task();