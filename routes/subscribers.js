const express = require('express');
const router = express.Router(); // Use 'Router' with a capital 'R'

router.get('/',(req, res) =>{
    res.send('Hello world')

})

router.get('/:id',(req, res)=>{

})

router.post('/',(req, res)=>{

})

router.patch('/:id',(req, res)=>{

})

router.delete('/:id',(req, res)=>{

})

module.exports = router;