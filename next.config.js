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
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['almurgynzlwuwereyhzx.supabase.co'],
  },
});