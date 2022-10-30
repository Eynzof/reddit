
## 如何启动?


#### docker 环境下启动
`.env`文件中的status设为`production`

编译镜像
`docker compose  -f "docker-compose.yml" build`

设定版本

` docker tag eynzo/reddit:latest eynzo/reddit:[v0.0.x]`

上传镜像

`docker push eynzo/reddit:v0.0.2`



## Version Log

> 2022-10-28 00:58 >>> Pagination done
