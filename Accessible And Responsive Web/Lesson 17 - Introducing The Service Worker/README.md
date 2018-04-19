# Lesson 17 - Introducing The Service Worker

## Concept 02 Quiz - Scoping Quiz

>Given this registration code. which page URLs will this ervice worker control?
`navigator.serviceWorker.register('/sw.js',  {scope: '/foo/'});`

- /foo/
- /foo/bar/index.html
- /foo/bar

## Concept 04 Quiz - Registering a Service Worker

The code that is added to the registerServiceWorker function is:

`IndexController.prototype._registerServiceWorker = function() {
  if (!navigator.serviceWorker) return;
  var indexController = this;
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    if (!navigator.serviceWorker.controller) {
      return;
    }
    if (reg.waiting) {
      indexController._updateReady(reg.waiting);
      return;
    }
    if (reg.installing) {
      indexController._trackInstalling(reg.installing);
      return;
    }
    reg.addEventListener('updatefound', function() {
      indexController._trackInstalling(reg.installing);
    });
  });
  // Ensure refresh is only called once.
  // This works around a bug in "force update on reload".
  var refreshing;
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
  });
};`

Go to localhost:8889 and type **registered** in the Test ID field.
You should see an animated gif with the title `Service worker successfully registered!`

## Concept 06 Quiz - Enabling Service Worker Dev Tools

This task requires you to download Chrome Canary, but this is not mandatory anymore.

## Concept 07 Quiz - Service Worker Dev Tools

Change the console.log inside sw/index.js and while using dev tools, refresh the page.

Go to localhost:8889 and type **sw-waiting** in the Test ID field.
You should see an animated gif with the title `Yey! There's a service worker waiting!`

## Concept 08 Quiz - Service Worker Dev Tools 2

Navigate to a different url that is out of the service worker's scope and then return to the original url.

You should see in the dev tools, that there is no service worker waiting.

Go to localhost:8889 and type **sw-active** in the Test ID field.
You should see an animated gif with the title `No service worker waiting! Yay!`

## Concept 11 Quiz - Hijacking Requests 1

Added the following code:
`event.respondWith(
    new Response('Hello <b class="a-winner-is-me">world</b>', {
      headers: {'Content-Type':'text/html'}
    })
  );
});`

Go to localhost:8889 and type **html-response** in the Test ID field.
You should see an animated gif with the title `Custom HTML response found! Yay!`

## Concept 13 Quiz - Hijacking Requests 2
Added the folllowing code:

`self.addEventListener('fetch', function(event) {
  if (event.request.url.endsWith('.jpg')) {
    event.respondWith(
      fetch('/imgs/dr-evil.gif')
      );
  }`

Go to localhost:8889 and type **gif-response** in the Test ID field.
You should see an animated gif with the title `Images are being intercepted!`

## Concept 15 Quiz - Hijacking Requests 3
Added the folllowing code:

`self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response.status === 404) {
          return fetch('/imgs/dr-evil.gif');
        }
        return response;
      }).catch(function() {
        return new Response("Uh oh, that totally failed!");
      })
      );
});`

Go to localhost:8889 and type **gif-404** in the Test ID field.
You should see an animated gif with the title `Yay! 404 pages get gifs!`

## Concept 17 Quiz - Install and Cache
Added the folllowing code:

`self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('wittr-static-v1').then(function(cache) {
      return cache.addAll([
               '/',
          'js/main.js',
          'css/main.css',
          'imgs/icon.png',
          'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
          'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
        ]);
    }));`

Go to localhost:8889 and type **install-cached** in the Test ID field.
You should see an animated gif with the title `Yay! The cache is ready to go!`

## Concept 18 Quiz - Cache Response
Added the folllowing code:

`self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
    );
});`

Go to localhost:8889 and type **cache-served** in the Test ID field.
You should see an animated gif with the title `Yay! Cached responses are being returned!`

## Concept 20 Quiz - Update Your CSS
Locate the *_theme.scss* file and change at the very least, the `$primary-color` variable.

Go to localhost:8889 and type **new-cache-ready** in the Test ID field.
You should see an animated gif with the title `Yay! The new cache is ready, but isn't disrupting current pages`

## Concept 21 Quiz - Update Your CSS 2
To activate the new cache, either navigate to a page outside the scope of wittr, or hard refresh using shift + f5.
Also add the following code:

`self.addEventListener('activate', function(event) {
  event.waitUntil(
    // TODO: remove the old cache
    caches.delete('wittr-static-v1');
  );
});`

And change the cache version to 2

Go to localhost:8889 and type **new-cache-used** in the Test ID field.
You should see an animated gif with the title `Yay! You safely updated the CSS!`

## Concept 23 Quiz - Adding UX
Added the following code:

`IndexController.prototype._registerServiceWorker = function() {
  if (!navigator.serviceWorker) return;
  var indexController = this;
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    if (!navigator.serviceWorker.controller) {
      return;
    }
    if (reg.waiting) {
      indexController._updateReady();
      return;
    }
    if (reg.installing) {
      indexController._trackInstalling(reg.installing);
      return;
    }
    reg.addEventListener('updatefound', function() {
      indexController._trackInstalling(reg.installing);
    });
  });
};`

And

`IndexController.prototype._trackInstalling = function(worker) {
  var indexController = this;
  worker.addEventListener('statechange', function() {
    if (worker.state == 'installed') {
      indexController._updateReady();
    }
  });
};`

Go to localhost:8889 and type **update-notify** in the Test ID field.
You should see an animated gif with the title `Yay! There are notifications!`