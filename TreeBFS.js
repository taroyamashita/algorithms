var Tree = function(value, depth = 0){
    this.value = value;
    this.children = [];
    this.depth = depth;
  };
  
  Tree.prototype.BFSelect = function(filter) {
    var queue = new Queue();
    let result = [];
    queue.enqueue(this);
      let node = queue.dequeue();
      while (node) {
        node.children.map(child => queue.enqueue(child));
        result.push(node);
        node = queue.dequeue();
      }
    
    return result.filter(el => filter(el.value, el.depth)).map(el => el.value);
  
  };

  var Queue = function() {
    var storage = [];
  
    this.enqueue = function(item) {
      storage.push(item);
    };
  
    this.dequeue = function() {
      return storage.shift();
    };
  };
  
  /**
   * You shouldn't need to change anything below here, but feel free to look.
   */
  
  
  
  /**
    * add an immediate child
    * (wrap values in Tree nodes if they're not already)
    */
  Tree.prototype.addChild = function(child){
    if (!child || !(child instanceof Tree)){
      child = new Tree(child, this.depth+1);
    }
  
    if(!this.isDescendant(child)){
      this.children.push(child);
    }else {
      throw new Error('That child is already a child of this tree');
    }
    // return the new child node for convenience
    return child;
  };
  
  /**
    * check to see if the provided tree is already a child of this
    * tree __or any of its sub trees__
    */
  Tree.prototype.isDescendant = function(child){
    if(this.children.indexOf(child) !== -1){
      // `child` is an immediate child of this tree
      return true;
    }else{
      for(var i = 0; i < this.children.length; i++){
        if(this.children[i].isDescendant(child)){
          // `child` is descendant of this tree
          return true;
        }
      }
      return false;
    }
  };
  
  /**
    * remove an immediate child
    */
  Tree.prototype.removeChild = function(child){
    var index = this.children.indexOf(child);
    if(index !== -1){
      // remove the child
      this.children.splice(index,1);
    }else{
      throw new Error('That node is not an immediate child of this tree');
    }
  };


var root1 = new Tree(1); // depth 0
var branch2 = root1.addChild(2); // depth 1
var branch3 = root1.addChild(3); // depth 1
var leaf4 = branch2.addChild(4); // depth 2
var leaf5 = branch2.addChild(5); // depth 2
var leaf6 = branch3.addChild(6); // depth 2
var leaf7 = branch3.addChild(7); // depth 2

root1.BFSelect(function (value, depth) {
  return value % 2;
}) //=> [1, 3, 5, 7]

root1.BFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3]

console.log(root1.BFSelect(function (value, depth) {
    return value % 2;
  })) //=> [1, 3, 5, 7]