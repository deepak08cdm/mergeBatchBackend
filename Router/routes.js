const express = require('express')
const router = express.Router()
const arr = []


router.get('/getData',(req, res)=>{
    res.send(arr)
})

router.post('/',(req,res)=>{
    const data = req.body
    const filterDate = arr.find((ele)=> ele.userName === data.userName)
    if(filterDate){
        res.send(['duplicate data change the username'])
    }
    else{
        arr.push(req.body)
        res.send(req.body)
    }
})

router.get('/data',(req,res)=>{
    res.send([{name:'deepak'},{name:'mahesh'},{name:'himanshu'}])
})
module.exports = router;