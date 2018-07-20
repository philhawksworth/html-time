
/*
  What's the time, Mr Wolf? (per a timezone)
*/
module.exports = function(zone) {
  const now = new Date();
  let locale = 'en-GB'; // Go figure, the default time format for the UK is 24 hours...

  // Weird countries that don't handle time in 24 hours...
  const weirdos = [
    'Pacific/Auckland',
    'Australia/Sydney',
    'Europe/London',
    'America/Los_Angeles'
  ];

  if(weirdos.indexOf(zone) > -1) {
    locale = 'en-US'
  }

  now.setTime(now.getTime() + 30000); // the build takes about 30 seconds... let's add a little buffer.

  return now.toLocaleString(locale, { timeZone: zone, hour: '2-digit', minute: '2-digit' });
};