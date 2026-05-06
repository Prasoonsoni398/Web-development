let fData = [
  {
    name: "Aarav Sharma",
    dob: "1998-04-12",
    phone: "9876543210",
    city: "Bhopal",
    profession: "Software Engineer",
  },
  {
    name: "Priya Verma",
    dob: "2001-09-25",
    phone: "9123456780",
    city: "Indore",
    profession: "Graphic Designer",
  },
  {
    name: "Rohan Gupta",
    dob: "1997-01-18",
    phone: "9988776655",
    city: "Delhi",
    profession: "Teacher",
  },
  {
    name: "Sneha Patel",
    dob: "2000-07-30",
    phone: "9090909090",
    city: "Mumbai",
    profession: "Doctor",
  },
  {
    name: "Kunal Singh",
    dob: "1999-11-05",
    phone: "9012345678",
    city: "Pune",
    profession: "Photographer",
  },
];

fData.map((element,idx)=>{
    console.log(element.phone);
})

fData.forEach((e) => {
  console.log(e["name"]);
});

console.log(fData);

console.log(fData[1]["name"]);
console.log(fData[1].name);

let obj = {
  name: "Kunal Singh",
  dob: "1999-11-05",
  phone: "9012345678",
  city: "Pune",
  profession: "Photographer",
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

let ar=[2,4,6,7,5,4,6,9,11,6,5,58,31];
ar.sort((a,b)=>b-a)
console.log(ar);


console.log(ar.find((val) => val===6));
console.log(ar.findIndex((val) => val===6));
console.log(ar.findLastIndex((val) => val===6));

 console.log(ar.filter((val) => val >6));


 fData.map((val,idx)=>{
    console.log(idx,val.phone);
    
 })