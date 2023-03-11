wueh! this projo was handful but i learned alot
I had 2 bugs which really stressed me:

# 1.UNCAUGHT REFERENCE ERROR:

    I had put deletItem & editItem functions inside addItem functions, so this threw an uncaught reference error on the console. The solution was simply to remove both functions inside the addItem function.

# 2.LOCALSTORAGE ITEMS NOT BEING READ:

    The second bug was that items were not being able to be retrieved from the local storage, & the error was coz in the if condition, i was checking for items.length and had misspelled 'length' to 'lenght' so the condition was never running true when there was items in the local storage.The fix was to spell the word length correctly so that the if condition can execute successfully
