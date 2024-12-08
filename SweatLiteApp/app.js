// Initialize the Telegram Web App
const tg = window.Telegram.WebApp;

// Get the user's Telegram info
tg.ready();
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('refresh-balance').addEventListener('click', fetchBalance);
    document.getElementById('transfer-button').addEventListener('click', transferFunds);
});

// Fetch balance (mock API call)
function fetchBalance() {
    const balanceElement = document.getElementById('balance');
    // Replace with real API request to your backend
    balanceElement.textContent = "$123.45";
    alert("Balance updated!");
}

// Transfer funds (mock API call)
function transferFunds() {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;

    if (!recipient || !amount) {
        alert("Please fill out all fields.");
        return;
    }

    // Mock API call to transfer funds
    alert(`Transferred $${amount} to ${recipient}`);
}
