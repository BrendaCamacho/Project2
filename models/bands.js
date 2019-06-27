module.exports = function (sequelize, DataTypes) {
    var Band = sequelize.define("Band", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vacancy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fblink: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Band;
};