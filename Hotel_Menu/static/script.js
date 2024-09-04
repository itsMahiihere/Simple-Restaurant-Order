function calculateTotal() {
    let totalAmount = 0;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        totalAmount += parseInt(checkbox.getAttribute('data-price'));
    });
    document.getElementById('total-amount').textContent = totalAmount;
}
