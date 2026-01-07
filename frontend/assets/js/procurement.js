document
  .getElementById("procurementForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      produceName: document.getElementById("produceName").value.trim(),
      produceType: document.getElementById("produceType").value.trim(),
      tonnage: Number(document.getElementById("tonnage").value),
      cost: Number(document.getElementById("cost").value),
      dealerName: document.getElementById("dealerName").value.trim(),
      dealerContact: document.getElementById("dealerContact").value.trim(),
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      branch: document.getElementById("branch").value,
      sellingPrice: Number(document.getElementById("sellingPrice").value),
    };

    // Basic validation rules as per the requirements of the karibu grocceries limited.
    if (data.produceType.length < 2) {
      return showMessage("Produce type must be at least 2 characters.");
    }

    if (String(data.tonnage).length < 3) {
      return showMessage("Tonnage must be at least 3 digits.");
    }

    if (String(data.cost).length < 5) {
      return showMessage("Cost must be at least 5 digits.");
    }

    if (data.dealerName.length < 2) {
      return showMessage("Dealer name must be at least 2 characters.");
    }

    if (!/^(07|03)\d{8}$/.test(data.dealerContact)) {
      return showMessage("Enter a valid Ugandan phone number.");
    }

    // Success simulation
    showMessage("Procurement saved successfully!", true);

    // TODO: send data to backend via fetch()
    // fetch("/api/procurement/add", { method: "POST", body: JSON.stringify(data) })
  });

function showMessage(text, success = false) {
  const msg = document.getElementById("procMessage");
  msg.textContent = text;
  msg.style.color = success ? "green" : "red";
}
