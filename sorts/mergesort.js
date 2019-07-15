function mergeSort(items) {
  if (items.length === 1) return items;

  const midpoint = Math.floor(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint, items.length);

  console.log(`Recursively merging [${leftItems.toString()}] [${rightItems.toString()}]`);
  return mergeItems(mergeSort(leftItems), mergeSort(rightItems));
}

function mergeItems(leftItems, rightItems) {
  let mergedList = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < leftItems.length && indexRight < rightItems.length) {
    console.log(`Compare ${leftItems[indexLeft]} and ${rightItems[indexRight]}`);
    if (leftItems[indexLeft] < rightItems[indexRight]) {
      mergedList.push(leftItems[indexLeft]);
      indexLeft++;
    } else {
      mergedList.push(rightItems[indexRight]);
      indexRight++;
    }
  }

  mergedList = mergedList.concat(leftItems.slice(indexLeft)).concat(rightItems.slice(indexRight));
  console.log(`Merged list: [${mergedList.toString()}]`);
  return mergedList;
}
mergeSort([564, 124, 54, 749, 12, 78, 1]);