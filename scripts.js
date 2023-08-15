/**********************************************************************
* AFTER EACH STEP WHERE YOU WRITE CODE, EITHER LOG THE RESULT TO THE
CONSOLE USING CONSOLE.LOG(), OR CHECK THE VALUE IN THE CONSOLE BY
TYPING IT IN AND PRESSING ENTER. MAKE SURE YOU HAVE THE VALUE YOU
EXPECT! *
**********************************************************************/


/********************** Exercise 3 - Accessing Values  **********************/
const car = {
  color: "black",
  model: "mustang",
  year: 1990,
  features: ["radio", "seat warmers", "power windows"],
};

// Log the string "power windows" to the console.

/********************** Exercise 4 - Accessing Values (Collections) **********************/

var catsForAdoption = [
  { name: "Angel", age: 18, furColor: "grey" },
  { name: "Kerry", age: 14, furColor: "red" },
  { name: "Gracey", age: 12, furColor: "white" },
];

// Log the string "Gracey is a 12 year old cat with white fur." to the console.

// Log the string "Gracey, Angel, and Kerry are ready to be adopted!" to the console.

/********************** Exercise 5 - Accessing Values (Nested Ojects) **********************/
const person = {
  name: "Alice",
  address: {
    city: "New York",
    zipCode: "10001",
  },
  contact: {
    email: "alice@example.com",
    phone: "123-456-7890",
  },
};

// Log Alice's city and email to the console.

/********************** Exercise 6 - Accessing Values (Nested Objects) **********************/

// The following data is a real response from the Weather API service.
let weatherResponse = {
  lat: 33.44,
  lon: -94.04,
  timezone: "America/Chicago",
  timezone_offset: -18000,
  current: {
    dt: 1684929490,
    sunrise: 1684926645,
    sunset: 1684977332,
    temp: 92.55,
    feels_like: 92.87,
    pressure: 1014,
    humidity: 89,
    dew_point: 290.69,
    uvi: 0.16,
    clouds: 53,
    visibility: 10000,
    wind_speed: 3.13,
    wind_deg: 93,
    wind_gust: 6.71,
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
  },
  hourly: [
    {
      dt: 1684926000,
      temp: 292.01,
      feels_like: 292.33,
      pressure: 1014,
      humidity: 91,
      dew_point: 290.51,
      uvi: 0,
      clouds: 54,
      visibility: 10000,
      wind_speed: 2.58,
      wind_deg: 86,
      wind_gust: 5.88,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      pop: 0.15,
    },
  ],
  daily: [
    {
      dt: 1684951200,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: "Expect a day of partly cloudy with rain",
      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },
      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },
      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
  ],
};

// Add the values to the following variables

let currentTemperature;
let currentVisibility;
let hourlyWeatherDescription;
let dailyMoonPhsse;

/********************** Exercise 7 - Building Objects **********************/
// Looking at the design_profile image in the assets folder, how would you build an object that reflect the data collected from the user?

// Create the object here:
