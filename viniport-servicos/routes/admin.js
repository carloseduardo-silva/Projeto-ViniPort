var express = require('express');
var router = express.Router();
var users = require('../inc/users')

/* GET users listing. */

router.use(function(req, res , next){

  if(["/login"].indexOf(req.url) === -1 && !req.session.user) {
      res.redirect('/admin/login')
  } else{
      next()
  }


})

router.get('/', function(req, res, next) {
  res.render('admin/index', { title: 'Express'})
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

router.get('/employee', function(req, res, next) {
  res.render('admin/employee', {title: 'ViniPort Servicos'})
});

router.get('/contacts', function(req, res, next) {
  res.render('admin/contacts', {title: 'ViniPort Servicos'})
});

router.get('/users', function(req, res, next) {
  res.render('admin/users', {title: 'ViniPort Servicos'})
});

router.get('/proposal', function(req, res, next) {
  res.render('admin/proposal', {title: 'ViniPort Servicos'})
});

module.exports = router;
