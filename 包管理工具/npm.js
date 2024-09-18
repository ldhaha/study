// npm 管理的包地址
const url = 'https://www.npmjs.com/'

// package.json 文件
/**
 * 必填属性
 * name(项目名称),version(当前项目版本号),description(描述信息),author(作者信息),license(开源协议)
 * private:是否私有  为true时，禁止发布
 */

/**
 * 常见属性
 * main:
 * 设置程序的入口
 * 
 * scripts:
 * 脚本命令
 * 
 * dependencies:
 * 无论开发环境还是生产环境都需要依赖的包
 * 
 * devDependercies:
 * 开发环境需要依赖的包
 * 
 * peerDependencies:
 * 对等依赖，也就是你依赖的一个包，它必须是以另外一个宿主包为前提的；比如element-plus是依赖于vue3的，ant design是依赖于react、react-dom
 */

/**
 * 版本规范
 * semver版本规范是X.Y.Z：
    pX主版本号（major）：当你做了不兼容的API 修改（可能不兼容之前的版本）；
    pY次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）；
    pZ修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）；
 */

/**
 * ^和~的区别
 * ^x.y.z：表示x是保持不变的，y和z永远安装最新的版本
 * ~x.y.z：表示x和y是保持不变的，z永远安装最新的
 */

/**
 * 常见其他命令
 * 
 * 卸载：
 * npm uninstall package
 * npm uninstall package --save-dev
 * npm uninstall package -D
 * 
 * 重新rebuild
 * npm rebuild
 * 
 * 清理缓存
 * npm cache clean
 * 
 * 设置镜像
 * npm install -g cnpm--registry=https://registry.npm.taobao.org
 */