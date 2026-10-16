// قاعدة بيانات حجم الجنين حسب الأسبوع (بالكردية)
export const babySizeByWeek = {
  4:  { emoji: '🌱', name: 'تۆو', size: '0.1 سم' },
  5:  { emoji: '🍎', name: 'تۆوی سێو', size: '0.2 سم' },
  6:  { emoji: '🫐', name: 'توو', size: '0.5 سم' },
  7:  { emoji: '🫘', name: 'فاسۆلیا', size: '1 سم' },
  8:  { emoji: '🍇', name: 'ترێ', size: '1.6 سم' },
  9:  { emoji: '🍒', name: 'گیلاس', size: '2.3 سم' },
  10: { emoji: '🍓', name: 'فڕاولە', size: '3.1 سم' },
  11: { emoji: '🍋', name: 'لێمۆ', size: '4.1 سم' },
  12: { emoji: '🍑', name: 'قەیسی', size: '5.4 سم' },
  13: { emoji: '🍋‍🟩', name: 'لێمۆی سەوز', size: '7.4 سم' },
  14: { emoji: '🍎', name: 'سێو', size: '8.7 سم' },
  15: { emoji: '🍊', name: 'پرتەقاڵ', size: '10.1 سم' },
  16: { emoji: '🥑', name: 'ئەڤۆکادۆ', size: '11.6 سم' },
  17: { emoji: '🍐', name: 'هەرمێ', size: '13 سم' },
  18: { emoji: '🍠', name: 'پەتاتەی شیرین', size: '14.2 سم' },
  19: { emoji: '🥭', name: 'مانگۆ', size: '15.3 سم' },
  20: { emoji: '🍌', name: 'مۆز', size: '25.6 سم' },
  21: { emoji: '🥕', name: 'گێزەر', size: '26.7 سم' },
  22: { emoji: '🥥', name: 'گوێزی هیندی', size: '27.8 سم' },
  23: { emoji: '🥭', name: 'مانگۆی گەورە', size: '28.9 سم' },
  24: { emoji: '🌽', name: 'گەنمەشامی', size: '30 سم' },
  25: { emoji: '🥬', name: 'کەهەو', size: '34.6 سم' },
  26: { emoji: '🥦', name: 'برۆکلی', size: '35.6 سم' },
  27: { emoji: '🥒', name: 'خەیار', size: '36.6 سم' },
  28: { emoji: '🍆', name: 'باینجان', size: '37.6 سم' },
  29: { emoji: '🎃', name: 'کەدو', size: '38.6 سم' },
  30: { emoji: '🥬', name: 'کەهەوی گەورە', size: '39.9 سم' },
  31: { emoji: '🥥', name: 'گوێز', size: '41.1 سم' },
  32: { emoji: '🥬', name: 'سەلکی', size: '42.4 سم' },
  33: { emoji: '🍍', name: 'ئەناناس', size: '43.7 سم' },
  34: { emoji: '🍈', name: 'کاڵەک', size: '45 سم' },
  35: { emoji: '🍯', name: 'شەمامە', size: '46.2 سم' },
  36: { emoji: '🥬', name: 'خەس', size: '47.4 سم' },
  37: { emoji: '🥬', name: 'سەوزەی کێوی', size: '48.6 سم' },
  38: { emoji: '🥬', name: 'پۆرە', size: '49.8 سم' },
  39: { emoji: '🍉', name: 'شەوتی', size: '50.7 سم' },
  40: { emoji: '🎃', name: 'کەدو', size: '51.2 سم' }
};

// حساب جميع بيانات الحمل
function calculatePregnancyData(lastPeriodStr, cycleLength = 28) {
  const lastPeriod = new Date(lastPeriodStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  lastPeriod.setHours(0, 0, 0, 0);

  // تعديل حسب طول الدورة
  const cycleAdjustment = cycleLength - 28;

  // تاريخ الولادة المتوقع
  const dueDate = new Date(lastPeriod);
  dueDate.setDate(dueDate.getDate() + 280 + cycleAdjustment);

  // الأيام المنقضية
  const daysPassed = Math.floor((today - lastPeriod) / (1000 * 60 * 60 * 24));

  // الأسبوع الحالي
  const currentWeek = Math.max(1, Math.floor(daysPassed / 7));
  const currentDay = daysPassed % 7;

  // الأيام المتبقية
  const daysRemaining = Math.max(0, Math.floor((dueDate - today) / (1000 * 60 * 60 * 24)));

  // نسبة التقدم
  const progress = Math.min(100, Math.max(0, (daysPassed / 280) * 100));

  // الثلث (Trimester) بالكردية
  let trimester;
  if (currentWeek < 13) {
    trimester = 'یەکەم';
  } else if (currentWeek < 27) {
    trimester = 'دووەم';
  } else {
    trimester = 'سێیەم';
  }

  // حجم الجنين
  let fruit = babySizeByWeek[currentWeek];
  if (!fruit) {
    if (currentWeek < 4) fruit = babySizeByWeek[4];
    else fruit = babySizeByWeek[40];
  }

  return {
    currentWeek,
    currentDay,
    daysPassed,
    daysRemaining,
    dueDate,
    progress,
    trimester,
    fruit
  };
}

// تنسيق التاريخ
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}
