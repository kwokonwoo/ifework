reference：https://www.ibm.com/developerworks/cn/web/1308_caiys_jsload/index.html
将所有```<script>```标签尽可能放到```<body>```标签的底部是因为脚本会阻塞页面其他资源的下载。

优化JavaScript的首要规则：**将脚本放在底部**。

考虑到HTTP请求会带来额外的性能开销，因此下载单个100kb的文件将比下载5个20kb的文件更快。也就是说，**减少页面中的外链脚本数量将会改善性能**。

在完成任务2.1<实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递>时，在```each(arr, output)```前加上```console.log```则会导致多输出一个```undefined```。

在添加远程库的时候，通过SSH关联无法推送成功，改成了https才可以。
