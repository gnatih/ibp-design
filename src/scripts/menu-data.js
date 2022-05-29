const href = window.location.href;

let wp_url = "https://internationalbudget.org";
let drupal_url = "https://internationalbudget.org/open-budget-survey";
let explorer_url = "https://survey.internationalbudget.org";

if (href.match(/(ddev|localhost)/)) {
  wp_url = "https://www2-ibp.wp.localhost";
  drupal_url = "https://international-budget-partnership.ddev.site:4443/open-budget-survey";
  explorer_url = "http://localhost:3000";
}

if (href.match(/(127.0.0.1)/)) {
  wp_url = "http://127.0.0.1:8787";
  drupal_url = "http://127.0.0.1:8787/open-budget-survey";
  explorer_url = "http://127.0.0.1:8787";
}

export const menu = [
  {
    title: "About",
    url: "https://internationalbudget.org/about-us",
    hero: "",
    slug: "about",
    children: [
      {
        title: "About Us",
        url: "https://internationalbudget.org/about-us",
      },
      {
        title: "Our Network",
        url: "https://internationalbudget.org/findgroup",
      },
      {
        title: "Our People",
        url: "https://internationalbudget.org/about-us/our-people/",
      },
      {
        title: "Our Learning",
        url: "https://internationalbudget.org/about-us/learning/",
      },
      {
        title: "Our Impact",
        url: "https://internationalbudget.org/about-us/annual-report/",
      },
    ],
  },

  {
    title: "Our Work",
    url: "https://internationalbudget.org/our-work",
    children: [
      {
        title: "Our Work",
        url: "https://internationalbudget.org/our-work",
      },
      {
        title: "Where we work",
        url: "https://internationalbudget.org/countries",
      },
    ],
  },

  {
    title: "Open Budget Survey",
    url: `${wp_url}/open-budget-survey`,
    slug: "open-budget-survey",
    children: [
      {
        title: "Open Budget Survey",
        url: `${wp_url}/open-budget-survey`,
        description: '<a href="#" class="btn btn-dark">Link to open budget survey</a>',
      },

      {
        title: "Rankings",
        url: `${drupal_url}/rankings`,
        description: "<p>The Open Budget Survey (OBS) 2021 results include country-specific findings and recommendations on budget transparency, public participation, and oversight.</p><p>Select a country on the drop down menu or via the map below to view its assessment. PDF versions of the country summaries and completed survey questionnaires can be downloaded from the country page.</p>",
        children: [],
      },

      {
        title: "Country Results",
        url: `${drupal_url}/country-results`,
      },

      {
        title: "Reports",
        url: `${drupal_url}/reports`,
      },

      {
        title: "Calculator",
        url: `${explorer_url}/#calculator`,
      },

      {
        title: "Download Data",
        url: `${explorer_url}/#download`,
      },

      {
        title: "Roadmap to 61",
        url: `${wp_url}/open-budget-survey/roadmap-to-61`,
      },
      {
        title: "Events",
        url: "https://internationalbudget.org/events/",
      },
    ],
  },

  {
    title: "Join Us",
    url: "https://internationalbudget.org/support-us/",
    children: [
      {
        title: "Join Us",
        url: "https://internationalbudget.org/support-us/",
      },
      {
        title: "Attend an Event",
        url: "https://internationalbudget.org/events/",
      },
      {
        title: "Join our Call to Action",
        url: "https://internationalbudget.org/campaign-to-open-budgets/",
      },
      {
        title: "Get Updates",
        url: "https://internationalbudget.org/library/publications/sign-up-for-ibp-e-publications/",
      },
      {
        title: "Apply for a Job",
        url: "https://internationalbudget.org/job-opportunities/",
      },
    ],
  },
  {
    title: "Publications",
    url: "https://internationalbudget.org/library/publications/",
  },
  {
    title: "Blog",
    url: "https://internationalbudget.org/blog",
  },
  {
    title: "Stories",
    url: "https://story.internationalbudget.org",
  },
  {
    title: "News",
    url: "https://internationalbudget.org/pressarchive/",
  },
];
