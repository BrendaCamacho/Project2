module.exports = function (sequelize, DataTypes) {
    var Band = sequelize.define("Band", {
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
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Band;
};