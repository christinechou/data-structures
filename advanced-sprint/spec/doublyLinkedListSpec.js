describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have node properties of previous and next and value', function() {
    doublyLinkedList.addToTail('a');
    expect(doublyLinkedList.head).to.have.property('previous');
    expect(doublyLinkedList.head).to.have.property('next');
    expect(doublyLinkedList.head.next).to.equal(null);
    expect(doublyLinkedList.head.previous).to.equal(null);
  });

  it('should have methods named "addToHead", "addToTail", "removeHead", "removeTail", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(7);
    expect(doublyLinkedList.tail.value).to.equal(7);
    expect(doublyLinkedList.tail.previous.value).to.equal(4);
    expect(doublyLinkedList.tail.previous.next.value).to.equal(7);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    var previous = doublyLinkedList.tail.previous;
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(previous.next).to.equal(null);
  });

  it('should add head to the list when addToHead is called', function() {
    doublyLinkedList.addToTail(5);
    var previousHead = doublyLinkedList.head;
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    expect(previousHead.previous).to.equal(doublyLinkedList.head);
  });



  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
});
