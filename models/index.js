'use strict';

const fs = require('fs'); 
const path = require('path');
const Sequelize = require('sequelize');  // sequelize 모듈 가져옴.
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; //노드 환경 가져오기 development로 가져옴.
console.log("process.env:");
console.log(process.env);

const config = require(__dirname + '/../config/config.json')[env];// config.json[development]
const db = {}; // db object 생성

const sequelize = new Sequelize(config.database, config.username, config.password, config); // 데이터베이스 생성

db.sequelize = sequelize; // 데이터베이스 연결 객체 추가
db.Sequelize = Sequelize; // 시쿼라이즈 모듈 추가

db.User = require('./user')(sequelize, Sequelize); //user 모델 추가
db.Comment = require('./comment')(sequelize, Sequelize); //comment 모델 추가
// user(1).hasMany -> comment(N).belongsTo  관계
db.User.hasMany(db.Comment,{foreignKey: 'commenter', sourceKey: 'id'}); 
db.Comment.belongsTo(db.User, {foreignKey: 'commenter', targetKey: 'id'});

module.exports = db; // db 모듈로 내보냄.
