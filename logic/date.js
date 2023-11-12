var start
var end

function setWeek(){
    start = new Date()
    end = new Date()
    start.setDate(start.getDate()+1)
    end.setDate(end.getDate()+4)

    let result = "Week: " + start.toLocaleDateString()  + " - " + end.toLocaleDateString()

    document.getElementById("week").innerHTML= result
}

function changeWeek(offset){
    start.setDate(start.getDate()+offset)
    end.setDate(end.getDate()+offset)

    let result = "Week: " + start.toLocaleDateString()  + " - " + end.toLocaleDateString()

    document.getElementById("week").innerHTML= result
}
