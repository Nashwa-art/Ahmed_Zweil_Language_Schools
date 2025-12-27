function getResult() {
    let seat = document.getElementById("seat").value;
    document.getElementById("loading").innerText = "Loading...";
    
    fetch("https://script.google.com/macros/s/AKfycbwbdEC9QYSyud1A6rfwpug_BWz3YQwjSuNy24b_cLZmnx_u9iKsfN7kiX0O3PN_Mx3Ihw/exec?seat=" + seat)
    .then(res => res.json())
    .then(data => {
        document.getElementById("loading").innerText = "";

        if (data.error) {
            document.getElementById("name").innerText = "لا يوجد طالب بهذا الرقم";
            clearFields();
            return;
        }

        document.getElementById("name").innerText = "Name: " + data.name;
        ocument.getElementById("class").innerText = data.class;
        document.getElementById("math").innerText = data.math;
        document.getElementById("science").innerText = data.science;
        document.getElementById("arabic").innerText = data.arabic;
        document.getElementById("english").innerText = data.english;
        document.getElementById("social").innerText = data.social;
        document.getElementById("it").innerText = data.it;
        document.getElementById("religion").innerText = data.religion;
        document.getElementById("beehive").innerText = data.beehive;
        document.getElementById("quran").innerText = data.quran;
        document.getElementById("total").innerText = data.total;
        document.getElementById("language2").innerText = data.language2;
    });
}

function clearFields() {
    const fields = ["math", "science", "arabic", "english", "social", "it", "religion", "beehive", "quran", "total"];
    fields.forEach(id => document.getElementById(id).innerText = "");
}



