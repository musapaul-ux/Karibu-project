// to be replace with the backend API
const dummyAgentSummary = {
  dailySales: 850000,
  dailyTonnage: 300,
  dailyCredit: 120000,
  branch: "Maganjo",
};

const dummyBranchStock = [
  { produce: "Beans", stock: 4800 },
  { produce: "Maize", stock: 900 },
  { produce: "Cow Peas", stock: 300 },
  { produce: "Soybeans", stock: 700 },
];

// Load summary cards
document.getElementById("agentDailySales").textContent =
  "UGX " + dummyAgentSummary.dailySales.toLocaleString();

document.getElementById("agentTonnageSold").textContent =
  dummyAgentSummary.dailyTonnage + " KG";

document.getElementById("agentCreditIssued").textContent =
  "UGX " + dummyAgentSummary.dailyCredit.toLocaleString();

document.getElementById("agentBranch").textContent = dummyAgentSummary.branch;

// Load branch stock table
// const tbody = document.getElementById("branchStockBody");

// dummyBranchStock.forEach((item) => {
//   const tr = document.createElement("tr");
//   tr.innerHTML = `
//         <td>${item.produce}</td>
//         <td>${item.stock} KG</td>
//     `;
//   tbody.appendChild(tr);
// });

const tbody = document.getElementById("branchStockBody");

tbody.innerHTML = ""; // clear

dummyBranchStock.forEach(item => {
    const tr = document.createElement("tr");

    // Determine stock status
    let statusClass = "status-good";
    let statusText = "In Stock";

    if (item.stock < 200) {
        statusClass = "status-danger";
        statusText = "Critical";
    } else if (item.stock < 800) {
        statusClass = "status-warning";
        statusText = "Low";
    }

    tr.innerHTML = `
        <td>${item.produce}</td>
        <td>${item.stock} KG</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
    `;

    tbody.appendChild(tr);
});
