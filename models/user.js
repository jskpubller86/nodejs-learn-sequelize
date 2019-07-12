// user 모델 정의
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        married: {
            type: DataTypes.BOOLEAN,
            allowNull: false, // not null
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true, 
        },
        created_at: { 
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW // 기본 값 설정.
        },
    },{
        timestamps: false, // true 이면 createdAt과 updatedAt 컬럼을 추가
        charset: 'utf8',  // 한글지원
        collate: 'utf8_general_ci', // 한글지원
    });
};
