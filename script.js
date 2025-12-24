function getResult() {
    let seat = document.getElementById("seat").value;

    fetch("https://script.google.com/macros/s/AKfycbyuHqno-9AdTVy8GmOUXQD3M6qxFOTizTT7rv1tzR4MGSr2gypCoNK3UQ-jeFh0Buxq3w/exec?seat=" + seat)
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
            document.getElementById("G/F").innerText = "";
            return;
        }

        document.getElementById("name").innerText = "Name : " + data.name;
        document.getElementById("math").innerText = "Maths : " + data.math;
        document.getElementById("science").innerText = "Science : " + data.science;
        document.getElementById("arabic").innerText = "Arabic : " + data.arabic;
        document.getElementById("english").innerText = "English : " + data.english;
        document.getElementById("social").innerText = "Social Studies : " + data.social;
        document.getElementById("total").innerText = "Total: " + data.total;
        document.getElementById("it").innerText = "IT : " + data.it;
        document.getElementById("religion").innerText = "Religion : " + data.religion;
        document.getElementById("beehive").innerText = "Beehive : " + data.beehive;
        document.getElementById("quran").innerText = "Quran : " + data.quran;
        document.getElementById("G/F").innerText = "G/F : " + data.language2;
        
    });
}
