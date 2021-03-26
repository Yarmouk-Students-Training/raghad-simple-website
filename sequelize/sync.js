const { sequelize } = require('./models')

sequelize.sync({alert: true})
