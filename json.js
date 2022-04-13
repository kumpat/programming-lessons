const fs = require('fs');
const axios = require('axios');
axios.get("https://jsonplaceholder.typicode.com/todos")
.then( response => 
{
const vladimir = response.data;
console.log(response);
const json = JSON.stringify(vladimir);
console.log(typeof json); 
console.log(json);
fs.writeFile('todos.json', json, function (err) {
if (err) return console.log(err);
console.log('Привет');
});
}
)
.catch(function (error) {
console.log(error);
})
writeJsonplaceholderToFile.then(() => {
})
.catch(e => console.error(e));
function writeJsonplaceholderToFile() {
 return new Promise((resolve, reject) => {
 axios.get("https://jsonplaceholder.typicode.com/todos")
.then(res => {
const json = JSON.stringify(res.data);
fs.writeFile('todos.json', json, (err) => {
 if (err) return reject(err);
 resolve();
})
})
.catch(reject)
})
} 