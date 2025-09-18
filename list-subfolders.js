const fs = require('fs');
const path = require('path');

const folderPath = './Selection'; // Replace 'Selection' with the actual path if it's not in the same directory

fs.readdir(folderPath, { withFileTypes: true }, (err, entries) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    console.log(`Subfolders in '${folderPath}':`);
    entries.forEach(entry => {
        if (entry.isDirectory()) {
            console.log(entry.name.replace(/_/g, ' ')); // Replace underscores with spaces
        }
    });
});