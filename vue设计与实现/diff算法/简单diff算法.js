function patchChildren(n1, n2, container) {

    // 新节点是字符串，旧节点是数组
    if (typeof n2.children === 'string') {
        if (Array.isArray(n1.children)) {
            n1.children.forEach(c => unmount(c))
        } else if (Array.isArray(n2.children)) {
            // 新老节点长度一样
            const oldChildren = n1.children;
            const newChildren = n2.children;
            for (let i = 0; i < oldChildren.length; i++) {
                patch(oldChildren[i], newChildren[i])
            }
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
