# DOM -- DOCUMENT OBJECT MODEL
- html code ku js ke andar access kr skty
- html ke sare elements(paragraph,heading tags..) js mn a kr aik object mn convert hu jaty and us special obj ku document kehty
- this document is available in window object
- window object hr page ke huty
- ye document window obj ke andr aik sub object bn jaty jhan se hm html code apna access kr skty



# console.log 
- used to print element
- print html code

# console.dir 
- special object called document
- used to print objects (properties+methods)
- part of window object
- html is accessed inside js using window obj, inside window object we have document (DOM)



DOM MODEL
window 
document
html -- head / body
head -- meta, title, link
body -- div, p, h1-h6, img, script


# DOM manipulation
1. selecting with id
2. selecting with class
3. selecting with tag

# more better way to access html elements inside js
- Use Query selector

# query selector -- return nodelist
- node -- dom ke tree ke hr individual chez

# id element
- if id element not exist then print null

# class element
- if class element not exist then print html collection


# IMPORTANT
# document
- complete html file

# querySelector 
- pick element

# textContent
- change text

# HTML code            DOM banta hai
─────────────────       ──────────────────
<html>              →   document (root node)
  <body>            →     body (parent node)
    <h1>Hello</h1>  →       h1 (child node)
    <p>Sarah</p>    →       p  (child node)

# DOM TREE
- parent -- body
- child -- h1,p,img,div,span
- siblings -- that are on same level means h1,p are siblings


- node contain firstchild and lastchild property

# DOM TREE NODES
- text nodes
- comment nodes
- element nodes (most IMP)


# DOM manipulation properties
- tag name -- return tag for element node

