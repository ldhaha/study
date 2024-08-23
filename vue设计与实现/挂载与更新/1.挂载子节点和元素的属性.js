/**
 * children不再是字符串
 */
const Comment = Symbol();
const Text = Symbol();
const Fragment = Symbol()
const vnode = {
    type: 'div',
    props: {
        id: 'foo',
        class: normalizeClass([
            'foo bar',
            {
                bar: true
            }
        ]),
        onClick: () => {
            alert('clicked')
        }
    },
    children: [
        {
            type: 'p',
            children: 'hello'
        }
    ]
}
/**
 * patch至少接受三个参数，第一个旧vnode，第二个新的vnode,第三个就是容器
 * @param  {...any} args 
 */
function shouldSetAsProps(el, key, value) {
    if (key === 'form' && el.tagName === 'INPUT') return false;
    return key in el
}

function unmount(vnode) {
    const parent = vnode.el.parentNode;
    if (parent) {
        parent.removeChild(vnode.el)
    }
}


function createRenderer(options) {
    const { createElement, insert, setElementText, patchProps } = options
    function patchElement(n1, n2) {
        const el = n2.el = n1.el;
        const oldProps = n1.props;
        const newProps = n2.props;
        for (const key in newProps) {
            if (newProps[key] !== oldProps[key]) {
                patchProps(el, key, oldProps[key], newProps[key])
            }
        }
        for (const key in oldProps) {
            if (!(key in newProps)) {
                patchProps(el, key, oldProps[key], null)
            }
        }
        patchChildren(n1, n2, el)
    }
    function patchChildren(n1, n2, container) {

        // 新节点是字符串，旧节点是数组
        if (typeof n2.children === 'string') {
            if (Array.isArray(n1.children)) {
                n1.children.forEach(c => unmount(c))
            } else if (Array.isArray(n2.children)) {
                if (Array.isArray(n1.children)) {
                    // 设计diff算法
                    n1.children.forEach(c => unmount(c))
                    n2.children.forEach(c => patch(null, c, container))
                } else {
                    setElementText(container, '')
                    n2.children.forEach(c => patch(null, c, container))
                }
            } else {
                // 新节点不存在
                if (Array.isArray(n1.children)) {
                    n1.children.forEach(c => unmount(c))
                } else if (typeof n1.children === 'string') {
                    setElementText(container, '')
                }
            }
            setElementText(container, n2.children)
        }
    }
    function patch(n1, n2, container) {
        if (n1 && n1.type !== n2.type) {
            unmount(n1)
            n1 = null
        }
        const { type } = n2;
        if (typeof type === 'string') {
            if (!n1) {
                mountElement(n2, container)
            } else {
                patchElement(n1, n2)
            }
        } else if (type === Text) {
            if (!n1) {
                const el = n2.el = document.createTextNode(n2.children)
                insert(el, container)
            } else {
                const el = n1.el = n2.el
                if (n2.el !== n1.el) {
                    el.nodeValue = n2.children
                }
            }

        } else if (type === Fragment) {
            if (!n1) {
                n2.children.forEach(c => patch(null, c, container))
            } else {
                patchChildren(n1, n2, container)
            }
        } else if (typeof type === 'object') {
            // 描述的是组件
        } else if (type === 'xxx') {
            // 处理其他类型
        }
    }



    function mountElement(vnode, container) {
        const el = vnode.el = createElement(vnode.type);

        if (typeof vnode.children === 'string') {
            setElementText(el, vnode.children)
        } else if (Array.isArray(vnode?.children)) {
            // 如果children是数组，则遍历每一个子节点，并调用patch挂载
            vnode.children.forEach(child => {
                patch(null, child, el)
            })
        }
        if (vnode.props) {
            for (const key in vnode.props) {
                patchProps(el, key, null, vnode.props[key])
            }
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
                unmount(container._vnode)
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
    },
    patchProps(el, key, preValue, nextValue) {
        // 事件绑定
        if (/^on/.test(key)) {
            // const name = key.slice(2).toLowerCase();
            // preValue && el.removeEventListener(name, preValue)
            // el.addEventListener(name, nextValue)
            const invokers = el._vei || (el._vei = {});
            let invoker = invokers[key]
            const name = key.slice(2).toLowerCase();
            if (nextValue) {
                if (!invoker) {
                    invoker = el._vei[key] = (e) => {
                        if (e.timeStamp < invoker.attached)
                            if (Array.isArray(invoker.value)) {
                                invoker.value.forEach(fn => fn(e))
                            } else {
                                invoker.value(e)
                            }

                    }
                    invoker.value = nextValue
                    invoker.attached = performance.now()
                    el.addEventListener(name, invoker)
                } else {
                    invoker.value = nextValue
                }
            } else if (invoker) {
                el.removeEventListener(name, invoker)
            }
        }
        // class处理
        else if (key === 'class') {
            // className setAttribute classList 第一个性能最好
            el.className = nextValue || ''
        } else if (shouldSetAsProps(el, key, nextValue)) {
            const type = typeof el[key]
            if (type === 'boolean' && nextValue === '') {
                el[key] = true
            } else {
                el[key] = nextValue
            }
        } else {
            el.setAttribute(key, nextValue)
        }
    }
});
const container = { type: 'root' }
renderer.render(vnode, container)