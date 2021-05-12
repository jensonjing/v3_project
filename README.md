# v3_project
vue3.0创建的项目，集成了vuex+vuerouter+bus+element-ui(按需引入了部分组件)
配置了跨域
配置了gzip打包模式，如需使用应配合nginx开启gzip模式。

配置了自适应（主要用于移动端，pc端可根据实际需要进行删除）
步骤1：卸载postcss-px-to-viewport
步骤2：删除postcss.config.js文件