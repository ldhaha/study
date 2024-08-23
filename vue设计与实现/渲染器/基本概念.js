const { effect, ref } = VueReactivity;
function renderer(domString, container) {
    container.innerHTML = domString
}

const count = ref(1);

effect(() => {
    renderer(`<h1>${count.value}</h1>`, document.getElementById('app'))
})

/**
 * patch至少接受三个参数，第一个旧vnode，第二个新的vnode,第三个就是容器
 * @param  {...any} args 
 */
function patch(...args) {
    console.log(args);
}
function createRenderer() {
    function render(vnode, container) {
        if (vnode) {

            // 新vnode存在，则和旧vnode进行path
            patch(container._vnode, vnode, container)
        } else {
            // 新vnode不存在，老的存在说明卸载了
            if (container._vnode) {
                container.innerHTML = ''
            }
        }
        container._vnode = vnode;
    }
    return {
        render
    }
}