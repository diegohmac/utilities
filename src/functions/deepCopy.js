var userDetails = {
  name: "Mayank",
  age: 30,
  designation: "Developer",
  address: {
    street: "Rohini",
    country: "India",
  },
  showDetails: function () {
    console.log("UserName: " + this.name);
  },
};

function getDeepCopy(baseObject, destinationObject) {
  for (key in baseObject) {
    if (typeof baseObject[key] !== "object") {
      destinationObject[key] = baseObject[key];
    } else {
      destinationObject[key] = {};
      deepCopy(baseObject[key], destinationObject[key]);
    }
  }
}

const newObj = {};

getDeepCopy(userDetails, newObj);

console.log(newObj);
