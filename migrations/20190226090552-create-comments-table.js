module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('commentsTables', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    questionID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    response: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    responderName: {
      type: Sequelize.STRING,
      allowNull: false,
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
  down: queryInterface => queryInterface.dropTable('commentsTables'),
};

// .then(() => queryInterface.addConstraint('commentsTables', ['questionID'], {
//   type: 'FOREIGN KEY',
//   name: 'FK_commentsTable',
//   references: {
//     table: 'questionLists',
//     field: 'id',
//   },
//   onDelete: 'no action',
//   onUpdate: 'no action',
// }))
// queryInterface.removeConstraint('commentsTables', 'FK_commentsTable')
