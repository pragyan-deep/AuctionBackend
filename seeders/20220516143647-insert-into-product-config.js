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
      await queryInterface.bulkInsert('ProductConfigs', [
        {name: 'listed', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'approved', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'in-auction', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'booked', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'sold', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'deleted', type: 'status', createdAt: new Date(), updatedAt: new Date()},
        {name: 'two-wheeler', type: 'type', createdAt: new Date(), updatedAt: new Date()},
        {name: 'lmv', type: 'type', createdAt: new Date(), updatedAt: new Date()},
        {name: 'hmv', type: 'type', createdAt: new Date(), updatedAt: new Date()},
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
      await queryInterface.bulkDelete('ProductConfigs', null, {});
      await queryInterface.sequelize.query('ALTER TABLE ProductConfigs AUTO_INCREMENT = 1 ;')//Reset AUTO_INCREMENT to 1
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
