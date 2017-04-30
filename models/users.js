var auto = new SequelizeAuto('database', 'user', 'pass', {
    host: 'localhost',
    dialect: 'postgres',
    port: 'port',
    directory: '/models',
    additional: {
        timestamps: false
    },
    tables: ['users', 'texts']
})
