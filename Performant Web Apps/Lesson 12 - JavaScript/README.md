
# Lesson 12 - JavaScript

## Concept 03 Quiz - Optimizing JS for Animations

> You have 10ms to prepare every frame. How do you make sure JS is out of the way as much as possible?

`Execute JS as early as possible every frame`

## Concept 06 Quiz - Long Running JS

> Analyze the site in the instructor notes. Which function takes longer to run?

`onSortOne`

## Concept 07 Quiz - Web Workers

In order to fix the jank in the code, it was required to remove the main code from image-apps.js to worker.js. It was also necessary to create a worker.js instance inside image-apps.js in order to use the code that was removed.

In order to fix the performance issue, it was necessary to remove the creation of the manipulation method out of the for loop inside imageManips.js.

## Concept 09 Quiz - A Snappier QR Code App Part 1

Replacing setInterval in two places in main.js :

`setInterval(captureFrame.bind(self), 4); -> requestAnimationFrame(captureFrame.bind(self));`

And also adding the call to requestAnimationFrame at the end of the captureFrame method

## Concept 10 Quiz - A Snappier QR Code App Part 2

- Created a Worker instance in main.js inside QRCodeManager
- Removed scripts found in qrworker.js from index.html
- Added postMessage calls inside qrworker.js
- Added the following code inside detectQRCode :

` qrWorker.postMessage(imageData);
qrWorker.onmessage = function(result) {
        var url = result.data;
        if (url !== undefined) {
          self.currentUrl = url;
        }
        callback(url);
      };
 qrWorker.onerror = function(error) {
        function WorkerException(message) {
          this.name = "WorkerException";
          this.message = message;
        };
        throw new WorkerException("Decoder Error");
        callback(undefined);
      };`

