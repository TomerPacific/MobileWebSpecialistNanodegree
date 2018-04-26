# Lesson 08 - IndexedDB and Caching

## Concept 03 Quiz - Getting Started with IDB

Added the following code:

`dbPromise.then(function(db) {
  var tx = db.transaction('keyval', 'readwrite');
  var keyValStore = tx.objectStore('keyval');
  keyValStore.put('cat', 'favoriteAnimal');
  return tx.complete;
}).then(function() {
  console.log('Added favoriteAnimal:cat to keyval');
});`

Go to localhost:8889 and type **idb-animal** in the Test ID field.
You should see an animated gif with the title `Yay! Your favorite animal is "cat"`