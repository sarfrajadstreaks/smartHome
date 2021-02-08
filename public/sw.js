let cacheData="appV1";

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).
        then((cache)=>{
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/bundle.js',
                '/static/js/vendors~main.chunk.js',
                '/logo192.png',
                '/index.html',
                '/'
            ])
        })
    )
})
this.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((res)=>{
            if(res){
                return res;
            }
        })
    )
})