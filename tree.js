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

    isEmpty(){
        return this.size == 0;
    }

    size(){
        return this.size;
    }
}

const tree = new Tree();
tree.addElement(5);
tree.addElement(6);
tree.addElement(4);
console.log(tree.toString());

