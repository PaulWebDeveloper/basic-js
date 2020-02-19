module.exports = class DepthCalculator {
  calculateDepth(arr, maxDeep = 1) {
    let countArr = false;
    let res = [];

    arr.filter(item => {
      if (Array.isArray(item)) {
        let temp = item.filter(el => el);
        res = res.concat(temp);
        countArr = true;
      } 
    });

    if (countArr) return this.calculateDepth(res, maxDeep + 1);

    return maxDeep;
  }
};
