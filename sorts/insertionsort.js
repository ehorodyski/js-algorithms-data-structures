function insertionSort(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    console.log(`Inserting ${item} in it's correct position.`);

    let pos = i - 1;
    while (pos >= 0 && items[pos] > item) {
      console.log(`Moving the array down the line`);
      items[pos + 1] = items[pos];
      pos--;
    }
    items[pos + 1] = item;
    console.log(`Semi-sorted list: [${items.toString()}]`);

  }
  console.log(`Sorted list: [${items.toString()}]`);
  return items;
}

insertionSort([54, 26, 93, 17, 77, 31, 44, 55, 20]);