export const workoutField = `<div class="workout-input-con" id="workoutCon" ><input type="text" placeholder="workout" class="workout-input"><input type="number" placeholder="Kgs" class="workout-input"><input type="number" placeholder="reps" class="workout-input"><input type="number" placeholder="no. of sets" class="workout-input"></div>`

export const emptytext = `
<div class="emptydiv">
    <p class="emptydivtext">No record available</p>
</div>
`

export const record = (height, weight, workouts, date, time, day) => {
    console.log(workouts);
    let workhtml = ``
    for(let i = 0; i < workouts.length; i++){
        workhtml += `
        <div class="rec-workout">
            <p class="workout-name" id="wrknm" >${workouts[i].workout}</p>
            <p class="kgs"><span class="sub" >${workouts[i].kgs}</span>Kgs</p>
            <p class="reps"><span class="sub" >${workouts[i].reps}</span>reps</p>
            <p class="sets"><span class="sub" >${workouts[i].sets}</span>sets</p>
        </div>
        `
    }
    const recordCon = `
        <div class="record">
            <div class="rec-day">
                <p>${day}</p>
            </div>
            <div class="details">
                <p class="weight"><span>${weight}</span>kg</p>
                <p class="height"><span>${height}</span>cm</p>
                <div class="rec-workouts-con">
                ${workhtml}
                </div>
            </div>
            <div class="createdAt">
                <p class="date">${date}</p>
                <p class="time"><span>${time}</span></p>
            </div>
        </div>
    `
    return recordCon
}

export const getDate = () => {
    const date = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const currDate = `${date}/${month}/${year}`
    return currDate
}

export const getTime = () => {
    const d = new Date()
    const hours = d.getHours()
    const minute = d.getMinutes()
    const seconds = d.getSeconds()
    const time = `${hours}:${minute}:${seconds}`
    return time
}

export const userdata = {
    "name": 'Name',
    "day": 1
}