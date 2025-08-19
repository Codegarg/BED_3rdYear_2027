const express = require('express');
const router = express.Router();
const { m5 } = require('../middleware/routerlevel');
router.use(m5);

router.post("/",(req,res)=>{
    res.json({
        success: true,
        message: "User created successfully",
    })
})

router.get("/",(req,res)=>{
    res.json({
        success: true,
        message: "Users fetched successfully",
    })
})

router.get("/:id",(req,res)=>{
    res.json({
        success: true,
        message: `Userdata with ID fetched successfully`,
    })
})

module.exports = router;