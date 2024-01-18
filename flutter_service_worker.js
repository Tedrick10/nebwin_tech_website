'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8d359a09c5f8118492cacfc23d3cdba1",
"index.html": "fb6d97a760d0068c85d79d7e4f16d5aa",
"/": "fb6d97a760d0068c85d79d7e4f16d5aa",
"main.dart.js": "09b54c752b92d7281d1ec88947b209c5",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "69b737352d60153eb626af18002885f5",
"assets/AssetManifest.json": "effee97638336a07fcf70670d68547ec",
"assets/NOTICES": "2d87d50750570d8bcd071ce49f35153b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a785c5beb116d2559435ccbdbcea0229",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/page_09/8.jpg": "e386480828e9686c66556b66e5980762",
"assets/assets/images/page_09/4.jpg": "50804b7e5131d8d44fc4431e64eb76e4",
"assets/assets/images/page_09/5.png": "19a4ee95d3071b304146bad206eb5a3a",
"assets/assets/images/page_09/7.jpg": "433530f8bf486b6d9035788c561e3f63",
"assets/assets/images/page_09/6.jpg": "2e94cc1a0cbab1fc9a53c9a45afa74a6",
"assets/assets/images/page_09/2.jpg": "92c73bdebcc3316cfd034f652390fee5",
"assets/assets/images/page_09/3.jpg": "ace139f7ce74a9ccc9ec54b7fbbccc65",
"assets/assets/images/page_09/1.jpg": "95284896df980cb2191a356a26e87feb",
"assets/assets/images/page_07/8.jpg": "bce1698dc4be1ac2e384c38e653b235c",
"assets/assets/images/page_07/9.jpg": "f19a05b2f3ece72180a6ac7da43ed117",
"assets/assets/images/page_07/10.jpg": "c4f5e4e267d7e2c2241de890cbf30302",
"assets/assets/images/page_07/4.jpg": "fc0a58ef0c5bb0550891d80e7ff93ced",
"assets/assets/images/page_07/5.jpg": "b83dace1ab04c999f4159e75c03b3b55",
"assets/assets/images/page_07/7.jpg": "941178662d4872e12052e84d31808126",
"assets/assets/images/page_07/6.jpg": "b6d46e4c7f08d143a4f363e7901e2152",
"assets/assets/images/page_07/2.jpg": "60ebefeca16de0b20197b564cd333659",
"assets/assets/images/page_07/3.jpg": "896e4371f54f6b8ca0c22f0abdd3b143",
"assets/assets/images/page_07/1.jpg": "c788c5049f06f48101630918d3953f3f",
"assets/assets/images/page_01/background_big.png": "63e6647d7617ace25fec70de14727e14",
"assets/assets/images/page_01/background_small.png": "6cdaf112bd49413c4cccfa152702cf34",
"assets/assets/images/page_01/webpage_3d_logo_2.png": "732d065e0b3fbcdb1892058144610fa1",
"assets/assets/images/page_01/webpage_3d_logo_1.png": "710ecaa28b05df90411fd42fced5f73c",
"assets/assets/images/page_06/8.png": "7a423cecddf0b5aaca89db109163a91d",
"assets/assets/images/page_06/9.png": "a81c9addc1a8ddd57b9b089ad89d2c6c",
"assets/assets/images/page_06/14.png": "d07acf57476877861270d3f8f911c545",
"assets/assets/images/page_06/15.png": "cb63aae2140915984c8b01273095548d",
"assets/assets/images/page_06/17.png": "cb54dde4e7060be9af7bf44a4470ce6b",
"assets/assets/images/page_06/16.png": "e5e66e14455edadf2afb14ce429b20c0",
"assets/assets/images/page_06/12.png": "7a2dfcd5eac538a395cd72bb7999c80e",
"assets/assets/images/page_06/13.png": "a230c2ea747f9fb1bbb49197871c808d",
"assets/assets/images/page_06/11.png": "a843441c99415522695fcda4b318b48c",
"assets/assets/images/page_06/10.png": "8b46406d512354fb4fee2d9ca6bbd66c",
"assets/assets/images/page_06/18.png": "70f79a938fe5ce96fe2fc715a4288f5e",
"assets/assets/images/page_06/4.png": "c1182ce8ae72d0a42ed8b76454acd85e",
"assets/assets/images/page_06/5.png": "e5f8fedcb1bdc263ded2a38181886716",
"assets/assets/images/page_06/7.png": "95323341d5161f7d9794393b0fcd632a",
"assets/assets/images/page_06/6.png": "c1b0d0dcf7ba4e789118d482a3dab436",
"assets/assets/images/page_06/2.png": "65bcbfd52c9f8b51c9493c83188de45f",
"assets/assets/images/page_06/3.png": "283ce87b0bfa56bddf36539d15dbd908",
"assets/assets/images/page_06/1.png": "a496225be6feefac12d1d41992f9d2d7",
"assets/assets/images/page_08/8.jpg": "f401e47c34e3f1148f8b79809b4a1c49",
"assets/assets/images/page_08/9.jpg": "4b91a18c6e1e85da00775f79c1b6435b",
"assets/assets/images/page_08/10.jpg": "8ace96b66e7998055be7fa206d77e23a",
"assets/assets/images/page_08/4.jpg": "47459563f3b3563ada52d28b86f73d6b",
"assets/assets/images/page_08/5.jpg": "2b3c253757ea50c87ad5d35e9618e893",
"assets/assets/images/page_08/7.jpg": "4374bc1a4fcc58ae24d9cf932898de5b",
"assets/assets/images/page_08/6.jpg": "1ed9836babcb0419b65b9da6826132af",
"assets/assets/images/page_08/2.jpg": "e690d23afe886d9966b4cadbc84c502b",
"assets/assets/images/page_08/3.jpg": "414e9558e40a2bffef50754144e92715",
"assets/assets/images/page_08/1.jpg": "cce10c43d193a287887c8f00274f771c",
"assets/assets/images/under_construction/nebwin_logo_white.png": "09ac5fd9ed864f6a71ab977dfd2c60a1",
"assets/assets/images/under_construction/nebwin_logo_black.png": "6d8c4f0b080b784b2c081acfc08330b1",
"assets/assets/images/under_construction/theme_colors_image.jpg": "8c16287e02e7a4541d16c80cffb61b08",
"assets/assets/images/under_construction/nebwin_logo_with_background.jpg": "ab9fe711a50c3b4adec037707714943e",
"assets/assets/images/under_construction/nebwin_logo_only.jpg": "d9d82f969d84ecb6c3f1c65ad779cf49",
"assets/assets/images/page_10/webpage_light_background_2.png": "3f8b438542fb84945fcab2f2b4fdd2ad",
"assets/assets/images/page_10/nebwin_white_shape.png": "09ac5fd9ed864f6a71ab977dfd2c60a1",
"assets/assets/images/page_03/webpage_trust_1.png": "6106b28104ea5a72a2996d4109e94106",
"assets/assets/images/page_03/webpage_trust_2.png": "11c79c0e497cd873a2fd10d71b61e1f3",
"assets/assets/images/page_03/social_media_design.png": "f54ea13fa4c1c23fcc68f6bdee3ac5fd",
"assets/assets/images/page_03/media_buying_campaign.png": "7ab7c9c8ed7d61852e7cc67eb3db6bfd",
"assets/assets/images/page_03/marketing_campaign.png": "7a5bdb01d0f1fe7155468860f6b489b2",
"assets/assets/images/page_03/happy_client.png": "dd4585b726b31d0bf0757e412ccd7027",
"assets/assets/images/page_03/logo.png": "dca4282d0becaf06284d730c0c150b06",
"assets/assets/images/page_03/webpage_handshake.png": "915b38af88aa8c975f7b805096a8f6df",
"assets/assets/images/page_04/webpage_light_background3.png": "c85170350e71677b5fb1a5f69136bde2",
"assets/assets/images/page_02/webpage_hands.png": "fd05dda6c2e969f92eddb0cd41239cdd",
"assets/assets/images/page_02/pencil.png": "951a900551a3a3f1b0d587f979a12796",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
