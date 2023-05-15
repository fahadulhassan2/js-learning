# JavaScript-Learning

learn javascript  with Fahad ul hassan basic to advance.

## JavaScript Creator  

Brendan Eich (1995) -> Mocha -> Live Script -> javaScript -> Jquery -> ECMA(2015 ES6) 

Ryan Dahl -> Node JS(2009) 

Microsoft -> TypeScript (2012) co-creator Anders Hejlsberg, a Danish software engineer

## JavaScript Frontend Framework

1. React
2. Angular
3. Vue

## JavaScript Backend Framework

1. Node
2. Deno
3. Nest Js
4. Express Js

## JavaScript Fullstack Framework

1. Next JS
2. Nuxt JS
3. Remix

## JavaScript Mobile & Desktop Application Framework

1. Electron (Desktop)
2. React Native (Mobile)

## How javacript Work 

Javascript develop by netscape -> Mozzila and also craete its javascript engine spiderMonkey.

Google Chrome - > V8 
Mozzila -> spiderMonkey
Microsoft Edge -> Chakra
 
## How Js Engine work

The script gets loaded as a UTF-16 byte stream from either the network, cache, or a worker, and passed to a byte stream decoder.
The byte stream decoder decodes the bytes into tokens. The tokens are sent to the parser.
These javascript engine process execution of javascript if user visit first time its load from network or server oher then that user visit Second time its load from cache and download the flies in bytes on client machine.

The byte stream decoder decodes the bytes into tokens. The tokens are sent to the parser engine have two types of parser .

1. Pre Parser ->  parser parse use less code even its not used. 
2. Parser -> parser parse code execute immediatly use.

1- After parser generates nodes based on the tokens,and creates an Abstract Syntax Tree (AST) like a Dom. 
2- The interpreter walks through the AST and generates byte code which client machine can understand.
3- The byte code and type feedback are sent to the optimizing compiler,
which generates highly optimized machine code.