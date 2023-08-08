document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const adress = document.getElementById('adress').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const deliveryMethod = document.getElementById('delivery-method').value;
    
    const formattedMessage = `
    Para melhor atendê-los 
    Facilite seu pedido👇
    ➡️Nome: ${fullName}
    ➡️Endereço: ${adress}
    ➡️Forma de  pagamento: ${paymentMethod}
    ➡️Forma de  entrega: ${deliveryMethod}
    `;
    const whatsappNumber = '5585997200622';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(formattedMessage)}`;
    
    window.open(whatsappURL, '_blank');
});