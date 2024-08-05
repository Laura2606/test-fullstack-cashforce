'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
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
        emissionDate: DataTypes.DATE,
        pdfFile: DataTypes.STRING,
        emitedTo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nNf: DataTypes.STRING,
        CTE: DataTypes.STRING,
        value: DataTypes.FLOAT,
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
                model: 'Cnpj',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
        buyerId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Buyer',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
        providerId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Provider',
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
        Order.belongsTo(models.Cnpj, { foreignKey: 'cnpjId' });
        Order.belongsTo(models.User, { foreignKey: 'userId' });
        Order.belongsTo(models.Buyer, { foreignKey: 'buyerId', as: 'buyer' });
        Order.belongsTo(models.Provider, { foreignKey: 'providerId', as: 'provider' });
        Order.hasMany(models.Offer, { foreignKey: 'orderId', as: 'offers' });
    };

    return Order;
};
