/**
 * This is the entry point to the program.
 *
 * @param {number} noOfWashes The number of times the laundry machine can clean a dirty sock
 * @param {number[]} cleanPile The array of clean socks
 * @param {number[]} dirtyPile The array of dirty socks to wash
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  let pairs = 0,
    active = "";
  cleanPile.sort((a, b) => {
    return a - b;
  }); // sort pile by number for easy grouping
  let nonPair = cleanPile.slice(); // clone the entire clear pile
  cleanPile.forEach(e => {
    if (active !== "") {
      if (active === e) {
        pairs++;
        nonPair.splice(nonPair.indexOf(e), 2); // remove detected pair from nonPair
        active = "";
      } else {
        active = e;
      }
    } else {
      active = e;
    }
  });

  // pair up the single clean socks
  if (noOfWashes !== 0) {
    nonPair.forEach(e => {
      if (noOfWashes !== 0) {
        let i = dirtyPile.indexOf(e);
        if (i !== -1) {
          pairs++; // increase the pair
          noOfWashes--; // reduce no of washes left
          dirtyPile.splice(i, 1); // remove the sock from the list (washed)
        }
      }
    });
  }

  // get pairs from dirty socks
  if (noOfWashes !== 0) {
    dirtyPile.sort((a, b) => {
      return a - b;
    }); // sort pile by number for easy grouping
    active = "";
    dirtyPile.forEach(e => {
      if (active !== "") {
        // ensure pair is available
        if (active === e && noOfWashes >= 2) {
          pairs++;
          noOfWashes -= 2;
          active = "";
        } else {
          active = e;
        }
      } else {
        active = e;
      }
    });
  }
  return pairs;
}
module.exports = getMaxPairs;
