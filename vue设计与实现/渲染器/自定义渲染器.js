const vnode = {
    type: 'h1',
    children: 'hello'
}
/**
 * patch至少接受三个参数，第一个旧vnode，第二个新的vnode,第三个就是容器
 * @param  {...any} args 
 */

function createRenderer(options) {
    const { createElement, insert, setElementText } = options

    function patch(n1, n2, container) {
        if (!n1) {
            mountElement(n2, container)
        } else {
            // n1存在意味着打补丁
        }
    }

    function mountElement(vnode, container) {
        const el = createElement(vnode.type);
        if (typeof vnode.children === 'string') {
            setElementText(el, vnode.children)
        }
        insert(el, container)
    }
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
const renderer = createRenderer({
    createElement(tag) {
        console.log(`创建元素${tag}`)
        return { tag }
    },
    setElementText(el, text) {
        console.log(`设置${JSON.stringify(el)}的文本内容：${text}`)
        el.textContent = text
    },
    insert(el, parent, archor = null) {
        console.log(`将${JSON.stringify(el)}添加到${JSON.stringify(parent)}下`)
        parent.children = el;
    }
});
const container = { type: 'root' }
renderer.render(vnode, container)