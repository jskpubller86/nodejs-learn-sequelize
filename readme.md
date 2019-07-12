

# learn-sequelize

RDBS 데이터베이스를 연결할 때는 sequelize를 사용한다. 

이 프로젝트는 시퀄라이즈의 연습이다. 

## 프로젝트 순서

#### 1. mysql 5.x 버전을 설치

실습을 위해서는 mysql 5.x 버전이 필요하다.

https://dev.mysql.com/downloads/file/?id=485751

#### 2. 커넥션 연결 확인

사용자마다 설치 경로가 다를 수 있지만 보편적으로 윈도우 10에서는 다음과 같이 커넥션에 연결할 수 있다. 

  `C:\Program Files\MySQL\MySQL Server 8.0\bin` 로 이동해서 mysql  다음의 명령어를 입력한다. 

   ~~~~bash
   $ mysql -h localhost -u root -p
   Enter password: [비밀번호 입력]
   mysql>
   ~~~~

   커넥션을 빠져나올 때는 다음과 같이 한다. 

   ~~~bash
   mysql> exit	
   Bye	
   ~~~

#### 3. mysql 워크벤치를 이용한 스키마 생성
데이터베이스에 스키마를 생성할 때는 mysql 워크벤치를 이용한다. 

 워크벤치를 실행해서 localhost 데이터베이스에 접근한 다음 프로젝트에 있는 nodejs 쿼리 파일 안에 있는 명령어를 실행하여 스키마를 생성해 준다.

#### 4. sequelize 패키지 설치

데이터베이스를 생성하였다면 package.json에 명시된 패키지들을 설치하기 위해 다음과 같이 명령어를 입력한다.

~~~bash
$ npm i 
~~~~

패키지를 설치한 후  다음 명령어들을 순차적으로 입력하여 sequelize를 설치해 준다. 
~~~~bash
$ npm i sequelize mysql2    // mysql 연결을 위한 패키지
$ npm i -g sequelize-cli    // sequlize 커맨드를 위해 설치
$ sequelize init      // sequelize 초기화
~~~~

sequlize init을 하면 config, models, migrations, seeders 폴더가 생성이 된다. 
models 폴더 안의 index.js는 sequelize를 이용한 데이트베이스 연결을 한다. 

#### 5. app에서 mysql 연결 

app.js에서 sequelize를 이용하여 mysql을 연동한다. 

#### 6. 모델 정의

mysql과 연동 후에는 model을 정의해야 한다.  model을 정의해야 mysql에 생성한 스키마의 테이블에 매칭할 수 있다.

model은 models 폴더 안에 정의한다. 

#### 7. 데이터베이스 환경설정

데이터베이스 환경설정은 config/config.json에 설정해 준다. 

#### 8. 관계정의 

모델들의 관계를 정의는 models/index.js에서 정의해준다. 

#### 9.  CRUD 구현

routes 폴더의 파일에서 CRUD를 구현해 준다.

 






