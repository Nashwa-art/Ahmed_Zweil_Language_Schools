function getResult() {
    let seat = document.getElementById("seat").value;

    fetch("https://script.google.com/macros/s/AKfycbwW1U7TqPm5YCC9C0v8gvlROw9rZhPvuK0wMy03mrgt7LINMfPwl5bQHj6thXZ55bq42w/exec?seat=" + seat)
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            document.getElementById("name").innerText = "لا يوجد طالب بهذا الرقم";
            document.getElementById("math").innerText = "";
            document.getElementById("science").innerText = "";
            document.getElementById("arabic").innerText = "";
            document.getElementById("english").innerText = "";
            document.getElementById("social").innerText = "";
            document.getElementById("it").innerText = "";
            document.getElementById("religion").innerText = "";
            document.getElementById("beehive").innerText = "";
            document.getElementById("quran").innerText = "";
            document.getElementById("total").innerText = "";
            return;
        }

        document.getElementById("name").innerText = "الاسم : " + data.name;
        document.getElementById("math").innerText = "رياضيات : " + data.math;
        document.getElementById("science").innerText = "علوم : " + data.science;
        document.getElementById("arabic").innerText = "عربي : " + data.arabic;
        document.getElementById("english").innerText = "إنجليزي : " + data.english;
        document.getElementById("social").innerText = "دراسات : " + data.social;
        document.getElementById("it").innerText = "حاسب : " + data.it;
        document.getElementById("religion").innerText = "دين : " + data.religion;
        document.getElementById("beehive").innerText = "نحلة : " + data.beehive;
        document.getElementById("quran").innerText = "قرآن : " + data.quran;
        document.getElementById("total").innerText = "المجموع : " + data.total;
    });
}
