/*
  What's the time, Mr Wolf? (and any timezone)
*/
module.exports = function(timezone) {
  if(timezone == "UTC") {
    return timezone
  }

  var zone = "UTC";
  if(timezone > 0) {
    zone = "UTC +" + timezone;
  }
  else if(timezone < 0) {
    zone = "UTC " + timezone;
  }
  return zone
}
