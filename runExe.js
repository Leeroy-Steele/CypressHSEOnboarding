const { exec, spawn } = require('child_process'); 
 
// Using exec 
exec('npx cypress run --browser chrome --headless', (error, stdout, stderr) => { 
    if (error) { 
        console.error(`Error executing file: ${error.message}`); 
        return; 
    } 
    if (stderr) { 
        console.error(`stderr: ${stderr}`); 
        return; 
    } 
    console.log(`stdout: ${stdout}`); 
}); 
 
// // Using spawn 
// const child = spawn('path/to/your/file.exe'); 
 
// child.stdout.on('data', (data) => { 
//     console.log(`stdout: ${data}`); 
// }); 
 
// child.stderr.on('data', (data) => { 
//     console.error(`stderr: ${data}`); 
// }); 
 
// child.on('close', (code) => { 
//     console.log(`Child process exited with code ${code}`); 
// }); 