class Node {
    /**
     * @param {Node} left 
     * @param {Number} value 
     * @param {Node} right 
     */
    constructor(left, value, right){
        this.left = left;
        this.value = value;
        this.right;
    }
}

class Tree {
    constructor(){
        this.root = null;
        this.size = 0;
    }

    /**
     * @param {Number} element 
     */
    addElement(element){
        if(this.isEmpty()){
            this.root = new Node(null, element, null);
        }else{
            let currentNode = this.root;
            while(true){
                if(currentNode.value >= element){
                    if(currentNode.left != null){
                        currentNode = currentNode.left;
                    }else{
                        currentNode.left = new Node(null, element, null);
                        break;
                    }
                }else {
                    if(currentNode.right != null){
                        currentNode = currentNode.right;
                    }else{
                        currentNode.right = new Node(null, element, null);
                        break;
                    }
                }
            }
        }
        this.size ++;
    }

    /**
     * 
     * @param {Number} element 
     * @returns {Boolean} true yes the element was encontrado
     */
    search(element){
        let search = false;

        return search;
    }

    isEmpty(){
        return this.size == 0;
    }

    size(){
        return this.size;
    }

    /**
     * 
     * @returns {String} toString
     */
    toString(){
        let tail = [];
        let string = '[ ';
        let currentNode = this.root;
        tail.push(currentNode);
        while(tail.length != 0){
            currentNode = tail.shift();
            if(currentNode != null){
                string += currentNode.value + ', ';
                if(currentNode.left != null)
                    tail.push(currentNode.left);
                if(currentNode.right != null)
                    tail.push(currentNode.right);
            }
        }
        return string.substring(0, string.length -2).concat(' ]');
    }

    /**
     * @returns {String} recorrido del arbol.
     */
    preOrder(){
        let stack = [];
        let string = '';
        let currentNode = this.root;
    }
}

const tree = new Tree();
tree.addElement(5);
tree.addElement(6);
tree.addElement(4);
tree.addElement(3);
tree.addElement(2);
tree.addElement(1);
tree.addElement(5);
tree.addElement(12);
tree.addElement(19);
tree.addElement(10);

console.log(' cadena'.length)