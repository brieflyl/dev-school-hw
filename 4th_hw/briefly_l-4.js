class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;

    if (pageIndex < this.pageCount() - 1) {
      return this.itemsPerPage;
    } else if (pageIndex === this.pageCount() - 1) {
      if (this.itemCount() % this.itemsPerPage !== 0) {
        return this.itemCount() % this.itemsPerPage;
      } else {
        return this.itemsPerPage;
      }
    }
  }
  pageIndex(itemIndex) {
    if(itemIndex < 0 || itemIndex >= this.itemCount()) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
