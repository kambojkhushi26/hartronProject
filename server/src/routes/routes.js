const express = require('express');
const router = express.Router()
const {CreateUser} = require('../controller/userController')


router.post('/test', CreateUser)

router.all('/*',(req,res)=>{
        return res.status(404).send({status:false,msg:'Invalid Url'})
})

module.exports = router;