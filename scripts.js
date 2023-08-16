/**********************************************************************
* AFTER EACH STEP WHERE YOU WRITE CODE, EITHER LOG THE RESULT TO THE
CONSOLE USING CONSOLE.LOG(), OR CHECK THE VALUE IN THE CONSOLE BY
TYPING IT IN AND PRESSING ENTER. MAKE SURE YOU HAVE THE VALUE YOU
EXPECT! *
**********************************************************************/

/********************** Exercise 1 - Accessing Nested Values  **********************/

const car = {
  color: "black",
  model: "mustang",
  year: 1990,
  dealership: {
    name: "Ford",
    location: "123 Main St",
    employees: [
      {
        name: "Alice",
        position: "sales",
      },
      {
        name: "Bob",
        position: "sales",
      },
      {
        name: "Charlie",
        position: "manager",
      },
    ],
  },

  owners: [
    {
      name: "Alice",
      age: 32,
      pets: [
        {
          type: "cat",
          name: "Gracey",
          age: 12,
        },
        {
          type: "dog",
          name: "Fred",
          age: 5,
        },
      ],
    },
    {
      name: "Bob",
      age: 27,
      pets: [
        {
          type: "cat",
          name: "Angel",
          age: 18,
        },
        {
          type: "cat",
          name: "Kerry",
          age: 14,
        },
      ],
    },
  ],

  features: ["radio", "seat warmers", "power windows"],
};

// Log the following values so that they print in the console without
// writing the values directly—access them from the car object.

// For example, if you want to log the color of the car, you would
// write `console.log(car.color);`, or write `car.color` directly into
// the console. You would _not_ write `console.log("black");` or
// `black` directly into the console. (You can, but that's not the
// point of this exercise, and this an easy but unhelpful confusion to
// have.)

// 1. The model of the car.
// 2. The year the car was made.
// 3. The name of the dealership.
// 4. The location of the dealership.
// 5. The last feature listed for the car. (Keep in mind that the
// extra space before the features key is a common practice for
// readability and doesn't affect the evaluation of the object at
// all!)
// 6. The name of the manager at the dealership.
// 7. The name of the first owner of the car.
// 8. The age of the first owner of the car.
// 9. The type of pet Fred is.

/********************** Exercise 2 - Accessing Values (Collections) **********************/

var catsForAdoption = [
  { name: "Angel", age: 18, furColor: "grey" },
  { name: "Kerry", age: 14, furColor: "red" },
  { name: "Gracey", age: 12, furColor: "white" },
];

// Follow the same instructions as in Exercise 1, but for the
// catsForAdoption array.

// Log the name of the first cat so that it prints in the console.

// Log the string "Gracey is a 12 year old cat with white fur." so
// that it prints in the console. Make sure to use the values from the
// Gracey object for the dynamic values, and don't just type the
// string yourself! (The words "is a" and "year old cat with" are
// static and should be typed as is.) Hint: reseach string
// concatenation if you're rusty on how to put values into strings.
// Or, for a more advanced syntax, research and use string
// interpolation.

// Log the string "Gracey, Angel, and Kerry are ready to be adopted!"
// to the console. Same note from above about dynamic and static
// values.

/********************** Exercise 3 - Changing Values In Nested Objects **********************/

const person = {
  name: "Alice",
  age: 32,
  occupation: "programmer",
  address: {
    city: "New York",
    zipCode: "10001",
  },

  contact: {
    email: "alice@example.com",
    phone: "123-456-7890",
  },

  pets: [
    {
      type: "cat",
      name: "Gracey",
      age: 12,
    },
    {
      type: "dog",
      name: "Fred",
      age: 5,
    },
  ],
};

// For the following instructions, you will be changing the values of
// the person object. You will not be changing the code above, but you
// will be writing code below that will change the values of the
// person object.

// For each instruction, log the person object so that it prints in
// the console to make sure your changes worked.

// Change the person's name to "Bob" and their age to 27.

// Now, change the person's email address to "bob@example.com" and the
// phone number to "987-654-3210".

// Now, change the person's zip code to "60601".

// Now, change the person's name to "Charlie".

// Now, change the person's email address to "charlie@example.com".

// Now, change Fred to be a 6-year-old rat and Gracey to be a
// 4-year-old lizard.

/********************** Exercise 4 - Accessing Values (Deeply Nested Objects) **********************/

// The following data is a real response from the Weather API service.

// Get a sense of the "shape" of the object. What properties does it have? Does it have any nested objects or arrays?

// When you're done looking it over, the instructions for the exercise are below the object.

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

// Using the data from the weatherResponse object, add the following
// values to the variables below:

// 1. The current temperature.
// 2. The current visibility.
// 3. The hourly weather description.
// 4. The daily moon phase.

// Please do not assign the values directly, but access them from the
// weatherResponse object.

// For example, if you were asked to assign the value of the timezone
// to a variable, you would write `let timezone = weatherResponse.timezone;`,
// not `let timezone = "America/Chicago";`.

// Here are the variables you will add the above values to:

let currentTemperature;
let currentVisibility;
let hourlyWeatherDescription;
let dailyMoonPhsse;

/********************** Exercise 5 - Building Objects **********************/

// Looking at the design_profile image in the assets folder, how would
// you build an object that reflect the data collected from the user?

// Create the object below.
