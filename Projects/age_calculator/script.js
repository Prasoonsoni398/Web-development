document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    const dob = document.getElementById("DOB").value;
    const curDate = document.getElementById("CurrentDate").value;

    const Age = Number(curDate.split("-")[0])-Number(dob.split("-")[0]);
    const Months = Number(curDate.split("-")[1])-Number(dob.split("-")[1]);
    const Day = Number(curDate.split("-")[2])-Number(dob.split("-")[2]);
    console.log(Age);
    

    document.getElementById("DOB").value = ""
    document.getElementById("CurrentDate").value = ""

    document.getElementById("years").innerText = Age;
    document.getElementById("months").innerText = Months;
    document.getElementById("day").innerText = Day;
    
    document.getElementById("years").style.color = "green"
    document.getElementById("months").style.color = "red"
    document.getElementById("day").style.color = "blue"
})