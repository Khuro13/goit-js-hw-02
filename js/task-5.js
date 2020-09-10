const checkForSpam = function (message) {
  const words = message.split(' ');
  const lowerCase = message.toLowerCase();
  const check = lowerCase.includes('spam') || lowerCase.includes('sale');
  return check;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
