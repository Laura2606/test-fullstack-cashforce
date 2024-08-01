'use strict';

module.exports = (sequelize, DataTypes) => {
    const Offer = sequelize.define('offers', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tax: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tariff: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adValorem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        float: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        iof: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expiresIn: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        paymentStatusSponsor: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        paymentStatusProvider: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
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
        sponsorId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'sponsors',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
    });

    Offer.associate = function (models) {
        Offer.belongsTo(models.orders, { foreignKey: 'orderId' });
        Offer.belongsTo(models.sponsors, { foreignKey: 'sponsorId' });
    };

    return Offer;
};