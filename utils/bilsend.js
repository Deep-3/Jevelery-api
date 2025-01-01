const json2csv = require('json2csv').parse;
const pdf = require('html-pdf');
const hbs = require('handlebars');
const fs = require('fs');
const path = require('path');
const nodemailer=require('nodemailer');

hbs.registerHelper('eq', (a, b) => a === b);

exports.exportToCSV = (res, data, filename) => {
    const csv = json2csv(data);

    res.attachment(filename);
    res.send(csv);
};

exports.exportToPDF = async(res, data,totalAmount, templateName, filename,email) => {
    console.log(__dirname);
    const templatePath = path.resolve(__dirname, `../templates/${templateName}`);
    console.log(templatePath);
    const templateHtml = fs.readFileSync(templatePath, 'utf-8');
    const compiledTemplate = hbs.compile(templateHtml);

    const html = compiledTemplate({ data,
        client_name: data[0].client_name || 'N/A',
        date: new Date().toLocaleDateString(),
        totalAmount
    });
   
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'deepkalathiya03@gmail.com',
            pass: 'odqa syft ltpx ghyf'
        }
    });

    const mailOptions = {
        from: 'deepkalathiya03@gmail.com',
        to: email,
        subject: `Bills`,
        html: html
    };

    try {
        let bilmail=await transporter.sendMail(mailOptions);
        res.json({bilmail});
    } catch (error) {
        res.json({error});
    }



    // pdf.create(html).toStream((err, stream) => {
    //     if (err) return res.status(500).send('Failed to generate PDF');
    //     res.attachment(filename);
    //     stream.pipe(res);
    // });


    
};