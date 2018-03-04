// Written by Lucas Chung in 2018 for the Baha'i Fast
// Used with the sunrise-sunset.org API
let dateCounter = 0;
let sunrises = {
  hms: [],
  value: [],
};
let sunsets = {
  hms: [],
  value: [],
};
let fastDates = [
  "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",
  "13", "14", "15", "16", "17", "18", "19", "20"
];
let lat = 40.693348;
let lng = -73.979782;
let testTime = "11:24:59 PM";

function preload() {
  for (let i = 0; i < fastDates.length; i++) {
    let url = "https://api.sunrise-sunset.org/json?lat=" + addZeroes(lat) + "&lng=" +
      addZeroes(lng) + "&date=2018-03-" + fastDates[i];
    // let url = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2018-03-21";
    loadJSON(url, logging);
    // print(url);
  }
}

function setup() {
  print("sunrises");
  console.log(sunrises.hms);
  print("sunsets");
  console.log(sunsets.hms);

  sunrises.hms.sort();
  sunrises.hms.reverse();
  sunsets.hms.sort();

  print("sunrises sorted");
  console.log(sunrises.hms);
  print("sunsets sorted");
  console.log(sunsets.hms);

  print(testTime);
  print(timeValues(testTime));
  
  // console.log(timeBreakdown);

  for (let i = 0; i < fastDates.length; i++) {
    sunrises.value[i] = timeValues(sunrises.hms[i]);
    sunsets.value[i] = timeValues(sunsets.hms[i]);
  }
  
  console.log(sunrises.value);
  console.log(sunsets.value);

  //======== drawing chart ==========
  chart();

}

function draw() {

}

function logging(ssData) {
  sunrises.hms[dateCounter] = ssData.results.sunrise;
  sunsets.hms[dateCounter] = ssData.results.sunset;

  // sunrises.hms.push(ssData.results.sunrise);
  // sunsets.hms.push(ssData.results.sunset);
  console.log(ssData);
  // print(ssData.results.sunrise);
  // print(ssData.results.sunset);
  
  dateCounter++;
}

function addZeroes(n) {
  return Number.parseFloat(n).toFixed(7);
}

function timeValues(_tt) {
  let timeBreakdown = _tt.split(':');
  timeBreakdown[3] = timeBreakdown[2].slice(-2);
  timeBreakdown[2] = timeBreakdown[2].slice(0, 2);

  // calculating time into minutes
  let newVal = (parseInt(timeBreakdown[2]) / 60) + parseInt(timeBreakdown[1]) + (parseInt(timeBreakdown[0]) * 60);
  // adding 12 hours (720 minutes) if PM
  if (timeBreakdown[3] == "PM") {
    newVal += 12 * 60;
  }
  // let newVal = _tt;
  return newVal;
}