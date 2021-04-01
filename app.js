const input = 'Alexandru and Teo';
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
const resultArray = [];
for (let i =0; i < input.length; i++){
for (let j =0; j < vowels.length; j++){
      if (input[i] === vowels[j]){
      if (input[i] === 'e'){
        resultArray.push('ee');
      }
      else if (input[i] === 'E'){
        resultArray.push('EE')
      }
      else if(input[i] === 'U'){
        resultArray.push('UU');
      }
      else if (input[i] === 'u'){
        resultArray.push('uu');
      }
      else {
        resultArray.push(input[i]);
      }
      }
    }
}
console.log(resultArray.join('').toUpperCase());

