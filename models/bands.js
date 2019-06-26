module.exports = function (sequelize, DataTypes) {
    var Band = sequelize.define("Band", {
<<<<<<< HEAD
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
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
=======
        bandName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bandGenre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bandLocation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bandVacancy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bandDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        bandFblink: {
>>>>>>> master
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Band;
};