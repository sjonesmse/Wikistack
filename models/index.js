const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

// const Page = db.define('page', {
//   title: Sequelize.TEXT,
//   slug: Sequelize.STRING,
//   content: Sequelize.TEXT,
//   status: Sequelize.ENUM('open', 'closed')
// })

// const User = db.define('user', {
//   name: Sequelize.STRING,
//   email: Sequelize.STRING
// })
const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    defaultValue: 'open',
  },
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = { db, Page, User };
