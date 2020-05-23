import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // define index where the movie array should be sliced
  // example: if second page is selected: (2 - 1) * 4 = 4
  // slice(): slice from index 4
  // take(): take 4 movies, becaus the pageSize is defined 4
  // value(): get the value of the 4 movies
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
