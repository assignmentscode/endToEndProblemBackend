module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('questionLists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    question: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('questionLists'),
};
