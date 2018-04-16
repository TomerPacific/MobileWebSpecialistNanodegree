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
You should see an animated gif with the  title `Service worker successfully registered!`

## Concept 06 Quiz - Enabling Service Worker Dev Tools

This task requires you to download Chrome Canary, but this is not mandatory anymore.

## Concept 07 Quiz - Service Worker Dev Tools

Change the console.log inside sw/index.js and while using dev tools, refresh the page.

Go to localhost:8889 and type **sw-waiting** in the Test ID field.
You should see an animated gif with the  title `Yey! There's a service worker waiting!`

## Concept 08 Quiz - Service Worker Dev Tools 2

Navigate to a different url that is out of the service worker's scope and then return to the original url.

You should see in the dev tools, that there is no service worker waiting.

Go to localhost:8889 and type **sw-active** in the Test ID field.
You should see an animated gif with the  title `No service worker waiting! Yay!`

## Concept 11 Quiz - Hijacking Requests 1

Added the following code:
`event.respondWith(
    new Response('Hello <b class="a-winner-is-me">world</b>', {
      headers: {'Content-Type':'text/html'}
    })
  );
});`

Go to localhost:8889 and type **html-response** in the Test ID field.
You should see an animated gif with the  title `Custom HTML response found! Yay!`