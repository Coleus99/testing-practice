const AnalyzeArray = (array) => {

  if (array.length===0){
    return null
  }

  let avg = array.reduce((acc, cur) => acc + cur)/array.length;
  let min = array.reduce((acc, cur) => cur<acc? cur : acc);
  let max = array.reduce((acc, cur) => cur>acc? cur : acc);

  return {
    average: Math.round((avg)*10)/10,
    minimum: min,
    maximum: max,
    length: array.length,
  }
}

module.exports = AnalyzeArray