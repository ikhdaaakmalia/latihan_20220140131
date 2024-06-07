document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.order-button');

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const price = this.getAttribute('data-price');
            orderProduct(product, price);
        });
    });
});

function orderProduct(product, price) {
    alert(`Anda telah memesan ${product} dengan harga Rp. ${price}`);

    // Mengirim data pemesanan ke server menggunakan AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/order', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Pesanan Anda berhasil dikirim!');
            } else {
                alert('Terjadi kesalahan saat mengirim pesanan. Silakan coba lagi.');
            }
        }
    };
    xhr.send(JSON.stringify({ product: product, price: price }));
}
