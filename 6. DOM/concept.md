# getelement
- if element is id then only id return
- if element is class then only class return
1. getelementbyid
2. getelementbyclassname
3. getelementbytag

- does not need #, .


# queryselector
- return 1st reach element
- syntax: #id, .class
1. queryselector

# queryselectorAll
- to return all elements use queryselector

# NodeList
- use queryselector
- just like array contain for-each loop
- static --- means length remain same when element added
- nodelist contain reference of actual element

# HTMLCollection
- use getelement
- no use array
- live --- means length auto update when new element added


# Final Clear Difference
- NodeList (Static)
❌ New elements → NOT added
✅ Existing elements → can change

- HTMLCollection (Live)
✅ New elements → auto added
✅ Existing elements → can change


# Final Perfect Sentence (lock this 🔐)

👉 Same selector match hone ke bawajood:
NodeList → update nahi hoti
HTMLCollection → update hoti hai








# innerText vs innerHTML
- innerText --> it change only visible text (more safe)
- innerHTML --> it changes text+html structure (risky)