const { readFile,writeFile } = require('fs').promises;
// const util=require('util')

// const readFilePromise =util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)


// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,result)=>{
//             if (err) {
//                 reject(err);
//             }else{
//                 resolve(result);
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then(res=>console.log(res))
// .catch(err=>{console.log(err)})

const start =async()=>{
    try {
        const first=await readFile('./content/first.txt','utf-8')
        const second=await readFile('./content/second.txt','utf-8')
        await writeFile('./content/result.txt',
        `\nTHIS THE RESULT :${first} , ${second}`,
        {flag:'a'})
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
}

start() 

