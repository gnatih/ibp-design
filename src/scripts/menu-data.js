export const menu = fetch("https://internationalbudget.org/wp-json/wp-api-menus/v2/menu-locations/primary")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data;
  });
