'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('orders', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderNfId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        orderNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        orderPath: DataTypes.STRING,
        orderFileName: DataTypes.STRING,
        orderOriginalName: DataTypes.STRING,
        emissionDate: DataTypes.STRING,
        pdfFile: DataTypes.STRING,
        emitedTo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nNf: DataTypes.STRING,
        CTE: DataTypes.STRING,
        value: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        cnpjId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'cnpjs',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
        buyerId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'buyers',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
        providerId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'providers',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
        orderStatusBuyer: {
            type: DataTypes.STRING,
            defaultValue: '0',
        },
        orderStatusProvider: {
            type: DataTypes.STRING,
            defaultValue: '0',
        },
        deliveryReceipt: DataTypes.STRING,
        cargoPackingList: DataTypes.STRING,
        deliveryCtrc: DataTypes.STRING,
    });

    Order.associate = function (models) {
        Order.belongsTo(models.cnpjs, { foreignKey: 'cnpjId' });
        Order.belongsTo(models.users, { foreignKey: 'userId' });
        Order.belongsTo(models.buyers, { foreignKey: 'buyerId' });
        Order.belongsTo(models.providers, { foreignKey: 'providerId' });
    };

    return Order;
};
