'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class Movie extends Model {
		static associate(models) { }
	}


Movie.init({
    name: DataTypes.STRING,
    genre: {
      type: DataTypes.ENUM('Action', 'Drama', 'Horror', 'Thriller', 'Science Fiction', 'Western', 'Romance', 'Adventure'),
      defaultValue: 'Drama'
    },
    directorId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'Directors',
				key: 'id'
			}
		},
	}, {
		sequelize,
		modelName: 'Movie',
	});

	return Movie;
};

class Movie extends Model {
  static associate(models) {
    
    // define association here
    Movie.belongsTo(models.Director, {
      foreignKey: 'directorId',
    })

  }
}
