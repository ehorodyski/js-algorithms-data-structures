# Algorithms/Data Structures Implemented in Javascript

## Sorts

### [Bubble Sort](sorts/bubblesort.js)
Bubble Sort compares adjacent elements and swaps their positions.

|                         |            |
|-------------------------|-----------:|
| Worst Time Complexity   | O(n^2) |
| Average Time Complexity | O(n^2) |
| Best Time Complexity    | O(n) |
| Worst Space Complexity  | O(1) |


### [Merge Sort](sorts/mergesort.js)
Merge Sort splits the main list into two halves, then each half has `mergeSort` called on them recursively until there is only a sorted list of one item.

On the way up the recursive calls, the lists will be merged together inserting the smaller value first, creating a larger sorted list.

|                         |            |
|-------------------------|-----------:|
| Worst Time Complexity   | O(n log n) |
| Average Time Complexity | O(n log n) |
| Best Time Complexity    | O(n log n) |
| Worst Space Complexity  |       O(n) |