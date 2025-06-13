// firebase.js
async function getStudentData(id) {
  // ملاحظة: يجب إعداد Firebase SDK في index.html وتكوين الاتصال في config.js
  // هذا مجرد نموذج تجريبي
  if (id === "123") {
    return {
      name: "أحمد من Firebase",
      grades: {
        "الرياضيات": 96,
        "اللغة العربية": 91,
        "العلوم": 87
      }
    };
  } else {
    throw new Error("الطالب غير موجود في Firebase");
  }
}
