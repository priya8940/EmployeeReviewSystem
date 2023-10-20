const express=require('express');
const router=express.Router();

const viewsController=require('../Controller/empViewController');
router.get('/view',viewsController.views);

module.exports=router;