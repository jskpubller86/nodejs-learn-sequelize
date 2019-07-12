var express  = require('express');
var {User,Comment}  = require('../models'); // models 폴더 안에 있는 user, comment, index 모듈을 가져옴
var router = express.Router(); // 라우터 생성

router.get('/:id', function(req,res,next){
    Comment.findAll({
        include:{
            model: User,  // User 모델 정보 추가.
            where: {id: req.params.id}, 
        }
    })
    .then((comments)=>{
        console.log(comments);
        res.json(comments);
    })
    .catch((err) => {
        console.error(err);
        next(err);
    });
});

router.post('/', function (req, res, next) {
    Comment.create({  //  코맨트 생성
        commenter: req.body.id,
        comment: req.body.comment,
    })
    .then((result)=>{ // 성공하면 result 객체에 담고
        console.log(result);
        res.status(201).json(result); // json으로 넘겨줌.
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    });
});
router.patch('/:id', function(req,res, next){
    Comment.update({ comment: req.body.comment }, {where: {id: req.params.id }})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        next(err);
    });
});
router.delete('/:id', function(req, res, next){
    Comment.destroy({ where: { id: req.params.id }})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    });
});
module.exports = router;