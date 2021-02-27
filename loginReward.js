let nowNoment = moment();
let points = 0,
    skin = 'black';
let currentPoint = 100;
let counter = 0;
let pointData = [100,200,400,800];
let minTime = nowNoment.format('YYYY-MM-DD');
let lastLogin = '';


const startScript = () => {
    document.getElementById("points").innerHTML = points;
    document.getElementById("skin").innerHTML = skin;
    document.getElementById("date").setAttribute("min",minTime);
}


const login = () => {
    minTime = document.getElementById("date").value;
    if(lastLogin == minTime) {
        return false;
    }
    if (lastLogin !== '' && moment(lastLogin).diff(minTime, 'days') < -1) {
        counter = 0;
    }
    lastLogin = minTime;
    if (counter == 4) {
        if (skin == 'red') {
            currentPoint = currentPoint + 100;
            counter = 1;
        } else {
            skin = 'red';
            counter = 0;
        }
    }
    else {
        currentPoint = pointData[counter];
        points = points + currentPoint;
        counter++;
    }    
    startScript();
}

startScript();
