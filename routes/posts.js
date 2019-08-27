const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// router.get('/', (req,res)=>{
//     res.send("We are on Home");
// });

// router.get('/posts', (req,res)=>{
//     res.send("We are on Home/posts");
// });

//GET BACK ALL POSTS
router.get('/', async (req,res)=>{
    // res.send("We are on Home/Posts");
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});


//SUBMIT A POST
router.post('/', async (req,res)=>{
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    // post.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err => {
    //     res.json({message: err});
    // });

    try{
        const saved_post = await post.save();
        res.json(saved_post);
    }catch(err){
        res.json({message: err});
    }
});


//GET A SPECEFIC POST
router.get('/:postId', async (req,res)=>{
    // console.log(req.params.postId);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

// router.patch('/:postId', async (req,res)=>{
//     try{
//         const post = await Post.updateOne(
//             {_id: req.params.postId},
//             {$set: {title: req.body.title, description: req.body.description}}
//         );
//         res.json(post);
//     }catch(err){
//         res.json({message: err});
//     }
// });

//DELETE A SPECEFIC POST
router.delete('/:postId', async (req,res)=>{
    try{
        const removed_post = await Post.remove({_id: req.params.postId});
        res.json(removed_post);
    }catch(err){
        res.json({message: err});
    }
});

//UPDATE A POST
router.patch('/:postId', async (req,res)=>{
    try{
        const updated_post = await Post.updateOne(
            {_id: req.params.postId}, 
            { $set: {title: req.body.title, description: req.body.description} 
        });
        res.json(updated_post);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;