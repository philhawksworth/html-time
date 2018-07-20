
/*
  What's the time, Mr Wolf? (per a timezone)
*/
module.exports = function(zone) {
  let now = new Date();
  now.setTime(now.getTime() + 30000); // the build takes about 30 seconds... let's add a little buffer.
  let time = now.toLocaleString('en-US', { timeZone: zone, hour: '2-digit', minute: '2-digit' });
  return time;
}
