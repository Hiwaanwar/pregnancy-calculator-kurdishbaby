window.addEventListener('DOMContentLoaded', function() {
    // التحقق من وجود بيانات
    if (!hasPregnancyData()) {
        window.location.href = 'welcome.html';
        return;
    }

    const pregnancy = getPregnancyData();
    const data = calculatePregnancyData(pregnancy.lastPeriod, pregnancy.cycleLength);

    // اسم المستخدم
    document.getElementById('userName').textContent = pregnancy.userName || 'خوشەویست';

    // بيانات الأسبوع
    document.getElementById('currentWeek').textContent = data.currentWeek;
    document.getElementById('weekDays').textContent = `${data.currentDay} ڕۆژ`;
    document.getElementById('progressFill').style.width = `${data.progress}%`;
    document.getElementById('trimester').textContent = `سێ مانگی ${data.trimester}`;

    // بيانات الجنين
    document.getElementById('fruitEmoji').textContent = data.fruit.emoji;
    document.getElementById('fruitName').textContent = data.fruit.name;
    document.getElementById('fruitSize').textContent = data.fruit.size;

    // نصيحة اليوم
    document.getElementById('dailyTip').textContent = getTipForWeek(data.currentWeek);

    // عدادات
    document.getElementById('dueDate').textContent = formatDate(data.dueDate);
    document.getElementById('daysRemaining').textContent = 
        data.daysRemaining > 0 ? `${data.daysRemaining} ڕۆژ` : 'ئێستا!';
});

// فتح الإعدادات
function openSettings() {
    document.getElementById('settingsModal').classList.add('active');
}

function closeSettings() {
    document.getElementById('settingsModal').classList.remove('active');
}

// فتح حول
function openAbout() {
    closeSettings();
    document.getElementById('aboutModal').classList.add('active');
}

function closeAbout() {
    document.getElementById('aboutModal').classList.remove('active');
}

// إغلاق عند الضغط خارج المحتوى
document.querySelectorAll('.settings-modal, .about-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});
