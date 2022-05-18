'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      initialPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      finalPrice: {
        type: Sequelize.DOUBLE
      },
      auctionId: {
        type: Sequelize.UUID,
        references: {
          model: 'Auctions',
          key: 'id'
        }
      },
      buyerId: {
        type: Sequelize.Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ProductConfigs',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ProductConfigs',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};