const express=require('express');
const router=express.Router();

const viewsController=require('../Controller/empViewController');
router.get('/view',viewsController.views);
//login page raut
router.get('/log-in',viewsController.login);
//dologin page rout
router.post('/do-login',viewsController.doLogin);

module.exports=router;