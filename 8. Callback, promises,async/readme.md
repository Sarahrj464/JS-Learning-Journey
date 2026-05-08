# async await >> promise >> callback hell

1. `synchronous` -- code run in a sequence in step by step, works in an order, run in a sync
-- all programming that we learn from basics to oop is synchronous

2. `asynchronous` -- code does not run in a sequence, if a piece of instruction takes time to run then remaining code run first otherwise delay occur in UI
-- when we need data from API, maybe it take 4-5 sec to fetch data from API then either we wait for data to come and then we move to next instruction, this is bad way to wait so we use async so that we don't have to wait



# IIFE -- Immediatedly invoked function
- iife is a fuction that is called immediatedly as soon as it is defined
- (function) () second parenthesis is used to execute it

- inside (function) is either normal function with function keyword, arrow function or async function