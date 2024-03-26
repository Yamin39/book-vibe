export function getStoredReadBooks() {
  const storedBooks = localStorage.getItem("readListBooks");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
}

export function storeReadBooks(id) {
  const storedBooks = getStoredReadBooks();
  const exists = storedBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("readListBooks", JSON.stringify(storedBooks));
  }
}
