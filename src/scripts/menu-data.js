let apiUrl = location.hostname;
const checkURL = (testString, testArray) => testArray.some((v) => testString.indexOf(v) > -1);

if (checkURL(location.host, ["staging.rajanz2"])) {
  apiUrl = "staging2.internationalbudget.org";
}

if (checkURL(location.host, ["obs.test"])) {
  apiUrl = "ibp.wp.test";
}

export const menu = fetch(`https://${apiUrl}/wp-json/wp-api-menus/v2/menu-locations/primary`)
  .then((response) => response.json())
  .then((data) => data);
