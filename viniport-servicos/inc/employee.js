var conn = require('./db')

module.exports = {

    render(req, res, error, sucess){

        res.render('employee', {
            title: 'Funcionários - ViniPort Serviços',
            body: req.body,
            error,
            sucess
            //some objects that can be used in the html trought de  EJSTags(embeded js)

         })


    },

    getEmployee(){

        return new Promise((s, f) =>{

            conn.query(`
            SELECT * FROM tb_employee
            `, (err, results) =>{

                if(err){
                    f(err)
                } else{
                    s(results)
                }
            })

        })
    },

    excludeEmployee(id){

        return new Promise((s, f) =>{

            conn.query(`
            DELETE FROM tb_employee WHERE id = ?`, [ 
                id 
            ],
            (err, results) =>{

                if(err){
                    f(err)
                } else{
                    s(results)
                }

            })

        })

    }



}