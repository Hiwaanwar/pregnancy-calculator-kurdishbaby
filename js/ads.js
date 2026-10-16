// ==========================================
// بەڕێوەبردنی ڕیکلامەکان - AdMob
// ==========================================

// ✅ ناسنامەی یەکەی ڕیکلامەکەت
const AD_UNIT_ID = 'ca-app-pub-9868815971759940/5406504728';

// ⚠️ لە کاتی تاقیکردنەوە: بیکە true
// دوای دڵنیابوون لە کارکردنی ڕیکلام: بیکە false
const IS_TESTING = true;

// چاوەڕوان بە هەتا ئەپڵیکەیشن ئامادە دەبێت
document.addEventListener('deviceready', function() {
    console.log('📱 ئەپڵیکەیشن ئامادەیە - ڕیکلام بار دەکرێت...');
    
    if (typeof admob === 'undefined') {
        console.log('⚠️ AdMob بەردەست نییە');
        return;
    }
    
    // ڕیکلام تەنها جارێک لەم دانیشتنەدا پیشان بدرێت
    if (shouldShowAd()) {
        showInterstitialAd();
        markAdAsShown();
    }
}, false);

// فەنکشنی پیشاندانی ڕیکلام
function showInterstitialAd() {
    try {
        admob.interstitial.load({
            id: {
                android: AD_UNIT_ID,
                ios: AD_UNIT_ID
            },
            isTesting: IS_TESTING
        }).then(() => {
            return admob.interstitial.show();
        }).then(() => {
            console.log('✅ ڕیکلام بە سەرکەوتوویی پیشاندرا');
        }).catch((err) => {
            console.error('❌ هەڵە لە ڕیکلام:', err);
        });
    } catch (error) {
        console.error('❌ هەڵەی گشتی:', error);
    }
}

// لە حاڵەتی وێبدا (بەبێ Cordova)
window.addEventListener('load', function() {
    setTimeout(function() {
        if (typeof admob === 'undefined' && shouldShowAd()) {
            console.log('🌐 دۆخی وێب - ڕیکلامی AdMob نییە');
            markAdAsShown();
        }
    }, 3000);
});