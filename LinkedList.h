
/**
 * Library to store numbers (int) into linked array lists (dinamically allocated).
 * 
 * @author:   Julio Muller
 * @version:  1.0.0
 */



/**
 * Import default libraries.
 */
  #include <stdlib.h>



/**
 * Declare base struct to use as node of the linked array.
 */
  typedef struct _ListOfInt {
    int value;
    struct _ListOfInt *next;
  } ListOfInt_t;



/**
 * Declare contants.
 */
  #define MEMORY_ALLOC_ERROR -770
  #define NULL_LIST_ERROR    -771
  #define OUT_OF_RANGE_ERROR -772
  #define LIST_INDEX_START   0



/**
 * Expose functions.
 */

  // Inserts a new value (node) to the end of the list. If the list is empty (NULL), the value inserted will be the first and single one.
  void listOfIntPush(ListOfInt_t **listHead, int value);

  // Removes last value (node) from the list. If it is empty (NULL), the function will throw a run-time error.
  int listOfIntPop(ListOfInt_t **listHead);

  // Inserts a new value (node) to the beginning of the list. If the list is empty (NULL), the value inserted will be the onlt one.
  void listOfIntUnshift(ListOfInt_t **listHead, int value);

  // Removes first value (node) from the list. If it is empty (NULL), the function will throw a run-time error.
  int listOfIntShift(ListOfInt_t **listHead);

  // Returns the number of values (nodes) contained is a linked list.
  int listOfIntLength(ListOfInt_t *listHead);

  // Returns the value of a given position in the list based on a numeric index starting on 0.
  int listOfIntValue(ListOfInt_t *listHead, int index);

  // Looks up a given value into the linked list and returns its first occurrence. If no occurrence, function returns -1.
  int listOfIntIndexOf(ListOfInt_t *listHead, int value, int startAt);

  // Frees up the memory allocated to the entire list.
  void destroyListOfInt(ListOfInt_t **listHead);



/**
 * Implement functions.
 */

  // Allocates memory to maintain a node in the list.
  ListOfInt_t *createLinkOfInt(int value) {

    // Declare pointer to new node
    ListOfInt_t *newNode;

    // Allocate memory to new node
    newNode = (ListOfInt_t *) malloc(sizeof(ListOfInt_t));

    // Throw error if failed to allocate node
    if (newNode == NULL)
      exit(MEMORY_ALLOC_ERROR);

    // Define values of the node
    newNode->value = value;
    newNode->next = NULL;

    // Return created node
    return newNode;
  }

  // Inserts a new value (node) to the end of the list. If the list is empty (NULL), the value inserted will be the first and single one.
  void listOfIntPush(ListOfInt_t **listHead, int value) {

    // Allocate memory to the new node and declare pointer to navigate through existing list
    ListOfInt_t *auxNode;
    ListOfInt_t *newNode;
    newNode = createLinkOfInt(value);

    // If target list is empty (NULL), point it to the new node
    if (*listHead == NULL)
      *listHead = newNode;

    // ...otherwise, navigate to the end of the list and point to the new node
    else {
      auxNode = *listHead;
      while (auxNode->next != NULL)
        auxNode = auxNode->next;
      auxNode->next = newNode;
    }

    // NO RETURN
  }

  // Removes last value (node) from the list. If it is empty (NULL), the function will throw a run-time error.
  int listOfIntPop(ListOfInt_t **listHead) {

    // Check if list head is not empty (NULL)
    if (*listHead == NULL)
      exit(NULL_LIST_ERROR);

    // Check if list contains only a single value and unshift it
    if ((*listHead)->next == NULL)
      return listOfIntShift(listHead);

    // Declare auxiliar pointers to navigate through linked list and store the written off value
    ListOfInt_t *auxNode1, *auxNode2;
    int value;

    // Point auxiliar to list head and its next node
    auxNode1 = *listHead;
    auxNode2 = auxNode1->next;

    // Navigate to the end of the list
    while (auxNode2->next != NULL) {
      auxNode1 = auxNode2;
      auxNode2 = auxNode1->next;
    }

    // Save value removed to a variable
    value = auxNode2->value;

    // Point previous node to nothing (NULL)
    auxNode1->next = NULL;

    // Free up the memory allocated to the last node
    free(auxNode2);

    // Return the value removed from the node
    return value;
  }

  // Inserts a new value (node) to the beginning of the list. If the list is empty (NULL), the value inserted will be the onlt one.
  void listOfIntUnshift(ListOfInt_t **listHead, int value) {

    // Allocate memory to the new node
    ListOfInt_t *newNode;
    newNode = createLinkOfInt(value);

    // Point new node to list head
    newNode->next = *listHead;

    // Update list head pointer to the new node
    *listHead = newNode;

    // NO RETURN
  }

  // Removes first value (node) from the list. If it is empty (NULL), the function will throw a run-time error.
  int listOfIntShift(ListOfInt_t **listHead) {

    // Check if list head is not empty (NULL)
    if (*listHead == NULL)
      exit(NULL_LIST_ERROR);

    // Declare auxiliar pointer and variable to store the written off value
    ListOfInt_t *auxNode;
    int value;

    // Point auxiliar pointer to list head
    auxNode = *listHead;

    // Move list head to next node
    *listHead = (*listHead)->next;

    // Save value removed to a variable
    value = auxNode->value;

    // Free up the memory allocated to the first node
    free(auxNode);

    // Return the value removed from the node
    return value;
  }

  // Returns the number of values (nodes) contained is a linked list.
  int listOfIntLength(ListOfInt_t *listHead) {

    // Declare auxiliar pointer and variable to count nodes
    ListOfInt_t *auxNode;
    int counter;

    // Initialize variables
    auxNode = listHead;
    counter = 0;

    // Navigate through the linked list, increasing counter
    while (auxNode != NULL) {
      auxNode = auxNode->next;
      counter++;
    }

    // Return counter
    return counter;
  }

  // Returns the value of a given position in the list based on a numeric index starting on 0.
  int listOfIntValue(ListOfInt_t *listHead, int index) {

    // Validate informed index
    if (listHead == NULL || index < 0 || index >= listOfIntLength(listHead))
      exit(OUT_OF_RANGE_ERROR);

    // Declare auxiliar pointer
    ListOfInt_t *auxNode;
    int i;

    // Initialize variables
    auxNode = listHead;
    i = 0;

    // Navigate through list until reach indexed node
    while (i++ < index && auxNode->next != NULL)
      auxNode = auxNode->next;

    // Return value of reached node
    return auxNode->value;
  }

  // Looks up a given value into the linked list and returns its first occurrence. If no occurrence, function returns -1.
  int listOfIntIndexOf(ListOfInt_t *listHead, int value, int startAt) {

    // Validate informed start index
    if (startAt < 0 || startAt >= listOfIntLength(listHead))
      exit(OUT_OF_RANGE_ERROR);

    // Declare auxiliar pointer and variable to index nodes
    ListOfInt_t *auxNode;
    int index;

    // Initialize variables
    auxNode = listHead;
    index = LIST_INDEX_START;

    // Navigate through lsit, comparing the values with the given parameter
    while (auxNode != NULL) {
      if (index >= startAt && value == auxNode->value)
        return index;
      auxNode = auxNode->next;
      index++;
    }

    // Return negative index
    return -1;
  }

  // Frees up the memory allocated to the entire list.
  void destroyListOfInt(ListOfInt_t **listHead) {

    // Loop through nodes, unshifting the data
    while (*listHead != NULL)
      listOfIntShift(&(*listHead));

    // NO RETURN
  }
