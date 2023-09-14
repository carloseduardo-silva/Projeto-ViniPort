var express = require('express');
var router = express.Router();
var users = require('../inc/users')
var proposal = require('../inc/proposal')
var contact = require('../inc/contact')
var admin = require('../inc/admin')
var employee = require('../inc/employee')

/* GET users listing. */

router.use(function(req, res , next){

  if(["/login"].indexOf(req.url) === -1 && !req.session.user) {
      res.redirect('/admin/login')
  } else{
      next()
  }


})

router.get('/', function(req, res, next) {

 admin.dashBoard().then(result =>{

res.render('admin/index',  {
  title: 'ViniPort', 
  contacts: result.nrcontacts,
  proposal: result.nrproposal,
  users: result.nrusers,
  employee: result.nremployee})
 }).catch(err =>{
  console.log(err)
 })

});



router.get('/login', function(req, res, next) {
  users.render(res, req, null)
});

router.post('/login', function(req, res, next) {

  if(!req.body.email){
    users.render(res, req,  "Preencha o campo email!")
}   
  else if(!req.body.password){
    users.render(res, req,  "Preencha o campo senha!")
} 

  else{
      users.login(req.body.email, req.body.password)
      .then(user =>{
          console.log(user)
          req.session.user = user
          res.redirect('/admin')

      }).catch(err =>{

          console.log(err)
          console.log('error')
          users.render(res, req, err.message || err)

      })


} 


})

router.get('/logout', function(req, res, next){

  delete req.session.user;

  res.redirect('admin/login')

})

router.get('/proposal', function(req, res, next) {
  
  proposal.getProposal().then(data =>{

    res.render('admin/proposal', {
        title:'ViniPort Servicos',
        data
    })

  }).catch(err =>{
    console.log(err)
})

});

router.delete('/proposal/:id', function(req, res, next){

  proposal.excludeProposal(req.params.id).then(result =>{

      res.send(result)

  }).catch(err =>{

      res.send(err)

  })

})

router.get('/contacts', function(req, res, next) {

  contact.getContacts().then(data =>{

    res.render('admin/contacts', {
        title:'ViniPort Servicos',
        data
    })

  }).catch(err =>{
    console.log(err)
})


});

router.delete('/contacts/:id', function(req, res, next){

  contact.excludeContacts(req.params.id).then(result =>{

      res.send(result)

  }).catch(err =>{

      res.send(err)

  })

})

router.get('/users', function(req, res, next) {

  users.getUsers().then(data =>{

    res.render('admin/users', {
        title:'ViniPort Servicos',
        data
    })

  }).catch(err =>{
    console.log(err)
})


});

router.delete('/users/:id', function(req, res, next){

  users.excludeUsers(req.params.id).then(result =>{

      res.send(result)

  }).catch(err =>{

      res.send(err)

  })

});

router.get('/employee', function(req, res, next) {

  employee.getEmployee().then(data => {

    res.render('admin/employee', {
      title: 'ViniPort Servicos',
      date: '',
      data
  })
}).catch(err =>{
  console.log(err)
})




});

router.delete('/employee/:id', function(req, res, next){

  employee.excludeEmployee(req.params.id).then(result =>{

      res.send(result)

  }).catch(err =>{

      res.send(err)
  })
});


module.exports = router;
