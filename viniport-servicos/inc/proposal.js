var conn = require('./db')

module.exports = {

    render(req, res, error, sucess){

        res.render('proposal', {
            title: 'Solicite uma Proposta - ViniPort Serviços',
            body: req.body,
            error,
            sucess
            //some objects that can be used in the html trought de  EJSTags(embeded js)

         })


    },

    save(fields){

        return new Promise((s, f) =>{

            conn.query(
                ` INSERT INTO tb_proposal (name, email, tel, empresa, segmento, profissionais, message)
                VALUES(?, ?, ?, ?, ?, ?, ?)`, 
                [
                    fields.name,
                    fields.email,
                    fields.tel,
                    fields.empresa,
                    fields.segmento,
                    fields.profissionais,
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

    getProposal(){

        return new Promise((s, f) =>{

            conn.query(`
            SELECT * FROM tb_proposal
            `, (err, results) =>{

                if(err){
                    f(err)
                } else{
                    s(results)
                }
            })

        })
    },

    excludeProposal(id){

        return new Promise((s, f) =>{

            conn.query(`
            DELETE FROM tb_proposal WHERE id = ?`, [ 
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