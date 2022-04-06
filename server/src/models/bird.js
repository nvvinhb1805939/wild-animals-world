'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class bird extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({

    idBird: DataTypes.INTEGER,
    scienceName: DataTypes.STRING,
    vietnameseName: DataTypes.STRING,
    namePlate: DataTypes.STRING,
    kingdom: DataTypes.STRING,
    phylum: DataTypes.STRING,
    classBird: DataTypes.STRING,
    orderBird: DataTypes.STRING,
    family: DataTypes.STRING,
    images: DataTypes.STRING,
    morphological: DataTypes.STRING,
    ecological: DataTypes.STRING,
    useValue: DataTypes.STRING,
    vietnameseStatus: DataTypes.STRING,
    distribution: DataTypes.STRING,
    coordinates: DataTypes.STRING,
    habitat: DataTypes.STRING,
    place: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'bird',
    });
    return bird;
};