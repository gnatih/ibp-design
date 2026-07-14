import menuFixture from "./fixtures/menu-new-ia.json";

// The component renders whatever WordPress sends: labels, links and
// hierarchy come from the primary menu location via REST. The fixture
// (the new five-item IA) is used only in dev contexts: file:// previews,
// localhost, or when `window.IBP_MENU_FIXTURE = true` is set before the
// bundle loads (see preview.html). Production fetch failures fall back to
// the fixture only in those dev contexts, never on the live domains.

const isDevContext = () =>
  window.IBP_MENU_FIXTURE === true ||
  location.protocol === "file:" ||
  ["localhost", "127.0.0.1", ""].includes(location.hostname);

export const menu = (isDevContext()
  ? Promise.resolve(menuFixture)
  : fetch(`https://${location.hostname}/wp-json/wp-api-menus/v2/menu-locations/primary`).then((response) => response.json())
).catch((err) => {
  console.warn("[ibp-header] primary menu fetch failed", err);
  return isDevContext() ? menuFixture : [];
});
