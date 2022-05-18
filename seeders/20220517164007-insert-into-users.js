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
      await queryInterface.bulkInsert('Users', [
        { 
          id: 'fd73d705-3bd3-462d-9a38-b4ebcedbcd69',
          firstname: 'Tanjiro', 
          lastName: 'Kamado', 
          email: 'tanjiro@mailinator.com', 
          phone: 1234567890, 
          password: 'password', 
          type: 6, 
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          id: 'c58b03bd-82e2-4005-9229-68858316f19d',
          firstname: 'Zenitsu', 
          lastName: 'Agatsuma', 
          email: 'zenitsu@mailinator.com', 
          phone: 1234567891, 
          password: 'password', 
          type: 6, 
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
      await queryInterface.bulkDelete('Users', null, {});
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};