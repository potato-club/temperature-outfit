/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/timegrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
]);

module.exports = withTM({
  // your custom config goes here
});

// const withTM = require('next-transpile-modules')([
//   '@fullcalendar/common',
//   '@fullcalendar/daygrid',
//   '@fullcalendar/timegrid',
//   '@fullcalendar/interaction',
//   '@fullcalendar/react',
// ]);

// module.exports = withTM({
//   // any other next.js settings here
// });
