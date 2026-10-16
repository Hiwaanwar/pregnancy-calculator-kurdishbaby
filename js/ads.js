// عرض الإعلان مرة واحدة فقط عند كل فتح للتطبيق
window.addEventListener('load', function() {
    if (!shouldShowAd()) {
        return; // تم عرض الإعلان في هذه الجلسة
    }

    const adModal = document.getElementById('adModal');
    if (!adModal) return;

    adModal.classList.add('active');
    markAdAsShown();

    // ===== هنا يوضع كود Google AdSense لاحقاً =====
    // مثال:
    // (adsbygoogle = window.adsbygoogle || []).push({});

    // إغلاق الإعلان تلقائياً بعد 3 ثواني
    setTimeout(function() {
        adModal.classList.remove('active');
    }, 3000);
});
