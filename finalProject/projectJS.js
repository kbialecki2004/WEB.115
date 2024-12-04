// Validate Email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Generate Meal Plan
function generateMealPlan() {
    const email = document.getElementById("email").value;

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const name = document.getElementById("name").value;
    const goal = document.getElementById("goal").value;
    const rows = document.querySelectorAll("#mealPlanTable tbody tr");

    let output = `<html><head><title>${name}'s Meal Plan</title></head><body>`;
    output += `<h1>${name}'s Weekly Meal Plan</h1>`;
    output += `<p>Goal: ${goal}</p>`;
    output += `<table border="1"><tr><th>Day</th><th>Breakfast</th><th>Snack</th><th>Lunch</th><th>Snack</th><th>Dinner</th></tr>`;

    rows.forEach(row => {
        const cells = row.querySelectorAll("input");
        const day = row.cells[0].innerText;
        output += `<tr><td>${day}</td>`;
        cells.forEach(cell => {
            output += `<td>${cell.value || "N/A"}</td>`;
        });
        output += `</tr>`;
    });

    output += `</table></body></html>`;
    document.write(output);
}

// Clear Meal Plan
function clearMealPlan() {
    document.querySelectorAll("#mealPlanTable input").forEach(input => input.value = "");
}

// Print Planner
function printPlanner() {
    window.print();
}

// Download Planner
function downloadPlanner() {
    const rows = document.querySelectorAll("#mealPlanTable tbody tr");
    let csvContent = "data:text/csv;charset=utf-8,Day,Breakfast,Snack,Lunch,Snack,Dinner\n";

    rows.forEach(row => {
        const cells = row.querySelectorAll("input");
        const day = row.cells[0].innerText;
        let rowContent = `${day},`;
        cells.forEach(cell => {
            rowContent += `"${cell.value || ""}",`;
        });
        csvContent += rowContent.slice(0, -1) + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "meal_plan.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}