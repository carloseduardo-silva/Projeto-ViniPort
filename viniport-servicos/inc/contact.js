var conn = require('./db')

module.exports = {

    render(req, res, error, sucess){

        res.render('contact', {
            title: 'Contato - ViniPort Serviços',
            body: req.body,
            error,
            sucess
            //some objects that can be used in the html trought de  EJSTags(embeded js)

         })


    },

    save(fields){


        return new Promise((s, f) =>{

            conn.query(
                ` INSERT INTO tb_contacts (name, email, tel, empresa, message)
                VALUES(?, ?, ?, ?, ?)`, 
                [
                    fields.name,
                    fields.email,
                    fields.tel,
                    fields.empresa,
                    fields.mensagem
                ],
                (err, results) =>{

                    if(err){
                        f(err)

                    } else{
                        s(results)
                    }
                    
                })})


    },

    getContacts(){

        return new Promise((s, f) =>{

            conn.query(`
            SELECT * FROM tb_contacts
            `, (err, results) =>{

                if(err){
                    f(err)
                } else{
                    s(results)
                }
            })

        })
    }
}