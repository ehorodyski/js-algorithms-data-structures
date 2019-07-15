function bubbleSort(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`Pass ${i}`);
    for (let j = 0; j < items.length; j++) {
      if (items[j] > items[j + 1]) {
        console.log(`Swapping ${j} with ${j + 1}`);
        let tempItem = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tempItem;
      }
    }
  }
  return items;
}

console.log(`Sorted array: ${bubbleSort([98, 12, 43, 42, 14])}`);