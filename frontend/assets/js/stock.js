// Dummy stock data per branch (to be replaced by backend fetch)
const stockDB = [
    { produce: "Beans", branch: "Maganjo", stock: 4800 },
    { produce: "Maize", branch: "Maganjo", stock: 900 },
    { produce: "Cow Peas", branch: "Maganjo", stock: 300 },
    { produce: "G-nuts", branch: "Matugga", stock: 2500 },
    { produce: "Soybeans", branch: "Matugga", stock: 700 },
    { produce: "Maize", branch: "Matugga", stock: 600 },
    { produce: "Beans", branch: "Matugga", stock: 1200 }
];

// Load table based on selected branch
function loadStockTable() {
    const branch = document.getElementById("branchFilter").value;
    const tbody = document.getElementById("stockBody");
    tbody.innerHTML = "";

    stockDB.forEach(item => {

        if (branch !== "All" && item.branch !== branch) return;

        let tr = document.createElement("tr");

        // Highlight low stock
        if (item.stock < 500) {
            tr.classList.add("low-stock");
        }

        tr.innerHTML = `
            <td>${item.produce}</td>
            <td>${item.branch}</td>
            <td>${item.stock} KG</td>
        `;

        tbody.appendChild(tr);
    });
}

// Search functionality
function filterStock() {
    let input = document.getElementById("searchStock").value.toLowerCase();
    let rows = document.querySelectorAll("#stockBody tr");

    rows.forEach(row => {
        let produce = row.cells[0].textContent.toLowerCase();
        if (produce.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

// Load on start
loadStockTable();
