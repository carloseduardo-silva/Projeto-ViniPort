var express = require('express');
var contact = require('../inc/contact')
var proposal = require('../inc/proposal')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/proposal', function(req, res, next) {
  res.render('proposal', { title: 'Express' });
});

router.post('/proposal', function(req, res, next) {


  if(!req.body.name){

    proposal.render(req, res, 'Digite o nome.')
    
  }

  else if(!req.body.email){

    proposal.render(req, res, 'Digite o email.')
    
  }

  else if(!req.body.tel){

    proposal.render(req, res, 'Digite o telefone.')
    
  }

  
  else if(!req.body.segmento){

    proposal.render(req, res, 'Digite o segmento do serviço terceirizado.')
    
  }

  
  else if(!req.body.profissionais){

    proposal.render(req, res, 'Digite o numero de profissionais.')
    
  }

  else if(!req.body.empresa){

    proposal.render(req, res, 'Digite o nome da sua empresa.')
    
  }

  else if(!req.body.mensagem){

    proposal.render(req, res, 'Deixe alguma mensagem.')
    
  }

  else{

      proposal.save(req.body).then(results =>{

        req.body = {}

        proposal.render(req, res, null, 'Mensagem enviada com sucesso!')

    }).catch(err =>{

      proposal.render(req, res, err.message)

      })

  }



});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.post('/contact', function(req, res, next) {

  if(!req.body.name){

    contact.render(req, res, 'Digite o nome.')
    
  }

  else if(!req.body.email){

    contact.render(req, res, 'Digite o email.')
    
  }

  else if(!req.body.tel){

    contact.render(req, res, 'Digite o telefone.')
    
  }

  else if(!req.body.empresa){

    contact.render(req, res, 'Digite o nome da sua empresa.')
    
  }

  else if(!req.body.mensagem){

    contact.render(req, res, 'Deixe alguma mensagem.')
    
  }

  else{

    contact.save(req.body).then( results =>{

      req.body = {}

      contact.render(req, res, null, 'Mensagem enviada com sucesso!')
  
    }).catch(err =>{
  
      contact.render(req, res, err.message)
    })

  }


 
});


router.get('/institucional', function(req, res, next) {
  res.render('institucional', { title: 'Express' });
});

router.get('/security', function(req, res, next) {
  res.render('security', { title: 'Express' });
});

router.get('/work', function(req, res, next) {
  res.render('work', { title: 'Express' });
});

router.get('/cleanUp', function(req, res, next) {
  res.render('cleanUp', { title: 'Express' });
});

router.get('/system', function(req, res, next) {
  res.render('system', { title: 'Express' });
});




module.exports = router;
