'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b73ceec7e36f88012c16eb346922a211",
"assets/AssetManifest.bin.json": "b0592feda6531f45e693c27efffc55cf",
"assets/AssetManifest.json": "da6fd30936a7443861d04e7d5e4c41ec",
"assets/assets/alur-daftar.jpeg": "f0ae14228cd303a307f4bd7f7c9fca02",
"assets/assets/bodyone.png": "47101ddd192988fda751be02d9cdfe3c",
"assets/assets/bodytwo.png": "295fb5351a752479a7e8e70ff766ba9c",
"assets/assets/brosur.jpeg": "c561af533c18e2922226879bfef6284e",
"assets/assets/cert.jpg": "fc4b0b7bd2447a288bf9ae81bfeabd6a",
"assets/assets/event/event1.jpeg": "389f17f1cc26b5373667db14a0aeaf74",
"assets/assets/event/event10.jpg": "ffd451a58c5e1c0d8448139f1519cc8e",
"assets/assets/event/event11.jpg": "0b16dcd857a0836cfa1aa55f08639899",
"assets/assets/event/event12.jpg": "dcff448ece966b191cf61c2609b0360b",
"assets/assets/event/event13.jpg": "e7deb179b7c4d3c58c5f191cb5e21335",
"assets/assets/event/event14.jpeg": "06b3c15f6f904678ede3472668fd3381",
"assets/assets/event/event15.jpeg": "8c28fa05b1a8972b72cf70f94664e956",
"assets/assets/event/event16.jpeg": "0e97db50e034c380437cd063079d996d",
"assets/assets/event/event17.jpeg": "e8b1bc83b1a286fc7832e65edc8b5189",
"assets/assets/event/event18.jpeg": "5a6ee32afa7e067511073470b9024b47",
"assets/assets/event/event19.jpg": "36f285ef5c94507d3e969820e4b004c5",
"assets/assets/event/event2.jpg": "3316a9b91462c28c7ed552ae4d366a43",
"assets/assets/event/event20.jpg": "573b5831ad5efc9b226312cee4225b7a",
"assets/assets/event/event21.jpg": "f90bd1032a051f4fbfa32f5531dcd13f",
"assets/assets/event/event22.jpg": "36f285ef5c94507d3e969820e4b004c5",
"assets/assets/event/event23.jpg": "25546ed1646bc54ba815e0295af19792",
"assets/assets/event/event3.jpeg": "09636f21ce39b472c3a4096cd787a3d1",
"assets/assets/event/event4.jpg": "7f341ee459a11f4ed34315d34729565b",
"assets/assets/event/event5.jpeg": "14d2363bac9ddc4bc203550caca1af7d",
"assets/assets/event/event6.jpeg": "2b5799f4cb8500239ac5c7930bc3e905",
"assets/assets/event/event7.jpg": "562a84ee7f50f46e3f31a2c25da2f2bd",
"assets/assets/event/event8.jpg": "244321d9bdc76cdb9d89a58b6f35613b",
"assets/assets/event/event9.jpg": "ff564b1eb50368136c12a6488bd41884",
"assets/assets/images_dashboard.jpg": "83d0054597b83e37f024a63ca1cec275",
"assets/assets/images_dashboard1.jpg": "8b6d9473195b6fd17670a71d3d00b82e",
"assets/assets/image_header.png": "12860afda813fba9ddc7cd58f2e635e6",
"assets/assets/logo.png": "1da44a057a826c509c4cf066e1d04686",
"assets/assets/logo_bnsp.png": "f1ed0f0df30de641848ad7a2baf0be62",
"assets/assets/martono.png": "97e7919f3b40806a44f3f0135f903b53",
"assets/assets/pdfs/ketidakberpihakan.pdf": "d99ff06734f5dec855ba11e77a046087",
"assets/assets/pdfs/pertanggunggugatan.pdf": "919adaf84dc3040082ae7f5cf18ec70c",
"assets/assets/photo/agus.png": "11f82367e78429d23acc8a2035a52e4d",
"assets/assets/photo/anton.png": "0b9977dc3342758cfea07fd2dfcb3196",
"assets/assets/photo/dana.png": "628a12625d14186fc4f9ea601195819b",
"assets/assets/photo/dwi.png": "f1ab2c93fb812e785120869006df3e00",
"assets/assets/photo/edy.png": "b0e670f41ccafd504c412aae48893750",
"assets/assets/photo/endang.png": "cb8c433df702b77457fc595af0563049",
"assets/assets/photo/fadjrin.png": "b99da5875673c152853fbdfc02fff701",
"assets/assets/photo/hary.png": "ebde45d7805aacf518cf222d59c0adbc",
"assets/assets/photo/ichsan.png": "0016cf856705dc6ea931b192cc81a28d",
"assets/assets/photo/joni.png": "5a8e7913a2156b2db52e7faeb7b70f62",
"assets/assets/photo/jono.png": "6aa8ccd3ab0939a76789ac9916f2e9ed",
"assets/assets/photo/lina.png": "5680100ebb793ba2636551acfe6b1798",
"assets/assets/photo/marlis.png": "e1f73666966572bd0b35def4534c818b",
"assets/assets/photo/none.png": "3b1e7f5036e7e1bc14ef8596b4429305",
"assets/assets/photo/nurlina.png": "4e4ec317010eba6b25cb3a23162ec77b",
"assets/assets/photo/rahardjo.png": "4042bc92365cdc4c84dec35e730f7d3c",
"assets/assets/photo/sahid.png": "de8c0612d7f3305f063a00b5dc0c349e",
"assets/assets/photo/saipi.png": "84c3efcf0d8e7516b5cfdae33f6ebf37",
"assets/assets/photo/santoso.png": "cd33500cf4fae2070616d0fdce71ae97",
"assets/assets/photo/sodikin.png": "9ea34ed150318b1bed93bc55ce7b9a63",
"assets/assets/photo/sucahyanto.png": "9d45ad00c15e311d7fb337c3f07235f9",
"assets/assets/photo/susilo.png": "58f70d8ef2966e3b8811df08995536fe",
"assets/assets/publikasi/publikasi1.png": "a7e2219d0998aca384f6804de5113db5",
"assets/assets/publikasi/publikasi2.png": "8f4f97b1e7ec8dd8e51a31308a777151",
"assets/assets/review/review_image1.jpg": "eb842dc657eda5c007a121695b75d849",
"assets/assets/review/review_image2.png": "2bf09bfb4439069b791bb6fc06ee39b5",
"assets/assets/serti/serti1.jpeg": "5a6ee32afa7e067511073470b9024b47",
"assets/assets/serti/serti2.jpg": "7f341ee459a11f4ed34315d34729565b",
"assets/assets/serti/serti3.jpeg": "389f17f1cc26b5373667db14a0aeaf74",
"assets/assets/serti/serti4.jpg": "244321d9bdc76cdb9d89a58b6f35613b",
"assets/assets/ttd.png": "e2ad805792d5092de6727a7cac939a58",
"assets/assets/yuni.jpg": "26594728e00d338b5ef682b07cc913d0",
"assets/assets/yuyu.png": "0f36ad3fedfe040dfa6ff7f605fe5307",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6d4071042813710d1191a29014b5cb8d",
"assets/NOTICES": "362d54a22b1b1bab52442cf3c7ae1650",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "d7ff62bdf97e280c5abf9f5f43015e76",
"favicon.png": "c8553cdba5a10484d3a6428e019efd2c",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-512x512.png": "8c40dd3d1ff341f78ed7aa4bc3dfc6f9",
"icons/icon-192.png": "4aceec4a816132328b1515ddbe33f042",
"index.html": "98a32f364f3f1d31eb2a71303309c222",
"/": "98a32f364f3f1d31eb2a71303309c222",
"main.dart.js": "7e2d7589bdeeb8398cdb44b01c2b7002",
"manifest.json": "be1b7a23742ec9d56a131362c6b17b46",
"version.json": "c4ce078a90e56e40c59bd5e839388e64"};
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
