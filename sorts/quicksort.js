function quickSort(items) {
  if (items.length < 2) return items;

  const pivot = items[0];
  let leftItems = [];
  let rightItems = [];

  for (let i = 1; i < items.length; i++) {
    console.log(`Is ${items[i]} greater than our pivot ${pivot}? ${items[i] < pivot}`);

    if (items[i] < pivot)
      leftItems.push(items[i]);
    else
      rightItems.push(items[i]);
  }
  console.log(`Recursive call with left [${leftItems.toString()}], right [${rightItems.toString()}], pivot [${pivot}]`);
  return quickSort(leftItems).concat(pivot, rightItems);
}

console.log(quickSort([124, 13, 4, 56, 87, 5, 11, 32]));