const {db, student } =require('./create_model')
const task = async ()=>{
    try{
        await db.sync()
        //insert the row in database
        /*await student.create({
            name:'some name',
            age:22
        })*/
        for(let i=1;i<=30;i++){
            await student.create({
                name :(['Qian', 'zheng', 'linye', 'moyon', 'junki', 'xiao', 
                'gangzi', 'munyon', 'anxin', 'lyue'])[parseInt(Math.random()*10)],
                age:(parseInt(Math.random()*10))+10
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}

task();
