var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item) {
  var fullname = item.firstname + ' ' + item.lastname
      console.log(fullname)
}

function myFunction() {
  persons.map(getFullName);
}
