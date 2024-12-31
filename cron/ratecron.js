// cron/rateMasterCron.js
const cron = require('node-cron');
const rateMasterService = require('../services/rateservices');

cron.schedule('0 1 * * *', async () => {
    try {
        
        const newRate = 1000;
        await rateMasterService.resetDailyRate(newRate);
        
    } catch (error) {
        console.error(`Cron Job Failed: ${error.message}`);
    }
});
