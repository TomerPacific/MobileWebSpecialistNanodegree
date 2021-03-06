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

Added the following code in the onSocketMessage method :

`var tx = db.transaction('wittrs', 'readwrite');
    var store = tx.objectStore('wittrs');
    messages.forEach(function(message) {
      store.put(message);
    });`

Go to localhost:8889 and type **idb-store** in the Test ID field.
You should see an animated gif with the title `The database is set up and populated!`

## Concept 07 Quiz - Using IDB 2

Added the following code in indexController.js :

`var index = db.transaction('wittrs').objectStore('wittrs').index('by-date');
    return index.getAll().then(function(messages) {
        indexController._postsView.addPosts(messages.reverse());
    }); `

Upgraded the version of the cache to be 5 in sw/index.js

Go to localhost:8889 and type **idb-show** in the Test ID field.
You should see an animated gif with the title `Page populated from IDB!`

## Concept 08 Quiz - Cleaning IDB

Added the following code to the onSocketMessage method :

`store.index('by-date').openCursor(null, 'prev').then(function(cursor) {
      return cursor.advance(30);
    }).then(function deleteRest(cursor) {
      if (!cursor) return;
      cursor.delete();
      return cursor.continue().then(deleteRest);
    })`

Upgraded the version of the cache to be 6 in sw/index.js

Go to localhost:8889 and type **idb-clean** in the Test ID field.
You should see an animated gif with the title `Looks like the database is being cleaned!`

## Concept 09 Quiz - Cache Photos Quiz

Added the following code to the servePhotos method :

`return caches.open(contentImgsCache).then(function(cache) {
    return cache.match(storageUrl).then(function(response) {
      if (response) return response;
      return fetch(request).then(function(networkResponse) {
        cache.put(storageUrl, networkResponse.clone());
        return networkResponse;
      });
    });
  });`

Go to localhost:8889 and type **cache-photos** in the Test ID field.
You should see an animated gif with the title `Photos are being cached and served correctly!`

## Concept 12 Quiz - Cleaning Photo Cache Quiz

Added the following code to the cleanImageCache method :

`var imagesNeeded = [];
    var tx = db.transaction('wittrs');
    return tx.objectStore('wittrs').getAll().then(function(messages) {
      messages.forEach(function(message) {
        if (message.photo) {
          imagesNeeded.push(message.photo);
        }
      });
      return caches.open('wittr-content-imgs');
    }).then(function(cache) {
      return cache.keys().then(function(requests) {
        requests.forEach(function(request) {
          var url = new URL(request.url);
          if (!imagesNeeded.includes(url.pathname)) {
            cache.delete(request);
          }
        });
      });
    });
  });`

Go to localhost:8889 and type **cache-clean** in the Test ID field.

## Concept 13 Quiz - Caching Avatars

Added the following code inside index.js :

`if (requestUrl.pathname.startsWith('/avatars/')) {
      event.respondWith(serveAvatar(event.request));
      return;
    }`

Added the following code inside the serveAvatar method :
`return caches.open(contentImgsCache).then(function(cache) {
    return cache.match(storageUrl).then(function(response) {
      var networkFetch = fetch(request).then(function(networkResponse) {
        cache.put(storageUrl, networkResponse.clone());
        return networkResponse;
      });
      return response || networkFetch;
    });
  });`

Go to localhost:8889 and type **cache-avatars** in the Test ID field.