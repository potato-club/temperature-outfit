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
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['almurgynzlwuwereyhzx.supabase.co'],
    // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
  },
});