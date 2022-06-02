let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 100);
    let input1 = document.querySelector("#yourName").value.toLowerCase();
    let input2 = document.querySelector("#loveName").value.toLowerCase();


    if (input1 == "") {
        alert("Kendi adını gir")
    } else if (input2 === "") {
        alert("Onun adını gir")
    } else if (input1 == "said" && input2 == "alev") {
        document.querySelector("#demo").textContent = "100";
    } else if (input1 == "alev" && input2 == "said") {
        document.querySelector("#demo").textContent = "100";
    } else if (input1 != "" && input2 != "") {
        console.log(input1);
        console.log(input2);
        document.querySelector("#demo").textContent = randomNumber + "%";
    }



});
