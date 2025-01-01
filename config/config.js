const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('jewelerys','root','Deep@0308',{
    host:'localhost',
    dialect:'mysql', timezone: '+00:00', 
    dialectOptions: {
        timezone: 'Z', 
    }
});

sequelize.sync({alter:true})
  .then(() => console.log('Database synced successfully'))
  .catch((error) => console.error('Error syncing database:', error));


module.exports=sequelize;
