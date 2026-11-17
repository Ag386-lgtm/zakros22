// دالة تطلع رسالة ترحيبية لما يضغط الزائر على زر "ابدأ مشروعك"
function showAlert() {
    alert("أهلاً بك! سنتواصل معك قريباً لبدء مشروعك.");
}

// كود بسيط يخلي الفورم ما يعمل ريفريش للصفحة لما يرسل
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.");
});
