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
    validate: {
      notEmpty: true,
    },
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
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

Page.beforeValidate((pageInstance) => {
  pageInstance.slug = slugCreator(pageInstance.title);
  console.log(pageInstance.slug);
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

function slugCreator(title) {
  const regex = /\W/;
  return title.replace(' ', '_').replace(regex, '');
}

module.exports = { db, Page, User };
