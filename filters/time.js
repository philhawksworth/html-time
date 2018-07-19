
/*
  Leading zeroes please
*/
function pad(num){
  return `0${num}`.slice(-2);
}

/*
  What's the time, Mr Wolf? (and any timezone)
*/
module.exports = function(timezone) {
  if (timezone == "UTC") {
    timezone = 0;
  }
  var d = new Date();
  var hours = d.getHours() + timezone;
  hours = hours > 23 ? hours - 24 : hours;
  return `${pad(hours)}:${pad(d.getMinutes())}`;
}
