CREATE SCHEMA  nodejs; /* nodejs 스키마 생서 */
USE nodejs; /* nodejs 데이터베이스 생성 */
/* users 테이블 생성 */
CREATE TABLE nodejs.users(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
age INT UNSIGNED NOT NULL,
married TINYINT NOT NULL,
comment TEXT NULL,
created_at DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY(id),
UNIQUE INDEX name_unique(name ASC))
COMMENT = '사용자 정보'
DEFAULT CHARSET=utf8  /* 한글 입력을 위한 데이터 */
ENGINE=InnoDB;
DESC users;
/* 사용자 댓글 테이블 생성 */
CREATE TABLE nodejs.comments(
id INT NOT NULL AUTO_INCREMENT,
commenter INT NOT NULL,
comment VARCHAR(100) NOT NULL,
created_at DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY(id),
INDEX commenter_idx (commenter ASC),
CONSTRAINT commenter
FOREIGN KEY (commenter) /* 외래키 설정 */
REFERENCES nodejs.users (id) /* 외래키 참조는 users 테이블의 id */
ON DELETE CASCADE
ON UPDATE CASCADE)
COMMENT = '댓글'
DEFAULT CHARSET=utf8  /* 한글 입력을 위한 데이터 */
ENGINE=InnoDB;
DESC comments;
SHOW TABLES; /* 생성된 테이블 보기 */



