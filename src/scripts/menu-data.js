const checkURL = (testString, testArray) => testArray.some((v) => testString.indexOf(v) > -1);

export const menu = fetch("https://internationalbudget.org/wp-json/wp-api-menus/v2/menu-locations/primary")
  .then((response) => response.json())
  .then((data) => {
    if (checkURL(location.host, ["ibp.wp.test", "ddev", "localhost"])) {
      data.forEach((item) => {
        item.url = item.url.replace(/internationalbudget.org/g, location.host);

        if (item.children.length) {
          item.children.forEach((child) => {
            if (child.url.indexOf("survey.international") > -1) {
              child.url = child.url.replace(/survey.internationalbudget.org/g, "localhost:3000");
            } else if (checkURL(child.url, ["/open-budget-survey/rankings", "/open-budget-survey/country-results", "/open-budget-survey/reports"])) {
              child.url = child.url.replace(/internationalbudget.org/g, "international-budget-partnership.ddev.site:4443");
            } else {
              child.url = child.url.replace(/internationalbudget.org/g, "ibp.wp.test");
            }
          });
        }
      });
    }

    if (checkURL(location.host, ["staging2.internationalbudget.org", "pantheonsite"])) {
      data.forEach((item) => {
        item.url = item.url.replace(/internationalbudget.org/g, location.host);

        if (item.children.length) {
          item.children.forEach((child) => {
            if (child.url.indexOf("survey.international") > -1) {
              //setup heroku staging to rewrite staging urls
            } else if (checkURL(child.url, ["/open-budget-survey/rankings", "/open-budget-survey/country-results", "/open-budget-survey/reports"])) {
              child.url = child.url.replace(/internationalbudget.org/g, "dev-international-budget-partnership.pantheonsite.io");
            } else {
              child.url = child.url.replace(/internationalbudget.org/g, "staging2.internationalbudget.org");
            }
          });
        }
      });
    }

    return data;
  });
