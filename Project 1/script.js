document.addEventListener('DOMContentLoaded', () => {
    const orderNowButton = document.getElementById('order-now');
    orderNowButton.addEventListener('click', () => {
        window.location.href = '#';
        alert('Redirecting to order page...');
    });
});
