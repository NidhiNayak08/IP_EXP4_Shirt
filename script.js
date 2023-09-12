function generateReceipt() {
    const tagline = document.getElementById("tagline").value;
    const color = document.getElementById("color").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
    const deliveryDate = document.getElementById("deliveryDate").value;
    const otherDetails = document.getElementById("otherDetails").value;

    const receiptDetails = `
      Tagline: ${tagline}\n
      Color: ${color}\n
      Size: ${size}\n
      Quantity: ${quantity}\n
      Delivery Date: ${deliveryDate}\n
      Other Details: ${otherDetails}\n
    `;

    const receiptDiv = document.getElementById("receipt");
    const receiptDetailsElement = document.getElementById("receiptDetails");
    receiptDetailsElement.textContent = receiptDetails;
    receiptDiv.style.display = "block";
  }

  // Modify your form to call the generateReceipt function when submitted
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    generateReceipt();
  });
//______________________________________________________________________
  function validateForm() {
    const tagline = document.getElementById("tagline").value;
    const deliveryDate = document.getElementById("deliveryDate").value;

    // Check if the tagline has more than 50 characters
    if (tagline.length > 20) {
      alert("Tagline should have 20 characters or less.");
      return false;
    }

    // Check if the delivery date is in the future
    const currentDate = new Date();
    const selectedDate = new Date(deliveryDate);
    if (selectedDate <= currentDate) {
      alert("Please select a future delivery date.");
      return false;
    }

    return true; // Proceed with form submission if validation passes
  }

  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    printDetails = () => {
      console.log("Name:", this.name);
      console.log("Email:", this.email);
    };
  }
  
  // Demonstrate the usage of the Student class
  class Student extends Person {
    constructor(name, email, rollNo) {
      super(name, email);
      this.rollNo = rollNo;
    }
  
    printDetails = () => {
      super.printDetails();
      console.log("Roll Number:", this.rollNo);
    };
  }
  
  // Add an event listener for the form submission
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
      generateReceipt();
    }
  });