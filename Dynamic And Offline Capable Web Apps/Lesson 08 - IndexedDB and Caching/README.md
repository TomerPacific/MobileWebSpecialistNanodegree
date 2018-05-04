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

## Concept 04 Quiz - More IDB

Added the following code:

`var dbPromise = idb.open('test-db', 4, function(upgradeDb) {
  switch(upgradeDb.oldVersion) {
    case 0:
      var keyValStore = upgradeDb.createObjectStore('keyval');
      keyValStore.put("world", "hello");
    case 1:
      upgradeDb.createObjectStore('people', { keyPath: 'name' });
    case 2:
      var peopleStore = upgradeDb.transaction.objectStore('people');
      peopleStore.createIndex('animal', 'favoriteAnimal');
    case 3:
      var peopleStore = upgradeDb.transaction.objectStore('people');
      peopleStore.createIndex('age', 'age');
  }
});`

`dbPromise.then(function(db) {
  var tx = db.transaction('people');
  var peopleStore = tx.objectStore('people');
  var ageIndex = peopleStore.index('age');
  return ageIndex.getAll();
}).then(function(people) {
  console.log('People by age:', people);
});`

Go to localhost:8889 and type **idb-age** in the Test ID field.
You should see an animated gif with the title `Yay! The age index is working`

## Concept 06 Quiz - Using IDB Cache

Added the following code in the openDatabase method :

`return idb.open('wittr', 1, function(upgradeDb) {
    var store = upgradeDb.createObjectStore('wittrs', {
      keyPath: 'id'
    });
    store.createIndex('by-date', 'time');
  });`

Added the following code in the _onSocketMessage method :
`var tx = db.transaction('wittrs', 'readwrite');
    var store = tx.objectStore('wittrs');
    messages.forEach(function(message) {
      store.put(message);
    });`
Go to localhost:8889 and type **idb-store** in the Test ID field.
You should see an animated gif with the title `The database is set up and populated!`