const Sitemap = require("sitemap");
const fs = require("fs");
const path = require("path");

const routes = [
  "/",
  "/aboutus",
  "/about",
  "/counselingRegForm",
  // Add more routes as needed
];

const host = "https://admissionvidya.com"; // Replace with your actual domain

const sitemap = Sitemap.createSitemap({
  hostname: host,
  urls: routes.map((route) => ({
    url: route,
    changefreq: "weekly",
    priority: 0.8,
  })),
});

const sitemapPath = path.join(__dirname, "public", "sitemap.xml"); // Adjust the path based on your project structure

fs.writeFileSync(sitemapPath, sitemap.toString());
console.log(`Sitemap generated at ${sitemapPath}`);
