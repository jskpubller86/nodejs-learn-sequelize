var express = require('express');
var User  = require('../models').User;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('users 라우터');
  //User 테이블에서 사용자를 조회한다.
  User.findAll()
    .then((users) =>{  // 조회가 성공했다면 users 파라미터로 넘겨준다.
        res.json(users); // res 응답객체에 json으로 users를 넘겨준다.
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    });
});
// post listening
router.post('/',function(req,res,next){
  // User 테이블 객체에 사용자 생성
  User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  }).then((result)=>{ // 성공했다면 result 에 결과를 담아서 줌.
      console.log(result);
      res.status(201).json(result);
  })
  .catch((err) => {
      console.error(err);
      next(err);
  });
});
module.exports = router;
