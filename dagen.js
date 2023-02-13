const allDays = ["Maandag", "Dinsdag", "Woensdag","Donderdag","Vrijdag","Zaterdag","Zondag"];
const workDays = ["Maandag", "Dinsdag", "Woensdag","Donderdag","Vrijdag"];
const weekend = ["Zaterdag", "Zondag"];
document.getElementById("allDays").innerHTML = allDays;


document.getElementById("weekendDays").innerHTML = weekend;

document.getElementById("workDays").innerHTML = workDays;

document.getElementById("allDaysReverse").innerHTML = allDays.reverse();

document.getElementById("weekendDaysReverse").innerHTML = weekend.reverse();


document.getElementById("workDaysReverse").innerHTML = workDays.reverse();