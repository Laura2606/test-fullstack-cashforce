module.exports = (sequelize, DataTypes) => {
    const Cnpj = sequelize.define('Cnpj', {
        cnpj: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        companyType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'cnpjs',  // Define o nome da tabela no banco de dados
        timestamps: true,    // Adiciona colunas createdAt e updatedAt
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    });

    Cnpj.associate = function (models) {
        // Associações
        Cnpj.hasMany(models.Buyer, { foreignKey: 'cnpjId' });
    };

    return Cnpj;
};