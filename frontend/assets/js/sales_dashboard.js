// Replace later with backend API
const dummyAgentSummary = {
    dailySales: 850000,
    dailyTonnage: 300,
    dailyCredit: 120000,
    branch: "Maganjo"
};

const dummyBranchStock = [
    { produce: "Beans", stock: 4800 },
    { produce: "Maize", stock: 900 },
    { produce: "Cow Peas", stock: 300 },
    { produce: "Soybeans", stock: 700 }
];

// Load summary cards
document.getElementById("agentDailySales").textContent =
    dummyAgentSummary.dailySales.toLocaleString() + " UGX";

document.getElementById("agentTonnageSold").textContent =
    dummyAgentSummary.dailyTonnage + " KG";

document.getElementById("agentCreditIssued").textContent =
    dummyAgentSummary.dailyCredit.toLocaleString() + " UGX";

document.getElementById("agentBranch").textContent =
    dummyAgentSummary.branch;

// Load branch stock table
const tbody = document.getElementById("branchStockBody");

dummyBranchStock.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${item.produce}</td>
        <td>${item.stock} KG</td>
    `;
    tbody.appendChild(tr);
});
