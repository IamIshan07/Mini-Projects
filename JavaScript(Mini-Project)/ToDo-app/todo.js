let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");



btn.addEventListener("click", () => {
    let lic = document.createElement("li");
    lic.innerText = inp.value;

    let dlt = document.createElement("button");

    dlt.innerText = "delete";
    dlt.classList.add("delete");

    lic.appendChild(dlt);
    // document.querySelector("ul").append(lic);
    ul.appendChild(lic);
    inp.value = "";

})


ul.addEventListener("click", function (event) {
    // alert("clicked")
    // console.log(e.target.nodeName);
    if (event.target.nodeName == "BUTTON") {
        let listI = event.target.parentElement;
        listI.remove();
    }

})

inp.addEventListener("keydown", (event) => {
    // console.log(event.key)
    if (event.key == "Enter") {
        let lic = document.createElement("li");
        lic.innerText = inp.value;

        let dlt = document.createElement("button");

        dlt.innerText = "delete";
        dlt.classList.add("delete");

        lic.appendChild(dlt);
        // document.querySelector("ul").append(lic);
        ul.appendChild(lic);
        inp.value = "";
    }
})



///////-----------This is replaced by Event Delegation!!
// let dels = document.querySelectorAll(".delete");
// for (let dlt of dels) {
//     dlt.addEventListener("click", (e) => {
//         let parent = e.target.parentElement;
//         parent.remove();
//     })
// }

