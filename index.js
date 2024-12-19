import {workoutField, getDate, getTime, userdata, emptytext, record} from "./data.js"
import { data, workoutsdata } from "./object.js"

const addWorkout = document.querySelector('#addWorkout')
const workouts = document.querySelector('.workouts')
const addRecord = document.querySelector('.addRecord')

//Getting data from localstorage
const dataArr = JSON.parse(localStorage.getItem("data") || "[]");
const userData = userdata
const otherData = JSON.parse(localStorage.getItem("userdata")) || userData;

//adding new workout fields
const workoutfield = workoutField
function addNewWorkout(e) {
    e.preventDefault()
    workouts.insertAdjacentHTML('beforeend', workoutfield)
}
addWorkout.addEventListener('click', addNewWorkout)

//loading name and day
const userName = document.getElementById('userName')
userName.textContent = otherData.name
const updateDay = () => {
    const day = document.getElementById('dayNum')
    day.textContent = otherData.day
}
updateDay()
const enterCon = document.querySelector(".enter-cont")

//updating name
const setnamebtn = document.getElementById('setnamebtn')
const nameinput = document.getElementById('nameinput')

const setname = (e) => {
    e.preventDefault()
    otherData.name = nameinput.value
    localStorage.setItem('userdata',JSON.stringify(otherData))
    userName.textContent = otherData.name
    enterCon.style.display = "none"
    nameinput.value = ""
} 
setnamebtn.addEventListener('click',setname)

//edit name 
const edit = document.getElementById("edit")
const editname = (e) => {
    e.preventDefault()
    enterCon.style.display = "flex"
}
edit.addEventListener('click', editname)
//validate response
const heightInput = document.querySelector("#height")
const weightInput = document.querySelector("#weight")

//getting user data in object
function addNewRecord(e) {
    e.preventDefault()
    const height = heightInput.value
    const weight = weightInput.value
    const date = getDate()
    const time = getTime()
    const day = otherData.day
  

    if( weight=="") {
        return alert("Please Enter Your weight")
    }

    const workout = document.getElementsByClassName("workout-input-con")
    console.log(workout);
    const reps = []
    for(let i = 0; i < workout.length; i++) {
        const child = workout[i].children;
        if(child[0].value == ""){
            return alert("Please enter workout name")
        }
        reps.push(new workoutsdata(child[0].value,child[1].value,child[2].value,child[3].value))
    }
    console.log(reps);
    
    const workoutdata = new data(height, weight, reps, date, time, day)
    
    console.log(workoutdata) 
    
    dataArr.push(workoutdata)
    localStorage.setItem('data',JSON.stringify(dataArr))
    otherData.day += 1
    localStorage.setItem('userdata', JSON.stringify(otherData))
    updateDay()
    document.querySelector("#height").value = ''
    document.querySelector("#weight").value = ''
    alert('Progress saved successfully')
    location.reload()
    console.log()
}
addRecord.addEventListener('click', addNewRecord)

//Progress Reset
const resetProgress = document.getElementById('resetProgress')
const reset = (e) => {
    e.preventDefault()
    if(dataArr.length == 0){
        return alert("No progress are available")
    }
    alert("All your progress will be gone")
    localStorage.clear()
    location.reload()
}
resetProgress.addEventListener('click', reset)

//rendering data 
const recordContainer = document.getElementById("record-container")
const emptycontext = emptytext
async function renderRecords() {
    if(dataArr.length === 0) {
        recordContainer.insertAdjacentHTML("beforebegin",emptycontext)
    }
    else{
        const d = dataArr
        for(let i = 0; i < dataArr.length; i++){
            const rec = record(
                d[i].height, 
                d[i].weight, 
                d[i].workout, 
                d[i].date, 
                d[i].time, 
                dataArr[i].day) 
            recordContainer.insertAdjacentHTML('beforeend',rec)
        }
    }
}

renderRecords()