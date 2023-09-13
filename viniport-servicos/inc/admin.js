var conn = require('./db')


module.exports = {

    dashBoard(){

        return new Promise((s, f) =>{

            conn.query(`
            SELECT
           (SELECT COUNT(*) FROM tb_users) AS nrusers,
           (SELECT COUNT(*) FROM tb_contacts) AS nrcontacts,
           (SELECT COUNT(*) FROM tb_proposal) AS nrproposal,
           (SELECT COUNT(*) FROM tb_employee) AS nremployee;
                
            `, (err, results) =>{

                if(err){
                    f(err)
                } else{
                    s(results[0])
                }
            });
        });

    }


}

