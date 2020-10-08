const express = require('express')
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json())

promoRouter.route('/')
.all((req,res,next)=> {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next)=> {
    res.end('We will provide all promotion here.')
})
.put((req,res,next)=> {
    res.sendStatus = 403;
    res.end('PUT operation is not supported here.')
})
.post((req,res,next)=> {
    res.end(`We will add promo:`+req.body.name+ ' with description:'+ req.body.description)
})
.delete((req,res,next)=> {
    res.end('Well, we will delete all promotions.')
})

// for promoId endpoint

promoRouter.route('/:promoId')
.all((req,res,next)=> {
    res.sendStatus= 200;
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next)=> {
    res.end(`We will send the details of promoId:`+req.params.promoId)
})
.post((req,res,next)=> {
    res.statusCode = 403;

    res.end('It does not support post request of  '+ req.params.promoId)
})
.put ((req,res,next)=> {
    res.write('Updating the promoId:'+ req.params.promoId+'\n ')
    res.end('Will update the promotions: '+req.body.name+ ' with details '+ req.body.description);
})
.delete((req,res,next)=> {
    res.end('Deleting promotion: '+ req.params.promoId );
})

module.exports = promoRouter