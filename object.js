export class data{
    constructor( height, weight, workout, date, time, day){
        this.height = height || "N/A ",
        this.weight = weight,
        this.workout = workout
        this.date = date,
        this.time = time,
        this.day = day
    }
}

export class workoutsdata{
    constructor(workout, kgs, reps, sets) {
        this.workout = workout,
        this.kgs = kgs || "-",
        this.reps = reps || "-",
        this.sets = sets || "-"
    }
}