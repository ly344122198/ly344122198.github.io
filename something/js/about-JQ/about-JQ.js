//jq实现大致原理

//命名空间方法
//1.获取节点的所有兄弟节点
function getSiblings(node) {
    var allChildren = node.parentNode.childern
    var ary = {
        length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
            ary[ary.length] = allChildren[i]
            ary.length += 1
        }
    }
    return ary
}

//给元素添加n个className
function addClass(node, classes) {
    for (const key in classes) {
        var methodName = classes[key] ? 'add' : 'remove'
        node.classList[methodName](key)
    }
}

//命名空间
window.ly = {}
ly.getSibling = getSibling
ly.addClass = addClass

ly.getSibling(node)
ly.addClass(node, {
    a: true,
    b: false,
    c: true
})
// 以上命名空间

//原型方法：把方法添加到node原型上，用this绑定参数
Node.prototype.getSiblings = function () {
    var allChildren = this.parentNode.children

    var array = {
        length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== this) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    return array
}

node.prototype.addClass(classes) {
    for (const key in classes) {
        var methodName = classes[key] ? 'add' : 'remove'
        this.classList[methodName](key)
    }
}
node.getSiblings()
node.addClass({
    a: true,
    b: false,
    c: true
})
//以上原型方法（js的面向对象），java时public（好像是记不清楚了）

//直接在原型上修改很不好，所以构建一个node对象
window.Node2 = function (node) {
    return {
        getSibling: function () {
            var allChildren = node.parentNode.children

            var array = {
                length: 0
            }
            for (let i = 0; i < allChildren.length; i++) {
                if (allChildren[i] !== node) {
                    array[array.length] = allChildren[i]
                    array.length += 1
                }
            }
            return array
        },
        addClass: function (classes) {
            for (const key in classes) {
                var methodName = classes[key] ? 'add' : 'remove'
                node.classList[methodName](key)
            }
        }
    }
}

var node2 = Node2(node)
node2.getSiblings()
node2.addClass({
    a: true,
    b: false,
    c: true
})
//以上构建Node对象
//JQurey就是最后一种构建对象的方法，JQ对传入的参数会进行判断如下
window.JQuery = function (nodeOrSelector) {
    let nodes = {}
    if (typeof nodeOrSelector === 'String') {
        //类数组对象
        let temp = document.querySelectorAll(nodeOrSelector)
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes.length = temp.length
    } else if (nodeOrSelector instanceof Node) {
        nodes = {
            0: nodeOrSelector,
            length: 1
        }
    }

    nodes.getSibling = function () {

    }

    node.getText = function () {
        var texts = []
        for (let i = 0; i < nodes.length; i++) {
            texts.push(nodes[i].textContent)
        }
        return texts
    }
    node.setText = function (text) {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].textContent = text
        }
    }
    //jQ中会对这两个函数合并后判断，有参数就是set，没参数就get
    nodes.text = function (text) {
        if (text === undefined) {
            var texts = []
            for (let i = 0; i < nodes.length; i++) {
                texts.push(nodes[i].textContent)
            }
            return texts
        } else {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].textContent = text
            }
        }
    }

    nodes.addClass = function (classes) {
        for (const key in classes) {
            var methodName = classes[key] ? 'add' : 'remove'
            for (let i = 0; i < nodes.length; i++) {
                node[i].classList[methodName](key)
            }
        }
    }
    //JQ是写在prototype里面，nodes.__proto__ = JQ.prototype
    return nodes
}
}

var node2 = JQurey(nodeOrSelector)
node2.getSiblings()
node2.addClass({
    a: true,
    b: false,
    c: true
})
//node[0]可用