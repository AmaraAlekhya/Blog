const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE

router.post("/", async(req,res)=>{
    const newPost = new post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
});



//GET 
router.get("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ALL POSTS

router.get("/", async(req,res)=>{
    const username = req.query.User;
    const catName = req.query.cat;

    try{
        let posts;
        if(username){
            posts = await Post.find({username})
        }else if(catName){
            posts = await Post.find({categories:{
                $in:[catName],
            },
        });
        }else{
            posts = post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;