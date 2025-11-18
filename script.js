function daysOfAYear(year) {
  // Leap year logic:
  // 1. Must be divisible by 4
  // 2. If divisible by 100, must also be divisible by 400
  const isLeap =
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 400 === 0);

  return isLeap ? 366 : 365;
}

