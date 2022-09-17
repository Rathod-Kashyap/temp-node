// const {readFile,writeFile}=require('fs')

// const { readFile, writeFile, read } = require("fs")

// readFile('./content/first.txt','utf-8',(err,result)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const first=result;
//     readFile('./content/second.txt','utf-8',(err,result)=>{
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second=result; 
//         writeFile('./content/random.txt',
//         `The answer is:${first}, ${second}`)
//     })
    
// })


// const { readFile, writeFile } = require('fs')

// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     writeFile(
//       './content/random.txt',
//       `Here is the result : ${first}, ${second}`,{flag:'a'},
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log('done with this task')
//       }
//     )
//   })
// })
// console.log('starting next task')

const {readFile,writeFile}=require('fs')
console.log('START');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if (err) {
        console.log(err);
        return
    }
    const first =result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if (err) {
            console.log(err);
            return
        }
        const second=result;

        writeFile('./content/random.txt',`\n Adding new Info : ${first} , ${second}    `,{flag:'a'},(err,result)=>{
            if (err) {
                console.log(err);
                return
            }
            console.log("Every thing is correct");
        });
    })
})
console.log("new Task");