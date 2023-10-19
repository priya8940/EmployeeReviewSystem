const express=require('express');
const router=express.Router();

const viewsController=require('../Controller/empviewcontroller');
router.get('/view',viewsController.views);

module.exports=router;