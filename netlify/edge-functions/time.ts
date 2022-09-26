import { Context } from "https://edge.netlify.com";
import iplocation from 'https://cdn.skypack.dev/iplocation';

// Note: rate limits!  https://github.com/Richienb/iplocation#providers

export default async (request: Request, context: Context) => {

  // determine location and probable locale from the IP address
  let location;
  let locationLabel
  try {
    location = await iplocation(context.ip);
    locationLabel = `${context.geo.city}, ${context.geo.country.name}`;
  } catch (error) {
    location = null;
    locationLabel = "London, England";
  }
  
  let locale = location?.country?.languages[0] || "en-GB";
  let timezone = location?.country?.timezone?.code || "Europe/London"
  
    
  // Generate a formatted time string
  const now = new Date();
  const time = now.toLocaleString(locale, { timeZone: timezone, hour: 'numeric', minute: 'numeric'}); 
  

  // Get the page content
  const response = await context.next();
  const page = await response.text();
  
  // Replace the content
  const regex_time = /CURRENT_TIME/gi;
  const regex_place = /CURRENT_LOCATION/gi;
  let updatedPage = page.replace(regex_time, time);
  updatedPage = updatedPage.replace(regex_place, locationLabel);
  return new Response(updatedPage, response);

};
