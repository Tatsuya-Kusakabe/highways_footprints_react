class BaseActionTypes {
  POST__FETCH_POSTS: 'POST__FETCH_POSTS' = 'POST__FETCH_POSTS';
  MAP__FETCH_ALL_ROUTES: 'MAP__FETCH_ALL_ROUTES' = 'MAP__FETCH_ALL_ROUTES';
  MAP__FETCH_ALL_NODES: 'MAP__FETCH_ALL_NODES' = 'MAP__FETCH_ALL_NODES';
}

export const ActionTypes = new BaseActionTypes();

type Port = {
  [key: string]: { [key: string]: string };
};

type Host = Port;

export const env = process.env.NODE_ENV || 'development';

export const Port: Port = {
  node:  { development: '3001' },
  react: { development: '3002' },
};

export const Host: Host = {
  node:  { development: `https://expwy-footprints.com:${Port.node.development}` },
  react: { development: `http://localhost:${Port.react.development}` },
};

const UrlBase = {
  googleMaps: 'http://maps.google.com/maps/api/js',
};

const UrlQuery = {
  googleMaps: `key=${process.env.GOOGLE_MAPS_KEY}&language=ja&callback=googleMapsCallback`,
};

export const Url = {
  googleMaps: `${UrlBase.googleMaps}?${UrlQuery.googleMaps}`,
};

export const TimeDiff = (datePosted: string): string => {
  const datePostedObj: Date = new Date(datePosted);
  const timestampNow: number = Date.now();
  const timestampPosted: number = Date.parse(datePosted);
  const timeDiff = timestampNow - timestampPosted;

  const unitSecond = 1000;
  const unitMinute = 1000 * 60;
  const unitHour = 1000 * 60 * 60;
  const unitDay = 1000 * 60 * 60 * 24;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (timeDiff < 60 * unitSecond) ? `${Math.floor(timeDiff / unitSecond)}s`
    : (timeDiff < 60 * unitMinute) ? `${Math.floor(timeDiff / unitMinute)}m`
    : (timeDiff < 24 * unitHour) ? `${Math.floor(timeDiff / unitHour)}h`
    : (timeDiff < 7 * unitDay) ? `${Math.floor(timeDiff / unitDay)}d`
    : `${months[datePostedObj.getUTCMonth()]} ${datePostedObj.getUTCMonth()}`;
};
