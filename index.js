// Write your solution in this file!

// Initialize the employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee with key and value
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to destructively update employee with key and value
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property from employee by key
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to destructively delete property from employee by key
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  console.log("Initial Employee:", employee);
  
  // Test updateEmployeeWithKeyAndValue()
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  console.log("Updated Employee (Non-destructive):", updatedEmployee);
  
  // Test destructivelyUpdateEmployeeWithKeyAndValue()
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Manager");
  console.log("Employee after Destructive Update:", employee);
  
  // Test deleteFromEmployeeByKey()
  let employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without Address (Non-destructive):", employeeWithoutAddress);
  
  // Test destructivelyDeleteFromEmployeeByKey()
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee after Destructive Delete:", employee);
  