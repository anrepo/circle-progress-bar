const circle = document.querySelector('.progress-circle .progress');
const radius = circle.r.baseVal.value;      // радиус
const circumference = 2 * Math.PI * radius; // длина окружности

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

setProgress(87);    // set deafult values