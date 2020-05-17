class Collection {
  constructor(selectorType, selector) {
    switch (selectorType) {
      case 'css':
        this.collection = element.all(by.css(selector));
        break;
      case 'xpath':
        this.collection = element.all(by.xpath(selector));
        break;
      case 'id':
        this.collection = element.all(by.id(selector));
        break;
      default:
        throw new Error(`Selector type [${selectorType}] is not recognized. Try to use one of the following selector types: css, xpath, id.`);
    }
  }
  async countItems() {
    const collectionCount = await this.collection.count();
    return collectionCount;
  }
  getElementByIndex(elementIndex) {
    return this.collection.get(elementIndex);
  }
}

module.exports = Collection;
