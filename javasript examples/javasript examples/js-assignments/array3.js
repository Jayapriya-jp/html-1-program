let cars=[];
cars.push(
{ make: "Toyota",model:"Camry", year:2018},
{ make: "Toyota",model:"Camry", year: 2018},
{ make: "Toyota",model:"Camry", year:2018},
);
cars.shift();
cars.push({make:"Honda",model:"Civic",year:2020});
if    (cars.length >2){
    cars[0].model="accord";
}

console.log(cars);