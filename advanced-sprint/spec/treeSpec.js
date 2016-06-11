describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  //tree needs to have parent property
  //removefromparent function
  //

  it('should have methods named "addChild", "contains", and removeFromParent. Includes properties "value" and "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
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
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should remove tree from parent', function() {
    
    var par = tree;
    par.addChild('child');
    var child = par.children[0];

    child.addChild('grandchild1');
    child.addChild('grandchild2');
    child.removeFromParent();
    expect(child.parent).to.equal(null);
    expect(par.contains(child)).to.equal(false);

  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});
