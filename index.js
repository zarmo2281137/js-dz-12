const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
  };
  
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }

  
  function countProps(obj) {
    return Object.keys(obj).length;
  }
  
 
  console.log(countProps({ name: "Alice", age: 25, job: "developer" })); 
  console.log(countProps({})); 
  

  function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = "";
  
    for (const [name, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = name;
      }
    }
  
    return bestEmployee;
  }
  
 
  const team = {
    Alice: 29,
    Bob: 35,
    Charlie: 15,
    David: 37
  };
  
  console.log(findBestEmployee(team)); 

  function countTotalSalary(employees) {
    let total = 0;
    for (const salary of Object.values(employees)) {
      total += salary;
    }
    return total;
  }
  
  
  const salaries = {
    Alice: 2500,
    Bob: 1800,
    Charlie: 3200
  };
  
  console.log(countTotalSalary(salaries)); 


  function getAllPropValues(arr, prop) {
    const result = [];
  
    for (const obj of arr) {
      if (prop in obj) {
        result.push(obj[prop]);
      }
    }
  
    return result;
  }
  

  const products = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Banana", price: 10, quantity: 5 },
    { name: "Cherry", price: 20, quantity: 8 }
  ];
  
  console.log(getAllPropValues(products, "name"));     
  console.log(getAllPropValues(products, "quantity")); 
  console.log(getAllPropValues(products, "category")); 


  function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    }
    return 0; 
  }
  
  // Перевірка:
  console.log(calculateTotalPrice(products, "Banana"));   
  console.log(calculateTotalPrice(products, "Cherry"));   
  console.log(calculateTotalPrice(products, "Mango"));    
  
  
  
  