// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const withTM = require('next-transpile-modules')([
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/timegrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
]);

const withPlugins = require('next-compose-plugins');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // reactStrictMode: false,
  images: {
    domains: ['almurgynzlwuwereyhzx.supabase.co'],
    // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
  },
};

module.exports = withPlugins([withNx, withTM], nextConfig);
