var myHttp = new XMLHttpRequest();
var links = document.querySelectorAll("ul li");

var itemList = [];
function getNews(countryCode) {
  myHttp.open(
    "Get",
    `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&apiKey=bd6f0f10eb6e44de84915e05d03427d3`
  );
  myHttp.send();
  myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4) {
      itemList = JSON.parse(myHttp.response).articles;
      displayData();
    }
  });
}

getNews("us");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    var countryCode = e.target.getAttribute("countryCode");
    getNews(countryCode);
  });
}

function displayData() {
  var cartona = ``;

  for (var i = 0; i < itemList.length; i++) {
    if (itemList[i].description == null && itemList[i].urlToImage == null) {
      cartona += `
         <div class="col-md-4 my-5">
         <img height="250" src ="portfolio/1.jpg" class="w-100" />
         <h5 class="bg-light h-25 fw-bolder">${itemList[i].title
           .split(" ")
           .splice(0, 5)
           .join(" ")}</h5>
        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum rem, sunt iusto doloribus id saepe perferendis, libero voluptatum a sit, voluptatibus quo repellendus sed? Impedit cumque placeat at aperiam sapiente!</p>
            </div>
        `;
    } else {
      cartona += `
         <div class="col-md-4 mt-5">
         <img height="250" src ="${itemList[i].urlToImage}" class="w-100" />
         <h5 class="bg-light  fw-bolder">${itemList[i].title
           .split(" ")
           .splice(0, 5)
           .join(" ")}</h5>
        <p >${itemList[i].description.split(" ").splice(0, 10).join(" ")}</p>
        <a href="${itemList[i].url}">See More</a>
            </div>
        `;
    }
  }
  document.getElementById("rowData").innerHTML = cartona;
}

// destrict

// function welcome(fullName = 'system user', age = 16, salary = 5000) {

//   console.log(`hello ${fullName} ypu age is ${age} your salary is ${salary}`)

// }
// welcome('ahmed')

// let person = {
//   fullName: 'ahmed',
//   age: 16,
//   salary: 8000,
//   gender: 'male',
//   wife: {
//     name: 'mena',
//     gender: 'female',
//     father: {
//       name: 'mahmoud',
//       salary:800,
//     }
//   }
// }

// let { name, salary } = person.wife.father

// console.log(name,salary)

// let friends = ['ahmed', 'hesham', 'ali']
// let [a, b] = friends
// console.log(a,b)
