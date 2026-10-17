// ==========================================
// بەڕێوەبردنی ڕیکلامەکان - AdMob Plus
// ==========================================

const AD_UNIT_ID = 'ca-app-pub-9868815971759940/5406504728';
const IS_TESTING = true;

// چاوەڕوان بە هەتا ئەپڵیکەیشن ئامادە دەبێت
document.addEventListener('deviceready', async function() {
    console.log('📱 ئەپڵیکەیشن ئامادەیە - ڕیکلام بار دەکرێت...');
    
    // پشکنین بۆ ئەوەی AdMob بەردەست بێت
    if (typeof admob === 'undefined') {
        console.log('⚠️ AdMob بەردەست نییە');
        return;
    }
    
    // ڕیکلام تەنها جارێک لەم دانیشتنەدا پیشان بدرێت
    if (!shouldShowAd()) {
        return;
    }
    
    try {
        await admob.start();
        
        const interstitial = new admob.InterstitialAd({
            adUnitId: AD_UNIT_ID,
        });
        
        await interstitial.load();
        await interstitial.show();
        
        console.log('✅ ڕیکلام بە سەرکەوتوویی پیشاندرا');
        markAdAsShown();
    } catch (error) {
        console.error('❌ هەڵە لە ڕیکلام:', error);
        markAdAsShown();
    }
}, false);

// لە حاڵەتی وێبدا (بەبێ Cordova)
window.addEventListener('load', function() {
    setTimeout(function() {
        if (typeof admob === 'undefined' && shouldShowAd()) {
            console.log('🌐 دۆخی وێب - ڕیکلامی AdMob نییە');
            markAdAsShown();
        }
    }, 3000);
});
