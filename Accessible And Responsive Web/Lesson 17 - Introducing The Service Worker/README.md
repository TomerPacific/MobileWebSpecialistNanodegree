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