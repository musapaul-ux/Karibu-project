// Dummy stock data until backend is connected
const stockData = {
  Beans: 5000,
  Maize: 3200,
  "Cow Peas": 1800,
  "G-nuts": 2500,
  Soybeans: 3000,
};

function loadStock() {
  const selected = document.getElementById("produceName").value;
  const stockField = document.getElementById("availableStock");

  if (selected && stockData[selected] !== undefined) {
    stockField.value = stockData[selected] + " KG";
  } else {
    stockField.value = "";
  }
}

document.getElementById("creditForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    buyerName: document.getElementById("buyerName").value.trim(),
    buyerNIN: document.getElementById("buyerNIN").value.trim(),
    buyerLocation: document.getElementById("buyerLocation").value.trim(),
    buyerContact: document.getElementById("buyerContact").value.trim(),
    produce: document.getElementById("produceName").value,
    produceType: document.getElementById("produceType").value.trim(),
    tonnage: Number(document.getElementById("tonnage").value),
    dispatchDate: document.getElementById("dispatchDate").value,
    amountDue: Number(document.getElementById("amountDue").value),
    agentName: document.getElementById("agentName").value.trim(),
    dueDate: document.getElementById("dueDate").value,
  };

  // VALIDATIONS FROM PDF

  if (data.buyerName.length < 2) {
    return showMsg("Buyer name must be at least 2 characters.");
  }

  if (!/^[A-Za-z0-9]{14}$/.test(data.buyerNIN)) {
    return showMsg("Invalid NIN format! Must be 14 alphanumeric characters.");
  }

  if (data.buyerLocation.length < 2) {
    return showMsg("Location must be at least 2 characters.");
  }

  if (!/^(07|03)\d{8}$/.test(data.buyerContact)) {
    return showMsg("Invalid contact! Must be a valid UG phone number.");
  }

  if (!data.produce) {
    return showMsg("Select a produce.");
  }

  if (data.produceType.length < 2) {
    return showMsg("Produce type must be at least 2 characters.");
  }

  // CHECK STOCK
  const available = stockData[data.produce];
  if (data.tonnage > available) {
    return showMsg("Not enough stock! Available: " + available + " KG");
  }

  if (String(data.amountDue).length < 5) {
    return showMsg("Amount due must be at least 5 digits.");
  }

  if (data.agentName.length < 2) {
    return showMsg("Sales agent name must be at least 2 characters.");
  }

  // Success simulation
  showMsg("Credit sale recorded successfully!", true);

  // Reduce local stock
  stockData[data.produce] -= data.tonnage;
  loadStock();

  // TODO: POST to backend later
  // fetch("/api/credit/add", { method: "POST", body: JSON.stringify(data) })
});

function showMsg(text, success = false) {
  const msg = document.getElementById("creditMessage");
  msg.textContent = text;
  msg.style.color = success ? "green" : "red";
}
