/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */
function classifier(input) {
  // Your code should go here.
  let result = { noOfGroups: 0 };
  if (!Array.isArray(input)) throw new Error("Provide a valid input data");
  let inp = [...input];
  inp.forEach((cv, i) => {
    inp.age = cv.age =
      new Date().getFullYear() - new Date(cv.dob).getFullYear();
  });
  inp.sort((a, b) => a.age - b.age); // sort the array by DOB (asc) to enable easy grouping

  inp
    .reduce((accum, cv) => {
      cv.regNo *= 1;
      if (accum.length === 0) {
        // empty group
        accum.push({
          members: [
            {
              name: cv.name,
              dob: cv.dob,
              age: cv.age,
              regNo: (cv.regNo < 100 ? "0" : "") + cv.regNo
            }
          ],
          oldest: cv.age,
          sum: cv.age,
          regNos: [cv.regNo].sort((a, b) => a - b)
        });
      } else {
        // add item to existing group
        let index = accum.length - 1;
        let mItem = accum[index];
        let filtResult = mItem.members.filter(m => cv.age - m.age > 5);
        if (mItem.members.length < 3 && filtResult.length === 0) {
          // add to existing item
          mItem.members.push({
            name: cv.name,
            dob: cv.dob,
            age: cv.age,
            regNo: (cv.regNo < 100 ? "0" : "") + cv.regNo
          });
          mItem.sum += cv.age;
          mItem.regNos.push(cv.regNo);
          mItem.regNos.sort((a, b) => a - b);
          mItem.oldest = Math.max(...mItem.members.map(a => a.age));
          accum[index] = mItem;
        } else {
          // add new group
          accum.push({
            members: [
              {
                name: cv.name,
                dob: cv.dob,
                age: cv.age,
                regNo: (cv.regNo < 100 ? "0" : "") + cv.regNo
              }
            ],
            oldest: cv.age,
            sum: cv.age,
            regNos: [cv.regNo].sort((a, b) => a - b)
          });
        }
      }
      return accum;
    }, [])
    .sort()
    .forEach((item, i) => {
      // loop through the group and parse into output format
      result["group" + (i + 1)] = item;
      result.noOfGroups = ++i;
    });

  return result;
}

module.exports = classifier;
