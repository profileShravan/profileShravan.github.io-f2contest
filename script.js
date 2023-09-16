const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// Print all the elements from the array
let printData = ((data) => {
  console.log(data);
});


// 1. Print Developers

function printDeveloper() {
  data.forEach((data) => {
    if(data.profession =="developer"){
      console.log(data);
    }
  });  
}


// 2. Add Data

function addData() {
  const name = prompt("Enter name:");
  const age = prompt("Enter age:");
  const profession = prompt("Enter profession:")
  const newData = {name,age,profession};
  data.push(newData);
  data.forEach(printData);  
}


// 3. Remove Admins

function removeAdmin() {
  const nonAdminData = [];
  data.forEach((dataObject) => {
    if (dataObject.profession !== "admin") {
      nonAdminData.push(dataObject);
    }
  });
  data.length = 0;
  for (var i of nonAdminData) {
    data.push(i);
}
data.forEach(printData);
   }


   // 4. Concatenate Array

   function concatenateArray() {
  console.log("Array 2")
  const data1 = [
    { name: "shravan", age: 24, profession: "web developer" },
    { name: "shivani", age: 27, profession: "tester" },
  ];
data1.forEach ((data) => {
  console.log(data);
});
console.log("After Concatenation ");
const newData = data.concat(data1);
console.log(newData);

}


// 5. Average Age

function averageAge() {
  let sum =0;
  data.forEach((data)=>{
    
     sum = data.age+sum;
  })
  const avg = sum/data.length;
  console.log("Average age: "+avg);
}


// 6. Age Check

function checkAgeAbove25() {
  data.forEach((data)=>{
    if(data.age > 25){
      console.log(data);
    }
  })
}


// 7. Unique Professions

function uniqueProfessions() {
  const uniqueProfessions = new Set();
  data.forEach((data) => {
    uniqueProfessions.add(data.profession);
  });
  console.log("Unique professions:", uniqueProfessions);
}


// 8. Sort by Age

function sortByAge() {
  data.sort((a, b) => {
    return a.age - b.age;
  });
  data.forEach(printData);  
}


// 9. Update Profession

function updateJohnsProfession() {
 
  let updateJohn = data.find((data) =>
    data.name ==="john")
    updateJohn.profession = "manager";
    data.forEach(printData);  

}


// 10. Profession Count

function getTotalProfessions() {
let developerCount = 0;
let adminCount = 0;
data.forEach((data)=>{
  if(data.profession === "developer"){
    developerCount++;
  }else if(data.profession === "admin"){
    adminCount++;
  }
});
console.log("Total Developer Count: "+developerCount);
console.log("Total Admin Count: "+adminCount);

}
