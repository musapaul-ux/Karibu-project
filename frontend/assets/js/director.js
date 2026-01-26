// Dummy aggregated data (replace with backend API)
const summary = {
  totalSales: 9600000,
  totalTonnage: 4100,
  totalCredit: 2300000,
};

const branchData = [
  { branch: "Maganjo", sales: 5400000, tonnage: 2300, credit: 1200000 },
  { branch: "Matugga", sales: 4200000, tonnage: 1800, credit: 1100000 },
];

// Load summary cards
document.getElementById("totalSales").textContent =
  "UGX " + summary.totalSales.toLocaleString();
document.getElementById("totalTonnage").textContent =
  summary.totalTonnage.toLocaleString() + " KG";
document.getElementById("totalCredit").textContent =
  "UGX " + summary.totalCredit.toLocaleString();

// Load branch comparison table
const tbody = document.getElementById("branchTableBody");

branchData.forEach((row) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${row.branch}</td>
        <td>UGX ${row.sales.toLocaleString()} </td>
        <td>${row.tonnage.toLocaleString()} KG</td>
        <td>UGX ${row.credit.toLocaleString()} </td>
    `;
  tbody.appendChild(tr);
});
