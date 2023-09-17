function addtitle() {
    var title = document.getElementById("addtitle").value;
    var titleh2 = document.getElementById("title");
    titleh2.innerText = title;
}

function addlist() {
    var list = document.getElementById("addlist").value;
    var uol = document.getElementById("list");
    uol.innerHTML += "<li>" + list + "</li>";
}
