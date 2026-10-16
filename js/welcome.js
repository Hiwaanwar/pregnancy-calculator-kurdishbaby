function startApp() {
    // تحقق إذا المستخدم عنده بيانات محفوظة من قبل
    if (hasPregnancyData()) {
        // عنده بيانات → روح للصفحة الرئيسية
        window.location.href = 'index.html';
    } else {
        // ما عنده → روح لصفحة الإدخال
        window.location.href = 'setup.html';
    }
}

// إذا المستخدم رجع لهذه الصفحة وعنده بيانات، دزه مباشرة
window.addEventListener('DOMContentLoaded', function() {
    if (hasPregnancyData()) {
        window.location.href = 'index.html';
    }
});
