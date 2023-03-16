var express = require('express');
var userModel = require('../Models/register')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',(req,res)=>{
  console.log(req.body);
  let a ='Its loged in Api'
  res.send(a);
})
router.post('/register', (req,res)=>{
   console.log(req.body)
   try {
    const credentials = new userModel({
      username: req.body.username,
      email: req.body.email,
      password:req.body.password
    })
    credentials.save()
    .then(res.json({successUrl:'/login'}))
   console.log(credentials);
  } catch (error) {
   console.log(error);
  }
})

router.post('/login',async (req,res)=>{
    console.log(req.body);
    let user =  await userModel.findOne({email:req.body.email,password:req.body.password});
    // console.log(user);
    if (user) {
      res.json(user);
      console.log(user);
    }else{
      res.json({noUser: true})
    }
})

module.exports = router;
