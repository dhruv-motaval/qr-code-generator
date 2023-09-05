import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from 'fs'

inquirer
    .prompt([
        {
            message: " Enter Your URL:",
            name: "URL",
        }
    ])
    .then((answers) => {
        const url = answers.URL;

        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr.png'));

        writeFile("yourUrl.txt",url, (err) =>{

            if (err) throw err;             
            console.log("text file has been saved!");
            
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            
        } else {
           
        }
    });
