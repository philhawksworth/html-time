import { Context } from "https://edge.netlify.com";
import countriesAndTimezones from "https://cdn.skypack.dev/countries-and-timezones";
import countryLocaleMap from 'https://cdn.skypack.dev/country-locale-map';


export default async (request: Request, context: Context) => {

  const countryCode = context.geo?.country?.code;
  const cityName = context.geo?.city;

  context.log({context});


  const country = countriesAndTimezones.getCountry(countryCode);
  context.log({country});
  const locale = countryLocaleMap.getCountryByAlpha2(country.id);
  const browserlocale = locale.default_locale.replace("_", "-");
  context.log({locale});

  
  // Generate a formatted time string
  const now = new Date();
  const time = now.toLocaleString(browserlocale, { timeZone: country.timezones[0], hour: 'numeric', minute: 'numeric'}); 

  // Get the page content
  const response = await context.next();
  const page = await response.text();
  
  // Replace the content
  const regex = /CURRENT_TIME/i;
  const updatedPage = page.replace(regex, time);
  return new Response(updatedPage, response);

};
