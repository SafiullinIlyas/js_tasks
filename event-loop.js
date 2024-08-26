 /*
Call stack - LIFO

Micro queue - FIFO
Macro queue - FIFO

WEBAPI где хранятся

 */



 /*

 Callstack: in promise log1 setTimeout 100 sleep1000then sleep2000then sleep2000finally finally setTimeout1000

 Micro queue:

 Macro queue:

 webapi:

 console: in promise log1 setTimeout100 sleep1000then sleep2000then sleep2000finaly finalysettimeout1000



  */


 setTimeout(() => {
     console.log('setTimeout 100')
 }, 100)

 sleep(1000)
     .then(() => {
         console.log('sleep 1000 then')
     })

 function sleep(ms) {
     return new Promise((resolve) => setTimeout(resolve, ms))
 }

 const promise = new Promise((resolve) => {
     console.log('in promise')
     resolve('Promise then')
 })

 sleep(2000)
     .then(() => {
         console.log('sleep 2000 then')
     })
     .finally(() => {
         console.log('sleep 2000 finally')
         setTimeout(() => {
             console.log('finally setTimeout 1000')
         }, 1000)
     })

 console.log('log1')

 promise.then((res) => console.log(res))
