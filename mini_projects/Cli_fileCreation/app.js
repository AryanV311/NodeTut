import readline from "readline"
import fs from "fs"


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const createFile = () => {
    rl.question("Enter a file name: ", (fileName) => {
        rl.question("Enter a file content: " , (content) => {
            fs.writeFile(`${fileName}.txt`, content, (err) => {
                if(err){
                    console.log(`Error writing file: ${err.message}`);
                }else {
                    console.log(`File "${fileName}.txt" created successfully`);
                }
            })
        })
    })

}

createFile()