// scraper.js
import FirecrawlApp from '@mendable/firecrawl-js';
import dotenv from 'dotenv';

dotenv.config();

const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });

/**
 * Scrape job listings from a given URL.
 * @param {string} url - The URL to scrape.
 * @param {string[]} keywords - The list of keywords to search for in the scraped content.
 * @returns {Promise<string[]>} - A list of job listings containing the keywords.
 */
async function scrapeJobs(url, keywords) {
  try {
    const scrapeResponse = await app.scrapeUrl(url, {
      formats: ['html'], // Scrape the HTML content to search for keywords
    });

    if (scrapeResponse && scrapeResponse.html) {
      const htmlContent = scrapeResponse.html;
      const matchedJobs = keywords.filter(keyword => htmlContent.includes(keyword));
      return matchedJobs.length > 0 ? matchedJobs : null;
    }
  } catch (error) {
    console.error('Error scraping the URL:', error);
    return null;
  }
}

export default scrapeJobs;
