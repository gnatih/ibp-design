const href = window.location.href;
console.log(href.indexOf("localhost") > -1 || href.indexOf("ddev") > -1);
const wp_url = href.indexOf("ddev") > -1 || href.indexOf("localhost") > -1 ? "https://www2-ibp.wp.localhost" : "https://internationalbudget.org";
const drupal_url = href.indexOf("ddev") == -1 && href.indexOf("localhost") == -1 ? "https://internationalbudget.org/obs-v2" : "https://international-budget-partnership.ddev.site:4443/open-budget-survey";

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
    url: `${wp_url}/obs-v2`,
    slug: "open-budget-survey",
    hero: "https://www2.internationalbudget.org/wp-content/uploads/2022/05/kyle-petzer-l4Ztuy0-eU8-unsplash-scaled.jpg",
    children: [
      {
        title: "Open Budget Survey",
        url: `${wp_url}/obs-v2`,
        hero: "https://www2.internationalbudget.org/wp-content/uploads/2022/05/kyle-petzer-l4Ztuy0-eU8-unsplash-scaled.jpg",
        description: "<p>The Open Budget Survey (OBS) 2021 results include country-specific findings and recommendations on budget transparency, public participation, and oversight.</p><p>Select a country on the drop down menu or via the map below to view its assessment. PDF versions of the country summaries and completed survey questionnaires can be downloaded from the country page.</p>",
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
        url: "#open-budget-survey/calculator",
      },

      {
        title: "Download Data",
        url: "#open-budget-survey/download-data",
      },

      {
        title: "Road to 61 Roadmap",
        url: "#open-budget-survey/roadmap",
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
