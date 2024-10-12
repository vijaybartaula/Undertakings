// Mock Data for Historical Gold Prices
const goldPrices = [
    { date: '2020-01-01', price: 1500 },
    { date: '2021-01-01', price: 1900 },
    { date: '2022-01-01', price: 1750 },
    { date: '2023-01-01', price: 1950 },
    { date: '2024-01-01', price: 2650 },
];

// Function to render chart using Chart.js
function renderChart() {
    const ctx = document.getElementById('goldPriceChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: goldPrices.map(item => item.date),
            datasets: [{
                label: 'Gold Price (USD/ounce)',
                data: goldPrices.map(item => item.price),
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                borderColor: 'rgba(212, 175, 55, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

// Simple Prediction Function (Linear Growth Model)
function predictPrice() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const timeDiff = (endDate - startDate) / (1000 * 3600 * 24); // Difference in days
    
    if (isNaN(timeDiff) || timeDiff <= 0) {
        document.getElementById('priceOutput').textContent = "Invalid date range";
        return;
    }

    // Simple prediction (adding $10 per month as an example)
    const lastPrice = goldPrices[goldPrices.length - 1].price;
    const predictedPrice = lastPrice + (timeDiff / 30) * 10;
    
    document.getElementById('priceOutput').textContent = `$${predictedPrice.toFixed(2)}`;
}

// Call the renderChart function on page load
window.onload = renderChart;
