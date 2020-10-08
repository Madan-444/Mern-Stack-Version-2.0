const express = require('express')
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json())

leaderRouter.route('/')
.all((req,res,next)=> {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next)=> {
    res.end('We will provide all leaders here.')
})
.put((req,res,next)=> {
    res.sendStatus = 403;
    res.end('PUT operation is not supported here.')
})
.post((req,res,next)=> {
    res.end(`We will add leaders name:`+req.body.name+ ' with description:'+ req.body.description)
})
.delete((req,res,next)=> {
    res.end('Well, we will delete all leaders.')
})

// for leaderId endpoint

leaderRouter.route('/:leaderId')
.all((req,res,next)=> {
    res.sendStatus= 200;
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next)=> {
    res.end(`We will send the details of leaderId:`+req.params.leaderId)
})
.post((req,res,next)=> {
    res.statusCode = 403;

    res.end('It does not support post request of  '+ req.params.leaerId)
})
.put ((req,res,next)=> {
    res.write('Updating the leaderId:'+ req.params.leaderId+'\n ')
    res.end('Will update the leaders: '+req.body.name+ ' with details '+ req.body.description);
})
.delete((req,res,next)=> {
    res.end('Deleting leaders: '+ req.params.leaderId );
})

module.exports = leaderRouter