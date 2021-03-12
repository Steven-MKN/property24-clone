exports.numToReadFormat = (number) => {
  let strNum = number.toString();

  let revrseArr = [""];
  for (let i = strNum.length - 1; i >= 0; i--) {
    revrseArr.push(strNum.charAt(i));
  }

  let reverseStr = "";
  revrseArr.splice(0, 1);
  for (let i = 0; i < revrseArr.length; i++) {
    reverseStr += revrseArr[i];
    if (i > 1 && (i + 1) % 3 === 0) reverseStr += " ";
  }

  strNum = "";
  for (let i = reverseStr.length - 1; i >= 0; i--) {
    strNum += reverseStr.charAt(i);
  }

  return strNum;
};
