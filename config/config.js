const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('jewelerys','root','Deep@0308',{
    host:'localhost',
    dialect:'mysql'
});

sequelize.sync({alter:true})
  .then(() => console.log('Database synced successfully'))
  .catch((error) => console.error('Error syncing database:', error));


module.exports=sequelize;
