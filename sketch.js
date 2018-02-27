function setup() {
  let url = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2018-02-27";
  loadJSON(url, logging);
}

function draw() {

}

function logging(ssData) {
  console.log(ssData);
  print(ssData.results.sunrise);
  print(ssData.results.sunset);
}