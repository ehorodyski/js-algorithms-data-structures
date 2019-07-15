# Algorithms/Data Structures Implemented in Javascript

## Sorts

### [Bubble Sort](sorts/bubblesort.js)
Bubble Sort compares adjacent elements and swaps their positions.

|    Complexity           |            |
|-------------------------|-----------:|
| Worst Time    | O(n^2) |
| Average Time  | O(n^2) |
| Best Time     | O(n) |
| Worst Space   | O(1) |


### [Merge Sort](sorts/mergesort.js)
Merge Sort splits the main list into two halves, then each half has `mergeSort` called on them recursively until there is only a sorted list of one item.

On the way up the recursive calls, the lists will be merged together inserting the smaller value first, creating a larger sorted list.

| Complexity              |            |
|-------------------------|-----------:|
| Worst Time              | O(n log n) |
| Average Time            | O(n log n) |
| Best Time               | O(n log n) |
| Space                   |       O(n) |

### [Insertion Sort](sorts/insertionsort.js)
Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.

| Complexity              |            |
|-------------------------|-----------:|
| Worst Time              |     O(n^2) |
| Average Time            |     O(n^2) |
| Best Time               |       O(n) |
| Space                   |       O(1) |

It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

* Simple implementation: Jon Bentley shows a three-line C version, and a five-line optimized version
* Efficient for (quite) small data sets, much like other quadratic sorting algorithms
* More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort