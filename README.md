# mern-notes-app

A full-stack web application implemented using MERN (Mongo, Express, React, Node) stack. A simple note taking web application.

## Learnings

### UI (Frontend)

1. Make use of css resets
2. You can include basic typographic styles: line-height and default font size in the css reset
3. ```<section>``` vs ```<article>```. ```<section>``` is like ```<div>``` but more meaningful as it can be used to wrap related elements altogether while ```<article>``` is used for independent elements. Independent elements are contents where it can still make sense if being separated from other elements.


### DATA HANDLING

1. When async operationsa involved, always check for the state contents first before accessing it. As JSX code are executed immediately while you are still trying to display the async data!
