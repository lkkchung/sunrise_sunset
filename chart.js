function chart(){
    createCanvas(2000, 2000);
    background(255);

    translate(270, 400);
    for (let i = 0; i < fastDates.length; i++) {
        stroke(0);
        strokeWeight(10);
        line(i * 50, 0, i * 50, 1440);

        stroke(255, 20, 20);
        strokeWeight(15);
        line(i * 50, sunrises.value[i], i * 50, sunsets.value[i]);
    }
}