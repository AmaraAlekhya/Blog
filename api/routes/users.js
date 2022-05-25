const router = require("express").Router();
const User = require("../models/User");

//DELETE
router.delete("/:id", async(req,res)=>{
    if (req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id);
    
        try{
            await this.post.deleteMany({username: user.username});
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("user has been deleted");
        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(404).json("user not found");
    }
}
    else{
        res.status(401).json("You can delete your only account");
    }
    
});

//GET 
router.get("/:id", async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const{password,...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;