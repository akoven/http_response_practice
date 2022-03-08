function firstStep(input) {
  input = input.split('&');
  return input;
}

function secondStep(input) {
  const newArr = [];
  input.forEach(array =>{
    newArr.push(array.split('='));
  });

  return newArr;
}

function thirdStep(input) {
  // const newArr = [];
  // for(let i = 0; i < input.length; i++){
  //     newArr.push([input[i][0],input[i][1].replace(/\+/g, ' ')]);
  //   }

  // return newArr;
  return input.map(([key, value]) => [key, value.replace(/\+/g, ' ')]);
}

function fourthStep(input) {
  return input.map(([key,value]) => [key, decodeURIComponent(value)]);
}

function fifthStep(input) {
  return input.reduce((acc, [key, value]) =>{
    acc[key] = value //new object "acc" created with key/value pairs
    return acc;
  }, {});
}

function parseBody(str) {
  const splitStr = firstStep(str);
  const keyValueArrays = secondStep(splitStr);
  const replacedPlus = thirdStep(keyValueArrays);
  const decode_URI = fourthStep(replacedPlus);
  return fifthStep(decode_URI);
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
