# apt
## apt-get update 
### `KEYEXPIRED`

```
W: GPG error: http://debian.datastax.com stable Release: The following signatures were invalid: KEYEXPIRED 1439480363 KEYEXPIRED 1439480363 KEYEXPIRED 1439480363
```
1. sudo apt-key list | grep expired //需要注意的是中文的系统 expired -> 已过期
2. sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E084DAB9

3. 在更新之后就好了


### 无法下载
W: 无法下载 https://download.docker.com/linux/ubuntu/dists/xenial/InRelease  Operation timed out after 0 milliseconds with 0 out of 0 bytes received
