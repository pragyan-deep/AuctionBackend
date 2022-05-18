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
      await queryInterface.bulkInsert('UserConfigs', [
        {name: 'active', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'pending', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'inactive', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'super', type: 'role', createdAt: new Date(), updatedAt: new Date()},
        {name: 'admin', type: 'role', createdAt: new Date(), updatedAt: new Date()},
        {name: 'seller', type: 'role', createdAt: new Date(), updatedAt: new Date()},
        {name: 'buyer', type: 'role', createdAt: new Date(), updatedAt: new Date()},
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
      await queryInterface.bulkDelete('UserConfigs', null, {});
      await queryInterface.sequelize.query('ALTER TABLE UserConfigs AUTO_INCREMENT = 1 ;') //Reset AUTO_INCREMENT to 1

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
