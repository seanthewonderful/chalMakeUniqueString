// Write your solution below:
// Pseudo: make string lower case and remove spaces using splice?
// then for loop - if str[0]=str[all other indices until array.length]
// then 


function makeUnique(str) {
    let letters = str.split('')
    for(i=0; i<letters.length-1; i++){
        for(j=i+1; j<letters.length; j++){
            if(letters[i] === letters[j]){
                letters.splice(j,1)
            }
        }
    }return letters.toString()
}

console.log(makeUnique('baraban'))


// Solutions that work:

// function makeUnique(string) {
//     return string
//       .split('')
//       .filter(function(item, pos, self) {
//         return self.indexOf(item) == pos;
//       })
//       .join('');
//   }
//   console.log(makeUnique('baraban'));

// function makeUnique(str) {
//     let uniqSet =  new Set(str)
//      let str2 = Array.from(uniqSet).join('')
//      return str2
//    }
//    console.log(makeUnique(`helloworld`))


//    function duplicateLet(word) {
//     word.toLowerCase()
//     let wordArr = word.split('');
//     for(i = 0; i < wordArr.length; i++) {
//         for(x = i + 1; x < wordArr.length; x++) {
//             if(wordArr[i] === wordArr[x]) {
//                 wordArr.splice(x, 1)
//             }
//         }
//     }return wordArr.join('')
// }
// console.log(duplicateLet("testduplicate"))


// makeUnique = str => [...new Set(str.toLowerCase())].join('')


// let makeUnique = word => {
//     let uniqueWord = '';
//         for(let i = 0; i < word.length; i++){
//             if(!(uniqueWord.includes(word[i]))){
//                 uniqueWord += word[i];
//             };
//         };
//         return uniqueWord;
// };

// console.log(makeUnique('iwanttoclimbamountain'));