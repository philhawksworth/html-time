import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {

  // get geo and timezone data from Netlify's Edge
  const timezone = context?.geo?.timezone || "Europe/London";
  const locationLabel = `${context?.geo?.city}, ${context?.geo?.country?.name}` || "London, England";
  
  // What language does the user prefer
  const locale = request.headers["accept-language"] || "en-GB";
  
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
