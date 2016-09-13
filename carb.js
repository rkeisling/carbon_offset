var cart = {
  name: ['Item A', 'Item B', 'Item C'],
  price: [50, 35, 95],
  available: [29, 13, 36],
  quantity: [0, 0, 0],
  total: 0,
  addToCart: function(index, place) {
    available[index]--;
    quantity[index]++;
    total = total + price[index];
    document.getElementById(place)('Available: ' + available)
    document.getElementById(place)('Quantity: ' + quantity)
    document.getElementById(place)('Total: ' + total)
  }
}
