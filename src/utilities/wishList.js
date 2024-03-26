export function getStoredWishBooks() {
  const storedBooks = localStorage.getItem("wishListBooks");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
}

export function storeWishBooks(id) {
  const storedBooks = getStoredWishBooks();
  const exists = storedBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("wishListBooks", JSON.stringify(storedBooks));
  }
}
