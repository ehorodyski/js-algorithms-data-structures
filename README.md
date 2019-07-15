# Algorithms/Data Structures Implemented in Javascript

## Sorts

### [Bubble Sort](sorts/bubblesort.js)
Bubble Sort compares adjacent elements and swaps their positions.

* **Worst Case:** O(n^2)
* **Average Case:** O(n^2)
* **Best Case:** O(n) if list is already sorted
* **Space Complexity:** O(1)

Totally not an effecient sort.

### [Merge Sort](sorts/mergesort.js)
Merge Sort splits the main list into two halves, then each half has `mergeSort` called on them recursively until there is only a sorted list of one item.

On the way up the recursive calls, the lists will be merged together inserting the smaller value first, creating a larger sorted list.

* **Worst Case:** O(n log n)
* **Average Case:** O(n log n)
* **Best Case:** O(n log n)
* **Space Complexity:** O(n)