## What Node.js Includes


## Node Internals
- Basically things bind from lib js file to c bind and finally to libuv

## Libuv Internals
- C stuff used for mainly Node but it can be used for other language

## Sync vs Async


## Non-block IO
- Blocking things, wait till it dones
- Non-blocking things, will do things while it is processing



## Multi-threading, Process, and Threads
- process coantina threads
- threads contain call stack
- different threads contain different call stack but can be inside the same process

## Is Node.js Multi Threaded?
- Basically sync go to main thread while async go to event loop (but not always?)
- Event loop manage while thread pool or os do the work
- Node prioritize using OS to reduce the burden on threads.

## Event Loop
- Processing all async things


## Callback Queues
- keep track callback (FIFO)

## Phases of the Event Loops
- Timer
	- setTimeout
	- setInterval
- I/O (Pool)
- setImmediate
- Close

## Observer pattern
- Pub sub pattern?

## Node Event Emitter



