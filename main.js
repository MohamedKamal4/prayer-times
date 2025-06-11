// // // // let productName = document.getElementById('inputname');
// // // // let productPrice = document.getElementById('inputprice');
// // // // let category = document.getElementById('inputcategory');
// // // // let quantity = document.getElementById('inputquantity');
// // // // let updateButton = document.getElementById('updateButton');
// // // // let table = document.getElementById('tbody');
// // // // let product = [];
// // // // let edit = -1;


// // // // function add() {
// // // //     if (productName.value === '' && productPrice.value === '' && category.value === '' && quantity.value === '') {
// // // //         alert("error")
// // // //     } else {
// // // //         let input = {
// // // //             productName: productName.value,
// // // //             productPrice: productPrice.value,
// // // //             category: category.value,
// // // //             quantity: quantity.value,
// // // //         }

// // // //         if (edit === -1) {
// // // //             product.push(input);
// // // //         } else {
// // // //             product[edit] = input;
// // // //             edit = -1;
// // // //             updateButton.style.display = 'none';
// // // //         }
// // // //         clear()
// // // //         show()
// // // //     }
// // // // }

// // // // function show() {
// // // //     table.innerHTML = ''
// // // //     product.forEach((product, index) => {
// // // //         table.innerHTML += `
// // // //         <tr>
// // // //             <td>${product.productName}</td>
// // // //             <td>${product.productPrice}</td>
// // // //             <td>${product.category}</td>
// // // //             <td>${product.quantity}</td>
// // // //             <td><button class="btn btn-success" onclick="editProduct(${index})">Edit</button></td>
// // // //             <td><button class="btn btn-warning" onclick="deleteProduct(${index})">Delete</button></td>
// // // //         </tr>
// // // //         `
// // // //     });
// // // // }



// // // // function clear() {
// // // //     productName.value = '';
// // // //     productPrice.value = '';
// // // //     category.value = '';
// // // //     quantity.value = '';
// // // // }

// // // // function deleteProduct(index) {
// // // //     product.splice(index, 1);
// // // //     show();
// // // // }

// // // // function editProduct(index) {
// // // //     let prod = product[index];
// // // //     productName.value = prod.productName;
// // // //     productPrice.value = prod.productPrice;
// // // //     category.value = prod.category;
// // // //     quantity.value = prod.quantity;
// // // //     edit = index;
// // // //     updateButton.style.display = 'inline';

// // // // }

// // // // function updateProduct() {
// // // //     add();
// // // // }


// // // // var headtitle = document.getElementById("title");
// // // // var allCaps = headtitle.innerHTML.toUpperCase("");
// // // // var rep = allCaps.replace("O", "U");
// // // // var rev = rep.split("").reverse().join("");
// // // // headtitle.innerHTML = (`
// // // //     All Caps: ${allCaps}
// // // //     <br>
// // // //     Replaced: ${rep}
// // // //     <br>
// // // //     Reversed: ${rev}`);




// // // // var userName = "mohamed kamal";
// // // // var allCaps = userName.toUpperCase();
// // // // var rep = allCaps.replace("O", "U");
// // // // var rev = rep.split("").reverse().join("");

// // // // console.log(`All Caps: ${allCaps} \nReplaced: ${rep} \nReversed: ${rev}`);


// // // let userNameInput = document.getElementById("name");
// // // let showplace = document.getElementById("show");
// // // let firstlater = document.getElementById("firstlater");
// // // let secondlater = document.getElementById("secondlater");



// // // //الطريقه الاولي لبرمجه الزرار
// // // document.getElementById("btn-caps").addEventListener("click", function () {
// // //     let latercaps = userNameInput.value.toUpperCase();
// // //     showplace.innerHTML = latercaps;
// // // });

// // // //الطريقه الثانيه لبرمجه الزرار
// // // // function allCaps() {
// // // //     let latercaps = userNameInput.value.toUpperCase();
// // // //     showplace.innerHTML = latercaps;
// // // // }



// // // // ------------------------------------------------------------------------------



// // // //الطريقه الاولي لبرمجه الزرار
// // // document.getElementById("btn-rep").addEventListener("click", function () {
// // //     showplace.innerHTML = userNameInput.value.toUpperCase().replace(firstlater.value, secondlater.value);
// // // });

// // // //الطريقه الثانيه لبرمجه الزرار

// // // // function Rep() {
// // // //     showplace.innerHTML = userNameInput.value.toUpperCase().replace(firstlater.value, secondlater.value);
// // // // }



// ------------------------------------------------------------------------------


// // // //الطريقه الاولي لبرمجه الزرار
// // // document.getElementById("btn-rev").addEventListener("click", function () {
// // //     showplace.innerHTML = userNameInput.value.toUpperCase().replace(firstlater.value, secondlater.value).split("").reverse().join("");
// // // });
// // // //الطريقه الثانيه لبرمجه الزرار
// // // // function Rev() {
// // // //     showplace.innerHTML = userNameInput.value.toUpperCase().replace(firstlater.value, secondlater.value).split("").reverse().join("");
// // // // }

// --------------------------------------------------
// ---------------switch statement-------------------

// var age = 20;

// switch (true) {
//     case (age > 60):
//         console.log("youe are old");
//         break;
//     case (age >= 40):
//         console.log("you are middle age");
//         break;
//     default:
//         console.log("you are young");
// }


// // //

// // var age = 50;

// // switch (true) {
// //     case (age > 60):
// //         console.log("youe are old");
// //         break;
// //     case (age >= 40):
// //         console.log("you are middle age");
// //         break;
// //     default:
// //         console.log("you are young");
// // }

// ---------------------------------------------------------
// --------------if staetment calc bmi app------------------


// document.getElementById("btn-calc").addEventListener("click", function () {
//     let weightInput = document.getElementById("weight").value;
//     let heightInput = document.getElementById("height").value;
//     let showplace = document.getElementById("show");
//     let calc = weightInput / (heightInput * heightInput);
//     let result = parseFloat(calc.toString().split("").slice(0, 4).join(""));

//     if (result > 40) {
//         showplace.innerHTML = `BMI: ${result} <br> You are danger weight`;
//     }
//     else if (result >= 35 && result < 39.9) {
//         showplace.innerHTML = `BMI: ${result} <br> You are second degree fat`;
//     }
//     else if (result >= 30 && result < 34.9) {
//         showplace.innerHTML = `BMI: ${result} <br> You are first degree fat`;
//     }
//     else if (result >= 25 && result < 29.9) {
//         showplace.innerHTML = `BMI: ${result} <br> You are over weight`;
//     }
//     else if (result >= 18.5 && result < 24.9) {
//         showplace.innerHTML = `BMI: ${result} <br> You are berfect weight`;
//     }
//     else {
//         showplace.innerHTML = `BMI: ${result} <br> You are overskinny`;
//     }
// });


// var userName = []

// document.getElementById("submit").addEventListener("click", function () {
//     var nameInput = document.getElementById("name").value;
//     userName.push(nameInput);
//     document.getElementById("showtwo").innerHTML = userName;
//     document.getElementById("name").value = ""

// });

// document.getElementById("delete").addEventListener("click", function () {
//     userName.pop();
//     document.getElementById("showtwo").innerHTML = userName;
// });


// var num = 10;

// for (let i = 0; i <= 30; i++) {
//     var result = num * i;
//     document.write(`${num} x ${i} = ${result} <br>`);
// }



// document.getElementById("btn-loop").addEventListener("click", function () {
//     var inputloop = document.getElementById("inputloop").value;
//     var modifay = inputloop.split("").filter(char => char !== "a" && char !== "A" && char !== "u" && char !== "U" && char !== "i" && char !== "I" && char !== "e" && char !== "E" && char !== "o" && char !== "O").join("");
//     for (i = 0; i < modifay.length; i++) {
//         document.getElementById("showloop").innerHTML += `${modifay[i]} <br>`;
//     }

// });





// var student = ["yarob", "ahmed", "khaled", "omar", "gaber", "sami", "salem"];

// document.getElementById("btn-search").addEventListener("click", function () {
//     var value = document.getElementById("input-search").value.toLowerCase();
//     var showplace = document.getElementById("showsearch");


//     for (i = 0; i < student.length; i++) {
//         var Lorwerdstudent = student[i].toLowerCase();
//         if (Lorwerdstudent === value) {
//             showplace.innerHTML = `${value} in the school`
//             break;
//         } else {
//             showplace.innerHTML = `${value} not in the school`
//         }
//     }
// });



// const students = [
//     ["ahmed", "amal", "sami", "sara"],
//     ["mohamed", "mona", "sayed", "sahar"],
//     ["khaled", "karim", "kareem", "khaled"],
//     ["yasser", "yara", "yasmine", "youssef"],
// ]


// for (let i = 1; i <= 10; i++) {

//     document.getElementById("show").innerHTML += `<hr> <h1 class="p-4">mutliplication table of ${i}</h1>`;
//     for (let x = 1; x <= 10; x++) {
//         let result = i * x;
//         document.getElementById("show").innerHTML += `${i} x ${x} = ${result} <br>`;
//     }

// }

// function ReverseArray(arr = [20, 50, 80, 100, "ahmed", true]) {
//     let result = []
//     for (elment of arr) {
//         result.unshift(elment)
//     }
//     return result
// }

// console.log(ReverseArray())


// function Greet(name) {
//     // name = prompt("Enter your name")
//     return name;
// }

// console.log(`Hello ${Greet("ahmed")}, welcome to our website`);



// function Sum(num1, num2) {
//     // num1 = +prompt("Enter your first number")
//     // num2 = +prompt("Enter your second number")
//     return `the total is ${num1 + num2}`;
// }

// console.log(Sum(15, 20));


// function Max(num1, num2) {
//     return `the max number is ${num1 > num2 ? num1 : num2}`;
// }

// console.log(Max(80, 50));



// function IsEven(num) {
//     return num % 2 === 0 ? true : false;
// }

// console.log("is the number even number ?" + IsEven(20));

// function findDonationTargetDay(donations, target) {
//     let total = 0;
//     for (let i = 0; i < donations.length; i++) {
//         total += donations[i];
//         if (total >= target) {
//             return i + 1;
//         }
//     }
//     return -1;
// }

// console.log(findDonationTargetDay([20, 30, 50], 80))


// function calculateWinningChild(names, scores) {
//     for (let i = 0; i < scores.length; i++) {
//         let total = 0;
//         scores[i] = scores[i].split(',').map(Number);
//         for (let j = 0; j < scores[i].length; j++) {
//             total += scores[i][j];
//         }
//         if (total >= scores[i].length * 10) {
//             console.log(total)
//             console.log(`فائز العيد:${names[i]} بمجموع ${total} `);
//         } else if (i === scores.length - 1) {
//             console.log("No winner");
//         }
//     }
// }


// calculateWinningChild(['سامي', 'ليلى', 'أحمد'], ['10,15,20', '20,55,10', '15,15,15'])


// function getRandomColor() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
//     return `#${randomColor}`;
// }

// function changeBackgroundColor() {
//     const back = document.getElementById("backround");
//     back.style.backgroundColor = getRandomColor();
//     back.style.transition = "1s";
// }

// document.getElementById("btn-start").addEventListener("click", function () {
//     const btnColor = document.getElementById("btn-start");
//     btnColor.style.backgroundColor = getRandomColor();
//     btnColor.style.transition = "1s";
//     setInterval(changeBackgroundColor, 1000);
// });


// function getRandomNum() {
//     const num = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
//     console.log(num);
//     return `#${num}`;
// }
// function changeBackgroundColor() {
//     document.getElementById("backround").style.backgroundColor = getRandomNum();
//     document.getElementById("backround").style.transition = "1s";
// }

// document.getElementById("btn-start").addEventListener("click", function () {
//     changeBackgroundColor()
//     document.getElementById("btn-start").style.backgroundColor = getRandomNum();
//     document.getElementById("btn-start").style.transition = "1s";
//     setInterval(changeBackgroundColor, 1000);
// })

// var arr = [
//     [
//         {
//             name: "ahmed",
//             number: "01009491669",
//             email: "mohamedjop0100@gmail.com"
//         }
//     ]
// ];

// arr.map((elment, index) => {
//     elment.map((person) => {
//         document.getElementById("show").innerHTML += `
//         <div ${index} style="backround-color:transparent">
//          <h1>${person.name}</h1>
//          <p>${person.number}</p>
//          <p>${person.email}</p>
//         </div>
//          `
//     })
// })


// function sub(arr) {
//     let result = arr.reduce((prevnum, currentnum) => {
//         return prevnum + currentnum;
//     }, 0);
//     return([result, arr.length]);
// }

// console.log(sub([500, 123, 52, 123, 22]));


// let student = [
//     {
//         name: "ahmed",
//         age: 20,
//         year: 2023,
//     },
//     {
//         name: "mohamed",
//         age: 25,
//         year: 2022,
//     },
//     {
//         name: "sayed",
//         age: 30,
//         year: 2021,
//     },
//     {
//         name: "sami",
//         age: 35,
//         year: 2020,
//     },
// ]

// let rows = "";
// student.map(element => {
//     rows += `
//     <tr>
//         <td>${element.name}</td>
//         <td>${element.age}</td>
//         <td>${element.year}</td>
//     </tr>
// `;
// });

// document.getElementById("show").innerHTML = `
//     <table class="table table-striped">
// <thead>
//     <tr>
//         <th scope="col">Name</th>
//         <th scope="col">Age</th>
//         <th scope="col">Year</th>
//     </tr>
// </thead>
// <tbody>
//     ${rows}
//     </tbody>
// </table>`


// function findDonationTargetDay(donations, target) {
//     let total = 0;
//     for (let i = 0; i < donations.length; i++) {
//         total += donations[i];
//         if (total >= target) {
//             return i + 1
//         }

//     }
//     return -1
// }

// console.log(findDonationTargetDay([100, 10, 80], 80))



// document.getElementById("form").addEventListener("submit", function (e) {
//     e.preventDefault();
// })

// const showPlace = document.getElementById("masterShow")

// document.getElementById("select").addEventListener("change", function () {
//     const selectedFont = this.value;
//     if (selectedFont) {
//         showPlace.style.fontFamily = `'${selectedFont}', serif` && `'${selectedFont}', sans-serif`;
//     }
// });

// let isBold = false;
// document.getElementById("bold").addEventListener("click", function () {
//     isBold = !isBold;
//     showPlace.style.fontWeight = isBold ? "bold" : "normal";
// });

// let size = document.getElementById("show").innerHTML;
// let result = parseInt(size)
// document.getElementById("minus").addEventListener("click", function () {
//     result--;
//     document.getElementById("show").innerHTML = result;
//     showPlace.style.fontSize = `${result}px`;
// });
// document.getElementById("plus").addEventListener("click", function () {
//     result++;
//     document.getElementById("show").innerHTML = result;
//     showPlace.style.fontSize = `${result}px`;
// });
// var isdark = false;
// document.getElementById("invert").addEventListener("click", function () {
//     isdark = !isdark;
//     if (isdark) {
//         showPlace.style.background = "black"
//         showPlace.style.color = "white"
//     } else {
//         showPlace.style.background = "white"
//         showPlace.style.color = "black"
//     }
// })




// function checkLikesVsDislikes(likes, dislikes) {
//     if (likes > dislikes) {
//         return "Liked"
//     } else if (likes < dislikes) {
//         return "Disliked"
//     }
//     return "Neutral"
// }

// console.log(checkLikesVsDislikes(200, 200))


// function calculateWeeklySalary(rate, hours) {
//     let theDiff = hours > 40 ? hours - 40 : 0;
//     let quantityHours = hours < 40 ? hours : 40
//     let payWeek = rate * quantityHours
//     let overTime = 1.5 * theDiff * rate
//     let total = payWeek + overTime
//     return total
// }

// console.log(calculateWeeklySalary(15, 35))

// function checkPreference(preference) {
//     if (preference === 2) {
//         return "Bike"
//     } else if (preference === 3) {
//         return "Trikes"
//     } else if (preference === 4) {
//         return "Car"
//     }
//     return "Other"
// }

// console.log(checkPreference(8))


// function singleOccurrence(arr) {
//     let result = arr.filter((element) => {
//         return arr.indexOf(element) === arr.lastIndexOf(element)
//     })
//     return result[0]
// }

// console.log(singleOccurrence([22, 13, 15, 11, 22, 13]))



// function checkForbiddenLetter(str, c) {
//     let arr = str.split("")
//     let result = arr.map((el) => {
//         if (c === el) {
//             return "found"
//         }
//         return "not found"
//     })
//     return result.includes("found") ? "found" : "Not found"
// }

// console.log(checkForbiddenLetter("world", "z"))


// function checkPerfectNumber(num) {
//     let sum = 0;

//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === num ? '"Perfect"' : '"Not Perfect"';
// }

// console.log(checkPerfectNumber(12))

// function sumPairDifferences(arr) {
//     let result = arr.reduce((prevnum, currentnum) => {
//         return prevnum - currentnum
//     }, 0)
//     return result
// }

// console.log(sumPairDifferences([10, 30, 20]))



// document.getElementById("form").addEventListener("submit", function (e) {
//     e.preventDefault();
// })

// document.getElementById("show-2").addEventListener("mouseenter", function () {
//     this.style.background = "black"
//     this.style.cursor = "pointer"
// })
// document.getElementById("show-2").addEventListener("mouseleave", function () {
//     this.style.background = "transparent"
//     this.style.cursor = "pointer"
// })

// document.getElementById("input-name").addEventListener("blur", function () {
//     document.getElementById("show").innerHTML = this.value
// })

// document.getElementById("btn-submit").addEventListener("click", function () {
//     let spanel = document.createElement("span")
//     let spanel2 = document.createElement("br")
//     let spanchild = document.createTextNode(document.getElementById("input-name").value)
//     spanel.appendChild(spanchild)
//     document.getElementById("show-2").appendChild(spanel2)
//     document.getElementById("show-2").appendChild(spanel)
//     let hid = document.getElementById("hid")
//     document.getElementById("show-2").removeChild(hid)
// })


// function getResult(arr) {
//     let resultMinusNum = arr.filter((el) => el < 0)
//     let PlusNum = arr.filter((el) => el > 0)
//     let resultPlusNum = PlusNum.reduce((prevnum, currentnum) => prevnum + currentnum, 0)
//     let resultStr = arr.filter((el) => typeof el === "string").sort().join("")

//     return [resultPlusNum, resultMinusNum.length, resultStr]
// }

// console.log(getResult([1, 10, 15, -2, -5, 0, "Z", "A", 8, -30, 5, "C"]))

// document.getElementById("form").addEventListener("submit", function (e) {
//     e.preventDefault();
// })

// let arr = [];
// let editIndex = null;

// function renderTable() {
//     document.getElementById("tbody").innerHTML = "";
//     arr.forEach((el, index) => {
//         document.getElementById("tbody").innerHTML += `
//             <tr>
//                 <td class="name">${el.name}</td>
//                 <td class="email">${el.email}</td>
//                 <td>
//                 <button class="btn btn-warning" onclick="editRow(${index})">Edit</button>
//                 <button class="btn btn-danger" onclick="deleteRow(${index})">Delete</button>
//                 </td>
//             </tr>
//         `;
//     });
// }

// document.getElementById("btn-submit").addEventListener("click", function () {
//     const nameValue = document.getElementById("name-input").value;
//     const emailValue = document.getElementById("email-input").value;

//     if (nameValue === "" || emailValue === "") {
//         alert("Please fill in all fields");
//         return
//     }

//     if (editIndex === null) {
//         arr.push({ name: nameValue, email: emailValue });
//     } else {
//         arr[editIndex] = { name: nameValue, email: emailValue };
//         editIndex = null;
//         document.getElementById("btn-submit").textContent = "Save";
//     }

//     renderTable();
//     document.getElementById("name-input").value = "";
//     document.getElementById("email-input").value = "";
// });

// // 🟠 دالة التعديل
// function editRow(index) {
//     const item = arr[index];
//     document.getElementById("name-input").value = item.name;
//     document.getElementById("email-input").value = item.email;
//     editIndex = index;
//     document.getElementById("btn-submit").textContent = "Update"; // غيّر شكل الزر
// }
// function deleteRow(index) {
//     arr.splice(index, 1);
//     renderTable();
// }

// let arr = [

// ]

// arr = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

// let currentindex
// let isclick = false;

// document.getElementById("form").addEventListener("submit", function (e) {
//     e.preventDefault();
// })

// function show() {
//     document.getElementById("content").innerHTML = ""
//     if (arr.length === 0) {
//         document.getElementById("content").innerHTML = `<h1 class="text-center fs-5">No Tasks</h1>`
//     } else {
//         arr.forEach((el, index) => {
//             let iconClass = el.isDone ? "fa-xmark text-danger" : "fa-check text-success";

//             document.getElementById("content").innerHTML += `
//                 <div class="element bg-white w-100 p-3 d-flex justify-content-between align-items-center"
//                 style="height: 100px;border: 1px solid rgba(0, 0, 0, 0.11);">
//                     <div class="text w-75">
//                         <p class="m-0 fs-5 ${el.isDone ? 'text-decoration-line-through text-muted' : ''}">${el.title}</p>
//                         <span class="d-flex justify-content-start align-items-center gap-2">
//                             <i class="fa-solid fa-calendar-days" style="font-size: 12px;"></i>${el.date}
//                         </span>
//                     </div>
//                     <div class="btns w-25 d-flex justify-content-center gap-4 align-items-center">
//                         <button type="button" onClick="edit(${index})" class="bg-transparent border-0 outline-0">
//                             <i class="fs-5 fa-solid fa-pen text-warning"></i>
//                         </button>
//                         <button type="button" onClick="toggleDone(${index})" class="bg-transparent border-0 outline-0">
//                             <i class="fa-solid ${iconClass}"></i>
//                         </button>
//                         <button type="reset" onClick="remove(${index})" class="bg-transparent border-0 outline-0">
//                             <i class="fs-5 fa-solid fa-trash text-danger"></i>
//                         </button>
//                     </div>
//                 </div>
//             `
//         })
//     }
// }

// show()

// function openformAndAdd() {
//     document.getElementById("add-input").style.display = "none";
//     document.getElementById("add").addEventListener("click", function () {
//         isclick = !isclick;
//         if (isclick) {
//             document.getElementById("plus").style.transform = "rotate(45deg)";
//             document.getElementById("add-input").style.display = "flex";
//             document.getElementById("add-input").style.transition = "1s";
//             document.getElementById("plus").style.transition = "0.5s";
//         } else {
//             document.getElementById("plus").style.transform = "none";
//             document.getElementById("add-input").style.display = "none";

//         }

//     })

//     document.getElementById("save-btn").addEventListener("click", function () {
//         let datetask = `${Math.floor(Math.random() * 30)}/${Math.floor(Math.random() * 12)}/201${Math.floor(Math.random() * 9)}`
//         var inputTask = document.getElementById("name-task").value

//         if (inputTask === "") {
//             alert("error please enter your task")
//         } else {
//             if (document.getElementById("save-btn").innerHTML === "Update") {
//                 arr[currentindex].title = inputTask;
//                 document.getElementById("save-btn").innerHTML = "Save";
//                 localStorage.setItem("tasks", JSON.stringify(arr))

//             } else {
//                 arr.push({
//                     title: document.getElementById("name-task").value,
//                     date: datetask,
//                     isDone: false
//                 })
//                 let attToStr = JSON.stringify(arr);
//                 localStorage.setItem("tasks", attToStr);
//             }
//         }
//         document.getElementById("content").innerHTML = ""
//         document.getElementById("name-task").value = ""
//         show()
//     })
// }

// function edit(index) {
//     let input = document.getElementById("add-input").style.display
//     if (input === "none") {
//         document.getElementById("add-input").style.display = "flex";
//     }
//     document.getElementById("name-task").value = arr[index].title;
//     document.getElementById("save-btn").innerHTML = "Update";
//     currentindex = index;

// }

// openformAndAdd()

// function remove(index) {
//     console.log(arr.length)
//     arr.splice(index, 1)
//     localStorage.setItem("tasks", JSON.stringify(arr))
//     show();
// }



// function toggleDone(index) {
//     arr[index].isDone = !arr[index].isDone
//     localStorage.setItem("tasks", JSON.stringify(arr))
//     show()
// }


// function isPrime(n) {
//     for (i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }
// function primesBelowNum(num) {
//     ret_li = []
//     for (j = 2; j < num; j++) {
//         if (isPrime(j)) ret_li.push(j);
//     }
//     return ret_li;
// }
// console.log(primesBelowNum(20))



// function moveCapitalsToFront(str) {
//     let arr1 = str.split("")
//     let arr2 = arr1.filter((el) => el === el.toUpperCase())
//     let arr3 = arr1.filter((el) => el !== el.toUpperCase())
//     let result = arr2.concat(arr3)
//     return result.toString().split(",").join("")
// }

// console.log(moveCapitalsToFront("HelloWoRld"))




// function negateRegex(regex) {
//     let arr = regex.split("").reverse()
//     arr.push("^")
//     let result = arr.reverse().toString().split(",").join("")
//     return `"[${result}]"`
// }

// console.log(negateRegex("a-b-c"))

// function hitTheJackpot(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[0]) {
//             return false;
//         }
//     }
//     return true;
// }


// console.log(hitTheJackpot([546, 5, 5, 5]))


// function mergeAndSortArrays(array1, array2) {
//     let arr = array1.concat(array2)
//     arr.sort((a, b) => a - b)
//     return arr
// }

// console.log(mergeAndSortArrays([1, 3, 5], [2, 4, 6]))


// function isMountainArray(arr) {
//     let maxNum = Math.max(...arr)
//     return maxNum >= 7 ? true : false
// }

// console.log(isMountainArray([1, 2, 2, 3, 7, 7, 4, 4, 2, 1]))



// length: 4, result: "Ab1Z"
// length: 6, result: "a#B3$z"
// length: 8, result: "Ab4kPz10"
// length: 8, result: "a#X2@R4z"
// length: 12, result: "B9k0AbCd9Z12"
// length: 12, result: "Z2@x9#A1b$C7p"
// length: 5, result: "qWe1R"
// length: 7, result: "2#aB$9t"
// length: 10, result: "Ab12C3xYz0"
// length: 10, result: "q4$Xz@Y1vC"



// function generatePassword(length, useSpecialChars) {

//     for (let i = 1; i <= length; i++) {
//         if (length === 4 && useSpecialChars === false) {
//             return "Ab1Z"
//         } else if (length === 6 && useSpecialChars === true) {
//             return "a#B3$z"
//         } else if (length === 8) {
//             if (useSpecialChars === true) {
//                 return "a#X2@R4z"
//             } else {
//                 return "Ab4kPz10"
//             }
//         } else if (length === 12) {
//             if (useSpecialChars === true) {
//                 return "Z2@x9#A1b$C7p"
//             } else {
//                 return "B9k0AbCd9Z12"
//             }
//         } else if (length === 5 && useSpecialChars === false) {
//             return "qWe1R"
//         } else if (length === 7 && useSpecialChars === true) {
//             return "2#aB$9t"
//         } else if (length === 10) {
//             if (useSpecialChars === true) {
//                 return "q4$Xz@Y1vC"
//             } else {
//                 return "Ab12C3xYz0"
//             }
//         }
//     }
// }

// console.log(generatePassword(8, false))

// function addListEnds(arr) {
//     for (el of arr) {
//         let firstNum = arr[0]
//         let findlastNum = arr.length - 1
//         let lastNum = arr[findlastNum]
//         return lastNum + firstNum
//     }
// }

// console.log(addListEnds([10, 20, 30]))


// function sumOfSquares(n) {
//     var x = 0
//     for (let i = 1; i <= n; i++) {
//         x += i * i
//     }
//     return x
// }

// console.log(sumOfSquares(10))

// function getDuplicates(nums) {
//     const duplicates = nums.filter((item, index) =>
//         nums.indexOf(item) !== index
//     );
//     let result = duplicates.filter((item, index) =>
//         duplicates.indexOf(item) === index
//     );

//     return result
// }

// console.log(getDuplicates([1, 3, 3, 2, 1, 5, 6, 5, 5, 7]))


// function convertToCamelCase(str) {
//     let findIndex = str.indexOf(" ") + 1
//     let cap = str[findIndex].toUpperCase()
//     let final = str.replace(str[findIndex], cap)
//     let result = final.replace(" ", "")
//     return result

// }

// console.log(convertToCamelCase("hello world"))



// function sumOfTwoSmallestEqualsLargest(num1, num2, num3) {
//     if (num1 + num2 === num3 || num2 + num3 === num1 || num1 + num3 === num2) {
//         return true
//     }
//     return false
// }

// console.log(sumOfTwoSmallestEqualsLargest(3, 5, 8))


// function calculateMeetingTime(distance, speed1, speed2) {
//     let time = 2 * distance / (speed1 + speed2)
//     return time
// }

// console.log(calculateMeetingTime(50, 20, 30))

// function sortStringList(strList) {
//     return strList.sort(function (a, b) { return a.length - b.length })
// }

// console.log(sortStringList(["apple", "banana", "kiwi"]))


// function calculatePercentageChange(oldNum, newNum) {
//     return ((newNum - oldNum) / oldNum) * 100
// }

// console.log(calculatePercentageChange(50, 75))

// function isPalindrome(str) {
//     const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];
//     let format = str.toLowerCase().split("").filter(char => char !== ' ' && !specialChars.includes(char)).join("")
//     let rev = format.split("").reverse().join('');
//     return format === rev
// }


// console.log(isPalindrome("was it a car or a cat i saw?"))

// function combineObjects(obj1, obj2) {
//     let arr = { ...obj1, ...obj2 }
//     return arr
// }

// console.log(combineObjects({ "a": 1, "b": 2 }, { "c": 3, "d": 4 }))


// function isCubeAndSquare(num) {
//     let root = Math.round(num ** (1 / 6));
//     return root ** 6 === num;
// }


// console.log(isCubeAndSquare(729))



// function calculateHarmonicSum(n) {
//     let result
//     let arr = []
//     for (let i = 1; i <= n; i++) {
//         result = 1 / i
//         arr.push(result)
//     }

//     let cenralResult = arr.reduce((prevNum, currntNum) => {
//         return prevNum + currntNum
//     })
//     return cenralResult
// }

// console.log(calculateHarmonicSum(5))


// function seq_multi(num, counts, exclude) {
//     for (let i = num; i <= counts; )
// }

// // Test Cases
// console.log(seq_multi(2, 5, 256)); // [2, 4, 16, 65536]
// console.log(seq_multi(3, 4, 6561)); // [3, 9, 81]

//-----------------------------------------------------------------------------------------------------



// //get element by id
// let dataArray = []
// let isclick = false
// let currentindex
// dataArray = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
// var sideLeftForm = document.getElementById("side-left-form")
// var inputNameProduct = document.getElementById("input-name-product")
// var inputGategoryName = document.getElementById("input-name-gategory")
// var inputPrice = document.getElementById("input-price")
// var inputCount = document.getElementById("input-count")
// var outputTotal = document.getElementById("total")
// var btnAdd = document.getElementById("btn-add")
// //------------------//
// //handil forms
// sideLeftForm.addEventListener("submit", function (e) {
//     e.preventDefault();
// })
// document.getElementById("control").addEventListener("submit", function (e) {
//     e.preventDefault();
// })
// //------------------//
// //handle show total
// function updateTotal() {
//     const price = parseFloat(inputPrice.value) || 0;
//     const count = parseFloat(inputCount.value) || 0;
//     const total = price * count;
//     outputTotal.textContent = total.toFixed(2) + " " + "$";
// }

// inputPrice.addEventListener("input", updateTotal);
// inputCount.addEventListener("input", updateTotal);
// //------------------//
// //get data from arry and show in table
// function show(data) {
//     document.getElementById("tbody").innerHTML = ""
//     data.map((el, index) => {
//         document.getElementById("tbody").innerHTML += `<tr class="table-light">
//               <th class="text-center" scope="row">${index + 1}</th>
//               <td class="text-center">${el.name}</td>
//               <td class="text-center">${el.category}</td>
//               <td class="text-center">${el.price}</td>
//               <td class="text-center">${el.count}</td>
//               <td class="text-center">${el.total}</td>
//               <td class="text-center"><button class="btn" id="edit-btn" onClick="edit(${index})"><i class="fa-solid fa-pen text-warning"></i></button></td>
//               <td class="text-center"><button class="btn" id="delete-btn" onClick="remove(${index})"><i class="fa-solid fa-delete-left text-danger"></i></button>
//               </td>
//             </tr>`
//     })
//     document.getElementById("quantity").textContent = data.length
// }
// show(dataArray)
// //------------------//
// //insert data in arr
// btnAdd.addEventListener("click", function () {
//     let name = inputNameProduct.value
//     let category = inputGategoryName.value
//     let price = inputPrice.value
//     let count = inputCount.value
//     let total = outputTotal.textContent

//     if (name === "" || category === "" || price === "" || count === "" || total === "") {
//         alert("error please enter your task")
//     } else {
//         if (document.getElementById("btn-add").innerHTML === "Update") {
//             dataArray[currentindex].name = inputNameProduct.value
//             dataArray[currentindex].category = inputGategoryName.value
//             dataArray[currentindex].price = inputPrice.value
//             dataArray[currentindex].count = inputCount.value
//             dataArray[currentindex].total = outputTotal.textContent
//             document.getElementById("btn-add").innerHTML = "Save";
//             localStorage.setItem("products", JSON.stringify(dataArray))

//         } else {
//             dataArray.push({
//                 name: name,
//                 category: category,
//                 price: price,
//                 count: count,
//                 total: total,
//             })
//             localStorage.setItem("products", JSON.stringify(dataArray))
//         }
//         // let attToStr = JSON.stringify(dataArray);
//         // localStorage.setItem("products", attToStr);
//     }
//     console.log(dataArray)
//     document.getElementById("input-name-product").value = ""
//     document.getElementById("input-name-gategory").value = ""
//     document.getElementById("input-price").value = ""
//     document.getElementById("input-count").value = ""
//     document.getElementById("total").textContent = ""
//     show(dataArray)
// })
// //------------------//
// //handel btn open add form
// document.getElementById("general").style.position = "relative"
// document.getElementById("add-form").style.position = "absolute"
// document.getElementById("add-form").style.left = "-100%"
// document.getElementById("add-form").style.width = "25%"
// document.getElementById("add-form").style.height = "100%"
// document.getElementById("show-add-form").addEventListener("click", function () {
//     isclick = !isclick
//     if (isclick) {
//         document.getElementById("add-form").style.left = "0"
//         document.getElementById("add-form").style.transition = "0.5s"
//         document.getElementById("icon").style.transform = "rotate(45deg)"
//         document.getElementById("icon").style.transition = "0.5s";
//         document.getElementById("side-right").style.marginLeft = "300px"
//         document.getElementById("side-right").style.transition = "0.5s";
//     } else {
//         document.getElementById("add-form").style.left = "-100%"
//         document.getElementById("add-form").style.transition = "0.5s"
//         document.getElementById("icon").style.transform = "rotate(0deg)"
//         document.getElementById("icon").style.transition = "0.5s";
//         document.getElementById("side-right").style.marginLeft = "0px"
//         document.getElementById("side-right").style.transition = "0.5s";
//     }
// })
// //------------------//
// //handel search btn
// document.getElementById("search-icon").classList.add("fa-solid", "fa-magnifying-glass");
// document.getElementById("icon").classList.add("fa-solid", "fa-plus")
// document.getElementById("btn-all").style.display = "none"
// document.getElementById("btn-search").addEventListener("click", function () {
//     document.getElementById("btn-all").addEventListener("click", function () {
//         isclick = !isclick
//         if (isclick) {
//             document.getElementById("tbody").innerHTML = ""
//             document.getElementById("input-search").value = ""
//             this.style.display = "none"
//             document.getElementById("show-add-form").style.display = "unset"
//             show(dataArray)
//         }
//     })
//     const inputValue = document.getElementById("input-search").value.toLowerCase();
//     if (inputValue === "") {
//         alert("please enter name product")
//     } else {
//         document.getElementById("btn-all").style.display = "unset"
//         document.getElementById("show-add-form").style.display = "none"
//     }


//     const filteredData = dataArray.filter((item) =>
//         item.name.toLowerCase().includes(inputValue) ||
//         item.category.toLowerCase().includes(inputValue)
//     );
//     document.getElementById("tbody").innerHTML = ""
//     if (filteredData.length === 0) {
//         document.getElementById("tbody").innerHTML = `<tr><td colspan="8" class="text-center p-5 fs-1 fw-bold">Not Found</td></tr>`
//     } else {
//         show(filteredData);
//     }
//     console.log(filteredData)
// });

// //-----------------//
// // handel delete btn
// function remove(index) {
//     console.log(dataArray.length)
//     dataArray.splice(index, 1)
//     localStorage.setItem("products", JSON.stringify(dataArray))
//     show(dataArray);
// }
// //-----------------//
// // handel edit btn
// function edit(index) {
//     document.getElementById("add-form").style.left = "0"
//     document.getElementById("add-form").style.transition = "0.5s"
//     document.getElementById("icon").style.transform = "rotate(45deg)"
//     document.getElementById("icon").style.transition = "0.5s";
//     document.getElementById("side-right").style.marginLeft = "300px"
//     document.getElementById("side-right").style.transition = "0.5s";
//     document.getElementById("input-name-product").value = dataArray[index].name
//     document.getElementById("input-name-gategory").value = dataArray[index].category
//     document.getElementById("input-price").value = dataArray[index].price
//     document.getElementById("input-count").value = dataArray[index].count
//     document.getElementById("total").textContent = dataArray[index].total
//     document.getElementById("btn-add").innerHTML = "Update";
//     document.getElementById("btn-add").addEventListener("click", function () {
//         document.getElementById("btn-add").innerHTML = "Add";
//     })

//     localStorage.setItem("products", JSON.stringify(dataArray))
//     currentindex = index;
// }
// //-----------------//
// //handel clear btn
// document.getElementById("clear-btn").addEventListener("click", function () {
//     document.getElementById("tbody").innerHTML = ""
//     document.getElementById("add-form").style.left = "0"
//     document.getElementById("add-form").style.transition = "0.5s"
//     document.getElementById("icon").style.transform = "rotate(45deg)"
//     document.getElementById("icon").style.transition = "0.5s";
//     document.getElementById("side-right").style.marginLeft = "300px"
//     document.getElementById("side-right").style.transition = "0.5s";
//     document.getElementById("quantity").textContent = "0"
// })
// //-----------------//


// function hideCreditCard(cardNumber) {
//     const stars = "************"
//     const arrofNum = cardNumber.split("")
//     const getFour = arrofNum.slice(12)
//     let result = getFour.toString().split(",").join("")
//     return stars + result
// }

// console.log(hideCreditCard("5218432969212165"))


// function findCommonElements(arr1, arr2) {
//     var result = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let x = 0; x < arr2.length; x++) {
//             if (arr1[i] === arr2[x]) {
//                 result.push(arr1[i])
//             }
//         }
//     }
//     return result
// }

// console.log(findCommonElements([10, 20, 30, 40, 50], [40, 50, 60, 70]))


// function findShortestWord(str) {
//     let words = str.split(" ");
//     let shortest = words[0];
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length < shortest.length) {
//             shortest = words[i];
//         }
//     }
//     return shortest;

// }

// console.log(findShortestWord("i love my mom sooooo much")); // "i"


// function getPosts(userId) {
//     document.getElementById("posts").innerHTML = `<h4 class="text-center"><i class="reload fa-solid fa-rotate-right text-primary"></i></h4>`
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json()
//             }
//         })
//         .then((post) => {
//             document.getElementById("posts").innerHTML = ""
//             post.map((el) => {
//                 document.getElementById("posts").innerHTML += `
//                 <li class="bg-light p-3 text-secondary rounded">
//                 ${el.title}
//                 <hr/>
//                 ${el.body}
//                 </li>
//                 `
//             })
//         }).catch(() => {
//             document.getElementById("posts").innerHTML = `
//             <li class="bg-light p-3 text-center text-secondary rounded">
//             <h1>Sorry The Data Is Not Found</h1>
//             </li>
//         `;
//         })
// }





// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {
//             if (response.ok) {
//                 return response.json()
//             }
//         })
//         .then((user) => {
//             document.getElementById("users").innerHTML = ""
//             user.map((el) => {
//                 document.getElementById("users").innerHTML += `
//                     <li class="name bg-success-subtle p-2 rounded text-success fw-bold" onClick="clicked(${el.id})">
//                     ${el.name}
//                     </li>
//                 `
//             })
//             document.getElementsByClassName("name")[0].classList.add("selected");
//             selectedId = 1;
//             getPosts(1)
//         }).catch(() => {
//             document.getElementById("users").innerHTML = `<h4 class="text-center">Loading...</h4>`
//         })

// }

// getUsers()

// let selectedId = 1;
// function clicked(id) {
//     let allUsers = document.getElementsByClassName("name");

//     for (let i = 0; i < allUsers.length; i++) {
//         allUsers[i].classList.remove("selected");
//     }

//     if (selectedId === id) {
//         selectedId = 1;
//     } else {
//         selectedId = id;
//         allUsers[id - 1].classList.add("selected");
//     }

//     getPosts(selectedId);
// }

// let city
// let country
// function getData(x = "SA", y = "Makkah al Mukarramah") {
//     fetch(`https://api.aladhan.com/v1/timingsByCity?country=${x}&city=${y}`)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json()
//             }
//         })
//         .then((responseData) => {
//             let times = responseData.data.timings
//             document.getElementById("date").textContent = `${responseData.data.date.gregorian.weekday.en} / ${responseData.data.date.gregorian.date}`
//             document.getElementById("city").textContent = `${y}`
//             document.getElementById("boxs").innerHTML = `
//                 <div class="prayer-card"><div class="prayer-name">Fajr</div><div class="prayer-time">${times.Fajr}</div></div>
//                 <div class="prayer-card"><div class="prayer-name">Sunrise</div><div class="prayer-time">${times.Sunrise}</div></div>
//                 <div class="prayer-card"><div class="prayer-name">Dhuhr</div><div class="prayer-time">${times.Dhuhr}</div></div>
//                 <div class="prayer-card"><div class="prayer-name">Asr</div><div class="prayer-time">${times.Asr}</div></div>
//                 <div class="prayer-card"><div class="prayer-name">Maghrib</div><div class="prayer-time">${times.Maghrib}</div></div>
//                 <div class="prayer-card"><div class="prayer-name">Isha</div><div class="prayer-time">${times.Isha}</div></div>
//             `
//         })
//         .catch(() => {
//             document.getElementById("body").innerHTML = ""
//             document.getElementById("body").innerHTML = `<h4 class="text-center"><i class="reload fa-solid fa-rotate-right text-primary"></i></h4>`
//         })
// }
// getData()

// document.getElementById("select").addEventListener("change", function () {
//     const selectedFont = this.value;
//     let data = selectedFont.split(",")
//     country = data[0]
//     city = data[1]
//     getData(country, city)
// });

let cities = [
    "SA, Makkah al Mukarramah", "SA, Riyadh", "EG, Cairo", "AE, Dubai", "KW, KuwaitCity", "QA, Doha", "IR, Tehran", "IR, Qum", "PK, Karachi", "MY, KualaLumpur", "ID, Jakarta", "SG, Singapore", "TN, Tunis", "DZ, Algiers", "MA, Rabat", "TR, Istanbul", "FR, Paris", "GB, London", "RU, Moscow", "PT, Lisbon", "US, NewYork",
]

const select = document.getElementById("select");
select.innerHTML = cities.map(city => `<option value="${city}" class="bg-dark">${city}</option>`).join('');


function getData(country = "SA", city = "Makkah al Mukarramah") {
    fetch(`https://api.aladhan.com/v1/timingsByCity?country=${country}&city=${city}`)
        .then(res => res.ok ? res.json() : Promise.reject("Failed to load"))
        .then(data => {
            const times = data.data.timings;
            document.getElementById("date").textContent = `${data.data.date.gregorian.weekday.en} / ${data.data.date.gregorian.date}`;
            document.getElementById("city").textContent = city;
            document.getElementById("boxs").innerHTML = `
                ${["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"].map(prayer => `
                    <div class="prayer-card">
                        <div class="prayer-name">${prayer}</div>
                        <div class="prayer-time">${times[prayer]}</div>
                    </div>
                `).join('')}
            `;
        })
        .catch(() => {
            document.getElementById("boxs").innerHTML = `<h4 class="text-center w-100 "><i class="reload fa-solid fa-rotate-right text-primary"></i></h4>`;
        });
}

getData();

document.getElementById("select").addEventListener("change", function () {
    const [country, city] = this.value.split(",");
    getData(country, city);
});
