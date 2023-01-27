
//1
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
  });


  //2
  const cars1 = [
    { make: 'Honda', model: 'Civic', year: 2020 },
    { make: 'Toyota', model: 'Corolla', year: 2019 },
    { make: 'Honda', model: 'Accord', year: 2018 },
    { make: 'Toyota', model: 'Camry', year: 2017 }
  ];
  const hondaCars = [];
  cars1.forEach(function(car) {
    if (car.make === 'Honda') {
      hondaCars.push(car);
    }
  });
  console.log(hondaCars);

  //3

  const cars2 = [
    { make: 'Honda', model: 'Civic', year: 2020, price: 20000 },
    { make: 'Toyota', model: 'Corolla', year: 2019, price: 18000 },
    { make: 'Honda', model: 'Accord', year: 2018, price: 22000 },
    { make: 'Toyota', model: 'Camry', year: 2017, price: 17000 }
  ];

  const totalValue = cars2
  .map(car => car.price)
  .reduce((acc, price) => acc + price, 0);
console.log(totalValue);//77000