'use strict';

module.exports = (sequelize, DataTypes) => {
	let User = sequelize.define('User', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		username: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING
		}
	}, {
		classMethods: {
			associate: (models) => {}
		},
		freezeTableName: true,
		tableName: 'user',
		timestamps: false
	});

	return User;
};