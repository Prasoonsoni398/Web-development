const form = document.getElementById("transactionForm");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const type = document.getElementById("type");

const transactionList = document.getElementById("transactionList");

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");

let transactions =
  JSON.parse(localStorage.getItem("transactions")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const transaction = {
    id: Date.now(),
    description: description.value,
    amount: Number(amount.value),
    type: type.value,
  };

  transactions.push(transaction);

  saveData();
  displayTransactions();
  updateSummary();

  form.reset();
});

function displayTransactions() {
  transactionList.innerHTML = "";

  transactions.forEach((item) => {
    const li = document.createElement("li");

    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      <div>
        <strong>${item.description}</strong>
        <br>
        <small class="${
          item.type === "income"
            ? "text-success"
            : "text-danger"
        }">
          ${item.type === "income" ? "+" : "-"} ₹${item.amount}
        </small>
      </div>

      <button
        class="btn btn-sm btn-danger"
        onclick="deleteTransaction(${item.id})"
      >
        <i class="bi bi-trash"></i>
      </button>
    `;

    transactionList.appendChild(li);
  });
}

function deleteTransaction(id) {
  transactions = transactions.filter(
    (item) => item.id !== id
  );

  saveData();
  displayTransactions();
  updateSummary();
}

function updateSummary() {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = income - expense;

  incomeEl.innerText = `₹${income}`;
  expenseEl.innerText = `₹${expense}`;
  balanceEl.innerText = `₹${balance}`;
}

function saveData() {
  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
}

displayTransactions();
updateSummary();