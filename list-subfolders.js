const fs = require('fs');
const path = require('path');
const prompt = require('prompt-sync')();

function logUserInput(input) {
    console.log(`The function received: ${input}`);
}

function listSubfolders(dir) {
    fs.readdir(folderPath, { withFileTypes: true }, (err, entries) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        
        console.log(`Subfolders in '${folderPath}':`);
        entries.forEach(entry => {
            if (entry.isDirectory()) {
                console.log(entry.name.replace(/_/g, ' '));
            }
        });
    });
}

const userInput = prompt(`Please enter a parent folder name: `);
const folderPath = `./${userInput}`;
logUserInput(userInput);
listSubfolders(folderPath);

// Alternative synchronous version of listSubfolders:

// function listSubfolders(dir) {
//     try {
//         const items = fs.readdirSync(dir, { withFileTypes: true });
//         const folders = items.filter(item => item.isDirectory()).map(folder => folder.name);
//         return folders;
//     } catch (err) {
//         console.error(`Error reading directory: ${err.message}`);
//         return [];
//     }
// }

// const subfolders = listSubfolders(folderPath);
// console.log(`Subfolders in '${folderPath}':`, subfolders);