function init(){
    const urlParams = new URLSearchParams(window.location.search);
    const employeeId = urlParams.get('id');
    
    const E = JSON.parse(localStorage.getItem(employeeId))
    console.log(E)


    document.getElementById("name").value = E.name
    console.log(document.getElementById("name").value)
    
    
    document.getElementById("email").value = E.email
    
    document.getElementById("address").value = E.address
    
    document.getElementById("name").value = E.name

    var districts = document.getElementsByClassName("districtGroup")
    
    var parentDOM = document.getElementsByClassName("workGroup")

    for(let i = 0; i< districts.length; i++){
        if(i==E.district-1){
            districts[i].checked=true
        }
    }

    
    console.log(parentDOM.length)
    document.addEventListener("DOMContentLoaded", function(e) {
    
    console.log(parentDOM.length)
    for(let i = 0; i< parentDOM.length; i++){
        for(let j =0; j< E.mandatoryDays.length; j++)
        console.log(E.mandatoryDays[j] + ' ' + parentDOM[i].value)
        if(E.mandatoryDays[j] == parentDOM[i].value){
            parentDOM[i].checked = true
        }
    }
})

    var array = []
    var parentDOM = document.getElementsByClassName("districtGroup")
    console.log(parentDOM)

    document.addEventListener("DOMContentLoaded", function(e) {
    for(let i = 0; i< parentDOM.length; i++){
        if(parentDOM[i].checked)
            array.push(parentDOM[i].value)
    }
    console.log(array)
    }
    
)


}

function save(){
    
    const urlParams = new URLSearchParams(window.location.search);
    const employeeId = urlParams.get('id');
    
    var E = JSON.parse(localStorage.getItem(employeeId))

    E.name = document.getElementById("name").value
    E.email = document.getElementById("email").value
    E.address = document.getElementById("address").value

    var districts = document.getElementsByClassName("districtGroup")

    for(let i = 0; i< districts.length; i++){
        if(districts[i].checked){
            E.district = i+1
            break;
        }
    }

    var array = []
    var parentDOM = document.getElementsByClassName("dayGroup")
    console.log(parentDOM)


    document.addEventListener("DOMContentLoaded", function(e) {
        for(let i = 0; i< parentDOM.length; i++){
            if(parentDOM[i].checked)
                array.push(parentDOM[i].value)
        }
        
    console.log(array)
    })
    console.log(E)

    localStorage.setItem(employeeId,JSON.stringify(E))
}

