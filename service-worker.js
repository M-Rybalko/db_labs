/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "14613a9947eddb13e92bd90e0930e8a8"
  },
  {
    "url": "assets/css/0.styles.6ae935a1.css",
    "revision": "8f5e346f5835a4a3bf9e03d70e9cbac6"
  },
  {
    "url": "assets/img/logo.21fcc4f4.svg",
    "revision": "21fcc4f485f8d8cd95ab594fcdc39a0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.30b887d3.js",
    "revision": "9861f1acd35b8cdae58c97c641a020c0"
  },
  {
    "url": "assets/js/11.c1b62882.js",
    "revision": "7d264acc88202f94eeaff5d87f12b22b"
  },
  {
    "url": "assets/js/12.8d8b1fb0.js",
    "revision": "58f79a33830071b6561f73362e7af24e"
  },
  {
    "url": "assets/js/13.e56cff29.js",
    "revision": "329392e254b7c42877bdd9be0419daf3"
  },
  {
    "url": "assets/js/14.e77244b9.js",
    "revision": "7e6e78346124412195991dd1ef11bfae"
  },
  {
    "url": "assets/js/15.5c650a86.js",
    "revision": "21e30b797528e6510270412867bde0ba"
  },
  {
    "url": "assets/js/16.bd6f70d5.js",
    "revision": "b1df7c986d6535a27964b2271f5dc356"
  },
  {
    "url": "assets/js/17.5c687f1b.js",
    "revision": "342e279cde951c10f24bbd834ac43334"
  },
  {
    "url": "assets/js/18.6b7494e9.js",
    "revision": "e2b6868d9c3bad89dac88adb483e0599"
  },
  {
    "url": "assets/js/19.353299d2.js",
    "revision": "b1e62bff5b919fe795a19f941f596151"
  },
  {
    "url": "assets/js/2.54ef4a48.js",
    "revision": "daa6b6ed292696bf0a2e3aa0e1b1153a"
  },
  {
    "url": "assets/js/20.49fa49a0.js",
    "revision": "cdb5e3c20631935d97ee39084b5f10e4"
  },
  {
    "url": "assets/js/21.936f4447.js",
    "revision": "60a5a1f5d2297adbfda53041883530f0"
  },
  {
    "url": "assets/js/22.5341fc89.js",
    "revision": "6834fae293f3e30992ec978b5007b1f6"
  },
  {
    "url": "assets/js/23.bc1113c9.js",
    "revision": "f16e9b6efbf0dd112c382326b13bd6d9"
  },
  {
    "url": "assets/js/24.f2299099.js",
    "revision": "ba19bdaa1b25362d47b66aee582d0126"
  },
  {
    "url": "assets/js/26.a388051f.js",
    "revision": "9052f0ce80ac768f33661d8b7dc67bcd"
  },
  {
    "url": "assets/js/3.11bf8a91.js",
    "revision": "9d2b51430537848cac2ea5124482a938"
  },
  {
    "url": "assets/js/4.be72248a.js",
    "revision": "668bc91fb4500762c33bec844d358f72"
  },
  {
    "url": "assets/js/5.01993805.js",
    "revision": "6d5176ba3b4c2fa125c6a9aeb57b6aa7"
  },
  {
    "url": "assets/js/6.c2160e41.js",
    "revision": "52d18539e934aaf4d345354d67942f01"
  },
  {
    "url": "assets/js/7.1f827184.js",
    "revision": "bdfef6f12cfe483be868002afeba6c65"
  },
  {
    "url": "assets/js/8.ecbf9340.js",
    "revision": "a323d6e61a5078e66e9a97db0719672c"
  },
  {
    "url": "assets/js/9.a50bcd73.js",
    "revision": "8d744c4bc62ac7fd91f68755a0f6239d"
  },
  {
    "url": "assets/js/app.0bddae17.js",
    "revision": "b1facb9791c407fe0b3f17c59fd1f2d3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "5554ab12051cd1e86537ca9a905fe276"
  },
  {
    "url": "design/index.html",
    "revision": "73042125678c5a6ecaf9f39fa86406ae"
  },
  {
    "url": "index.html",
    "revision": "832daacf1139576b607f05a1f8ec2b6f"
  },
  {
    "url": "intro/index.html",
    "revision": "dd0def5268db021c63b220a5df6083b0"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "cbf2e2eb76b12e8875b023de12f3244f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "162830c5819d17f2f0ccbcf98ab60892"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "11e6c4b30e3e0ad7baa2514886dee2ab"
  },
  {
    "url": "software/index.html",
    "revision": "cab46a255ed0739ebdc9b88f799be8f8"
  },
  {
    "url": "test/index.html",
    "revision": "46f9bdf399531d90a7150d432b5f9bdf"
  },
  {
    "url": "use cases/index.html",
    "revision": "a7a2c8a21a8c1c69bbe5fdc4de285088"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
