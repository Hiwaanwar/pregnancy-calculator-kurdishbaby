const STORAGE_KEY = 'pregnancyData';
const SESSION_AD_KEY = 'adShownThisSession';

// حفظ بيانات الحمل
function savePregnancyData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error saving data:', e);
        return false;
    }
}

// قراءة بيانات الحمل
function getPregnancyData() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Error reading data:', e);
        return null;
    }
}

// التحقق من وجود بيانات
function hasPregnancyData() {
    const data = getPregnancyData();
    return data !== null && data.lastPeriod;
}

// حذف البيانات
function clearPregnancyData() {
    localStorage.removeItem(STORAGE_KEY);
}

// ===== إدارة الإعلان =====

// هل يجب عرض الإعلان؟
function shouldShowAd() {
    return sessionStorage.getItem(SESSION_AD_KEY) !== 'true';
}

// تسجيل أن الإعلان عُرض
function markAdAsShown() {
    sessionStorage.setItem(SESSION_AD_KEY, 'true');
}
