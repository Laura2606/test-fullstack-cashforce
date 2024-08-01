
module.exports = (sequelize, DataTypes) => {
    const Buyer = sequelize.define('Buyer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tradingName: DataTypes.STRING,
        cashforceTax: DataTypes.STRING,
        responsibleName: DataTypes.STRING,
        responsibleEmail: DataTypes.STRING,
        responsiblePosition: DataTypes.STRING,
        responsiblePhone: DataTypes.STRING,
        responsibleMobile: DataTypes.STRING,
        website: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        address: DataTypes.STRING,
        number: DataTypes.STRING,
        complement: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        situation: DataTypes.STRING,
        situationDate: DataTypes.STRING,
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
                model: 'Cnpj', // Nome do modelo referenciado
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
        confirm: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
    }, {
        tableName: 'buyers',
    });

    Buyer.associate = function (models) {
        // Associações
        Buyer.belongsTo(models.Cnpj, { foreignKey: 'cnpjId' });
    };

    return Buyer;
};
