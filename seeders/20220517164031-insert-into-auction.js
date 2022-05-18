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
      await queryInterface.bulkInsert('Auctions', [
        { 
          id: '4de5c433-d4ae-4fa6-b86b-47bdcb646c08',
          name: 'Auctions 1', 
          auctioneerId: 'fd73d705-3bd3-462d-9a38-b4ebcedbcd69', 
          startDateTime: 1652806156, 
          duration: 60,
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          id: 'f23bd410-e630-4598-b004-5e4076772892',
          name: 'Auctions 2', 
          auctioneerId: 'fd73d705-3bd3-462d-9a38-b4ebcedbcd69', 
          startDateTime: 1652806156, 
          duration: 60,
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
      await queryInterface.bulkDelete('Auctions', null, {});
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};