'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('AuctionConfigs', [
        {name: 'created', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'approved', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'in-progress', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'terminated', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'closed', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'deleted', type: 'status', createdAt: new Date(), updatedAt: new Date()}
      ])
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     const transaction = await queryInterface.sequelize.transaction();
     try {
      await queryInterface.bulkDelete('AuctionConfigs', null, {});
      await queryInterface.sequelize.query('ALTER TABLE AuctionConfigs AUTO_INCREMENT = 1 ;')//Reset AUTO_INCREMENT to 1
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};