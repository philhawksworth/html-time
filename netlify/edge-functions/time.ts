import { Context } from "https://edge.netlify.com";
import iplocation from 'https://cdn.skypack.dev/iplocation';

// Note: rate limits!  https://github.com/Richienb/iplocation#providers

export default async (request: Request, context: Context) => {


  // determine location and probably locale from the IP address
  const location = await iplocation(context.ip);
  const locale = location.country.languages[0];
  const timezone = location.country.timezone.code

  context.log({location});

  // Generate a formatted time string
  const now = new Date();
  const time = now.toLocaleString(locale, { timeZone: timezone, hour: 'numeric', minute: 'numeric'}); 

  // Get the page content
  const response = await context.next();
  const page = await response.text();
  
  // Replace the content
  const regex = /CURRENT_TIME/i;
  const updatedPage = page.replace(regex, time);
  return new Response(updatedPage, response);

};
