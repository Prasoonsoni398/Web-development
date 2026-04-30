// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("Success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("Success");
//     }, 4000);
//   });
// }

// console.log("fetching data1.....");
// asyncFunc().then((res) => {
//   console.log("fetching data2.....");
//     asyncFunc2().then((res) => {});
// });

// const getPromise = () =>{
//    return new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     resolve("success");
// })
// }
// let promise = getPromise();
// promise.then((res) =>{
//     console.log("promise fulfilled",res)
// });

// promise.catch((err)=>{
//     console.log("rejected",err)
// })

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     reject("Some error occured");
// })

function getData(dataId, getNextData){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("Success")
            if(getNextData)
            {
                getNextData();
            }
        }, 3000);
    })
}


//Promise Chain......


getData(1).then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log("res")
});

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }


//Callback hell


// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("getting data3...");
//     getData(3, () => {
//       console.log("getting data4...");
//       getData(4);
//     });
//   });
// });
