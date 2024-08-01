'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = (sequelize, DataTypes) => {
    const OrderPortion = sequelize.define('orderportions', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nDup: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dVenc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vDup: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        availableToMarket: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        orderId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'orders',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
    });

    OrderPortion.associate = function (models) {
        OrderPortion.belongsTo(models.orders, { foreignKey: 'orderId' });
    };

    return OrderPortion;
};
