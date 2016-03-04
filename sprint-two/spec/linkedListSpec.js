describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('_head');
    expect(linkedList).to.have.property('_tail');
  });

  it('should have methods named "addToTail", "removeHead", "addToHead", "removeTail", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.addToHead).to.be.a('function');
    expect(linkedList.removeTail).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList._tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList._tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList._head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList._head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('should return the value of the former head when removeTail is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.removeTail()).to.equal(5);
  });

  it('should designate a new head when new nodes are added to the head', function() {
    linkedList.addToHead(9);
    expect(linkedList._head.value).to.equal(9);
    linkedList.addToHead(8);
    expect(linkedList._head.value).to.equal(8);
  });

  // add more tests here to test the functionality of linkedList
});
