// Dummy stock data for now – will later load from backend
const stockData = {
    "Beans": 5000,
    "Maize": 3200,
    "Cow Peas": 1800,
    "G-nuts": 2500,
    "Soybeans": 3000
};

// Update stock display when produce changes
function loadStock() {
    const selected = document.getElementById("produceName").value;
    const stockField = document.getElementById("availableStock");

    if (selected && stockData[selected] !== undefined) {
        stockField.value = stockData[selected] + " KG";
    } else {
        stockField.value = "";
    }
}

document.getElementById("salesForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const produce = document.getElementById("produceName").value;
    const tonnageSold = Number(document.getElementById("tonnageSold").value);
    const amountPaid = Number(document.getElementById("amountPaid").value);
    const buyerName = document.getElementById("buyerName").value.trim();
    const agentName = document.getElementById("salesAgent").value.trim();

    // PDF VALIDATIONS
    if (!produce) return showMessage("Please select a produce.");
    if (tonnageSold <= 0) return showMessage("Tonnage must be greater than zero.");
    if (String(amountPaid).length < 5) return showMessage("Amount must be at least 5 digits.");
    if (buyerName.length < 2) return showMessage("Buyer name must be at least 2 characters.");
    if (agentName.length < 2) return showMessage("Sales agent name must be at least 2 characters.");

    // STOCK CHECK
    const available = stockData[produce];
    if (tonnageSold > available) {
        return showMessage("Not enough stock! Available: " + available + " KG");
    }

    // Success Simulation
    showMessage("Sale recorded successfully!", true);

    // Reduce stock locally (for simulation)
    stockData[produce] -= tonnageSold;
    loadStock();

    // TODO: Send to backend API later
    // fetch("/api/sales/add", { method: "POST", body: JSON.stringify(data) })
});

function showMessage(text, success = false) {
    const msg = document.getElementById("salesMessage");
    msg.textContent = text;
    msg.style.color = success ? "green" : "red";
}
