const express = require('express');
const router = express.Router()

router.get('/khushi',(req,res)=>{
        return res.send({status:true, msg:"hi Khushi"})
})

module.exports = router;