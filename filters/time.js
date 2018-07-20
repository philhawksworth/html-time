
/*
  What's the time, Mr Wolf? (per a timezone)
*/
module.exports = function(zone) {
  let now = new Date();
  let time = now.toLocaleString('en-US', { timeZone: zone, hour: '2-digit', minute: '2-digit' });
  return time;
}
