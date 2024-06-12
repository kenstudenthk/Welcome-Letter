const fs = require('fs');
const path = require('path');

const projectDir = 'Welcome-Letter';
const subDirectories = ['Modules'];
const files = ['script.js', 'pdfGenerator.js', 'emailSender.js'];

// Create the project directory
fs.mkdirSync(projectDir, { recursive: true });

// Create the sub-directories
for (const dir of subDirectories) {
  const dirPath = path.join(projectDir, dir);
  fs.mkdirSync(dirPath, { recursive: true });
}

// Create the files
for (const file of files) {
  const filePath = path.join(projectDir, file);
  fs.writeFileSync(filePath, '');
}

console.log('Project structure created successfully!');