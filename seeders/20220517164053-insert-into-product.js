'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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
      await queryInterface.bulkInsert('Products', [
        { 
          id: '1',
          name: 'Lamborghini', 
          initialPrice: 10000,
          finalPrice: null,
          auctionId: '4de5c433-d4ae-4fa6-b86b-47bdcb646c08',
          buyerId: 'c58b03bd-82e2-4005-9229-68858316f19d',
          type: 8,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          id: '2',
          name: 'Mercedes', 
          initialPrice: 10000,
          finalPrice: null,
          auctionId: '4de5c433-d4ae-4fa6-b86b-47bdcb646c08',
          buyerId: 'c58b03bd-82e2-4005-9229-68858316f19d',
          type: 8,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('Products', null, {});
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};