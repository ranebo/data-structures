describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains" and "removeFromParent", and a property named "_value" and "_parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.hasOwnProperty('_value')).to.equal(true);
    expect(tree.hasOwnProperty('_parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree._children[0]._value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree._children[0].addChild(6);
    expect(tree._children[0]._children[0]._value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree._children[0].addChild(7);
    tree._children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have children refer to their parent node', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree._children[0].addChild(7);
    tree._children[1].addChild(8);
    expect(tree._children[0]._children[0]._parent._value).to.equal(5);
    expect(tree._children[1]._children[0]._parent._value).to.equal(6);
  });

  it('should have children removed from parent when removeFromParent is called', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree._children[0].addChild(7);
    tree._children[1].addChild(8);
    tree.removeFromParent(7);
    expect(tree.contains(8)).to.equal(true);
    expect(tree.contains(7)).to.equal(false);
  });

  it('shoule traverse the tree and call a callback on each value', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree._children[0].addChild(3);
    tree._children[0].addChild(4);
    tree._children[1].addChild(5);
    tree._children[1].addChild(6);
    tree.traverse(function(value) {
      if (value) {
        return value * 2;
      }
    });
    expect(tree.contains(12)).to.equal(true);

  });
});
