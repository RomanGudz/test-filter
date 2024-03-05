const filter = (arr, objName, val) => {
  return arr.filter(obj => obj[objName] === val);
};

export default filter;