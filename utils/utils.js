exports.positiveNumOrDefault = (number, _default) => {
  try {
    let num = Number.parseInt(number);

    if (num > 0) return num;
  } catch (error) {}
  return _default;
};
