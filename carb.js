var cart = {
  name: ['Item A', 'Item B', 'Item C'],
  price: [50, 35, 95],
  available: [29, 13, 36],
  quantity: [0, 0, 0],
  total: 0,
  addToCart: function(index, avail, quan, total_price) {
    if (this.available[index] > 0) {
      this.available[index]--;
      this.quantity[index]++;
      this.total = this.total + this.price[index];
    };
    document.getElementById(avail).innerText = 'Available: ' + this.available[index];
    document.getElementById(quan).innerText = 'Quantity: ' + this.quantity[index];
    document.getElementById('total_1').innerText = 'Total: $' + this.total;
    document.getElementById('total_2').innerText = 'Total: $' + this.total;
    document.getElementById('total_3').innerText = 'Total: $' + this.total;
  },
  removeFromCart: function(index, avail, quan, total_price) {
    if (this.quantity[index] > 0) {
      this.available[index]++;
      this.quantity[index]--;
      this.total = this.total - this.price[index];
    };
    document.getElementById(avail).innerText = 'Available: ' + this.available[index];
    document.getElementById(quan).innerText = 'Quantity: ' + this.quantity[index];
    document.getElementById('total_1').innerText = 'Total: $' + this.total;
    document.getElementById('total_2').innerText = 'Total: $' + this.total;
    document.getElementById('total_3').innerText = 'Total: $' + this.total;
  }
}
