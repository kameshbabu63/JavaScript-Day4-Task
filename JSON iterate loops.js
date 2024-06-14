

//for 

const jsonString = '{"name": "Siddiq", "age": 23, "city": "Krishnagiri"}';
const jsonObject = JSON.parse(jsonString);

for (const key in jsonObject) {
  if (jsonObject.hasOwnProperty(key)) {
    console.log(key + ": " + jsonObject[key]);
  }
}


// for-in

const jsonObject1 = {
  name: "kamesh",
  age: 23,
  city: "thiruttani"
};

for (const key in jsonObject1) {
  console.log(key + ": " + jsonObject1[key]);
}


//for-of

const jsonString2 = '{"name": "kamesh", "age": 23, "city": "thiruttani"}';
const jsonObject2 = JSON.parse(jsonString2);

for (const key of Object.keys(jsonObject2)) {
  console.log(key + ": " + jsonObject[key]);
}