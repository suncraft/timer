
const timeTill = process.argv.slice(2);

const alarmTimer = function(time) {
  let result = '';
    for (let each of time) {
      let numEach = Number(each);
      let miliseconds = numEach * 1000;
      if (!Number.isInteger(numEach) || numEach == '' || numEach <= 0) {
        return `One or more values are not a positive whole number. Whole numbers still executed.`;
      } else {
        setTimeout(() => {
          process.stdout.write('\x07 ')
          }, miliseconds)
        result += `There will be a sound at ${miliseconds} miliseconds. \n`;
      }
    }
  return result;
}

console.log(alarmTimer(timeTill));