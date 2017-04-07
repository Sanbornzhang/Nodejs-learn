# Stream
## 介绍
[Stream handbook](https://github.com/jabez128/stream-handbook)
## Base Usage
### Writable Streams
#### ON
1. 'error'

  `stream.on 'error', (error)->`
2. 'finish'

  `stream.on 'finish', ()->`
3. 'pipe'

  `stream.on 'pipe', (src)->`

### Readable Streams
#### ON
1. 'data'

  `stream.on 'data', (chunk)->`
2. 'end'

  `stream.on 'end', ()->`
3. 'error'

  `stream.on 'error', (error)->`
### pipe
  ```
  readable.pipe(readable1)
  .pipe(readable2)
  .pipe(readable3)
  ...
  readable.pipe(writable);
  ```
