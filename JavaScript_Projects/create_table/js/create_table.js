let rows = document.getElementById("rows");
let cols = document.getElementById("cols");
let btn = document.querySelector("button");

btn.addEventListener("click", createTable);

function createTable() {
  let table = document.createElement("table");

  if (rows.value !== "" && cols.value !== "") {
    for (let i = 0; i < +rows.value; i++) {
      let tr = document.createElement("tr");
      table.appendChild(tr);

      for (let j = 0; j < +cols.value; j++) {
        let td = document.createElement("td");
        let tdText = document.createTextNode(`Row ${i + 1}`);
        td.appendChild(tdText);
        tr.appendChild(td);
      }
    }
    document.body.appendChild(table);

    rows.value = "";
    cols.value = "";
  }
}
