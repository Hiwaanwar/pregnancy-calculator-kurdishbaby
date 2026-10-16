// إذا المستخدم جاي من الإعدادات (تعديل)، نملأ الحقول
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const isEdit = urlParams.get('edit') === 'true';
    
    if (isEdit && hasPregnancyData()) {
        const data = getPregnancyData();
        document.getElementById('userName').value = data.userName || '';
        document.getElementById('lastPeriod').value = data.lastPeriod || '';
        document.getElementById('cycleLength').value = data.cycleLength || 28;
        
        // تغيير نص الزر
        document.querySelector('.btn-save').textContent = 'نوێکردنەوە 💾';
        document.querySelector('.setup-header h1').textContent = 'دەستکاری زانیاریەکان';
    }
});

document.getElementById('setupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userName = document.getElementById('userName').value.trim();
    const lastPeriod = document.getElementById('lastPeriod').value;
    const cycleLength = parseInt(document.getElementById('cycleLength').value);

    // التحقق من صحة التاريخ
    const lastPeriodDate = new Date(lastPeriod);
    const today = new Date();
    
    if (lastPeriodDate > today) {
        alert('ڕێکەوتی دوایین خول نابێت دوای ئەمڕۆ بێت');
        return;
    }

    // حفظ البيانات
    const pregnancyData = {
        userName: userName,
        lastPeriod: lastPeriod,
        cycleLength: cycleLength,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    savePregnancyData(pregnancyData);

    // الانتقال للصفحة الرئيسية
    window.location.href = 'index.html';
});
