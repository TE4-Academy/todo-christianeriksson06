// JavaScript Todo Basics - Har buggar som du behöver fixa!

// STEG 1: Todo-array (fungerar bra)
let todoArray = ["Handla mat", "Städa rummet", "Göra läxor"];



//localStorage.setItem("namn", "Alice");
//let person = localStorage.getItem("namn");
//console.log(person);

function sparaTodos() {
  localStorage.setItem("todos", JSON.stringify(todoArray));
}

// STEG 2: Visa todos-funktion (har problem!)
function visaTodos() {
  const listaElement = document.getElementById("todo-lista");
  let htmlString = "<h3>Mina Todos:</h3>";

  for (let i = 0; i < todoArray.length; i++) {
    htmlString += '<div class="todo-item">';
    htmlString += "<span>" + todoArray[i] + "</span>";
    htmlString += '<button onclick="taBortTodo(' + i + ')">Ta bort</button>';
    htmlString += "</div>";
    htmlString += '<input type="checkbox" onchange="toggleTodo(' + i + ')">';
  }

  // PROBLEM: Vi uppdaterar aldrig HTML:en!
  listaElement.innerHTML = htmlString;
}

function uppdateraStats() {
  const totalElement = document.getElementById("total-count");
  totalElement.textContent = todoArray.length;
}

// STEG 3: Lägg till todo (har flera problem!)
function laggTillTodo() {
  const inputElement = document.getElementById("todo-input");
  const nyTodo = inputElement.value.trim();

  if (nyTodo === "") {
    alert("Du måste skriva något!");
    return;
  }
  if (todoArray.includes(nyTodo)) {
    alert("Denna todo finns redan!");
    inputElement.focus();
    return;
  }

  // PROBLEM: Vad händer om input är tom?
  todoArray.push(nyTodo);

  // PROBLEM: Listan uppdateras inte!
  sparaTodos();
  visaTodos();

  // PROBLEM: Input rensas inte!
  inputElement.value = "";

  // PROBLEM: Statistik uppdateras inte!
  uppdateraStats();
  uppdateraDebug();
}

function toggleTodo(index) {

}

// STEG 4: Ta bort todo (saknas helt!)
// TODO: Skriv denna funktion
function taBortTodo(index) {
  todoArray.splice(index, 1);
  sparaTodos();
  visaTodos();
  uppdateraStats();
  uppdateraDebug();
}

function rensaAllaTodos() {
  todoArray = [];
  sparaTodos();
  visaTodos();
  uppdateraStats();
  uppdateraDebug();
}

// STEG 5: Statistik-funktion (saknas!)
// TODO: Skriv denna funktion
// function uppdateraStats() {
//     // Uppdatera total-count
//     // Kanske fler statistik senare?
// }

// STEG 6: Debug-funktion (fungerar)
function uppdateraDebug() {
  document.getElementById("debug-length").textContent = todoArray.length;
  document.getElementById("debug-last").textContent =
    todoArray[todoArray.length - 1] || "Ingen";
  document.getElementById("debug-array").textContent =
    JSON.stringify(todoArray);
}

// STEG 7: Event listeners (bara en fungerar!)
document.getElementById("add-btn").addEventListener("click", laggTillTodo);
document.getElementById("clear-btn").addEventListener("click", rensaAllaTodos);
document.getElementById("todo-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      laggTillTodo();
    }
  });

let sparadeTodos = localStorage.getItem("todos");
if (sparadeTodos) {
  todoArray = JSON.parse(sparadeTodos);
}

// STEG 8: Initiera appen (stora problem!)
// PROBLEM: Inget händer när sidan laddas!
sparaTodos();
visaTodos();
uppdateraStats();
uppdateraDebug();

// TESTOMRÅDE
console.log("Todo app laddad!");
console.log("PROBLEM: Listan visas inte!");
console.log('PROBLEM: "Lägg till" fungerar inte ordentligt!');
console.log("PROBLEM: Inga delete-knappar fungerar!");
console.log("Öppna Console och testa: todoArray");
