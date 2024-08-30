// index.js

import FirecrawlApp from '@mendable/firecrawl-js';
import sendAlert from './notifier.js';
import dotenv from 'dotenv';
import nodeCron from 'node-cron';

dotenv.config();  // Load environment variables from .env file

const PORT = 3000;

// Initialize the Firecrawl app with API key
const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });

async function scrapeJobListings(url, keywords) {
  try {
    const scrapeResponse = await app.scrapeUrl(url, {
      formats: ['markdown', 'html'],
    });

    if (scrapeResponse && scrapeResponse.data) {
      const jobListings = scrapeResponse.data; // Adjust this based on actual data structure

      // Filter job listings based on keywords
      const matchingJobs = jobListings.filter((job) =>
        keywords.some((keyword) => job.description.toLowerCase().includes(keyword.toLowerCase()))
      );

      if (matchingJobs.length > 0) {
        // Construct message to send
        const alertMessage = matchingJobs.map(job => `Job Title: ${job.title}\nLink: ${job.url}`).join('\n\n');

        // Send alert via Telegram
        await sendAlert(`New Job Listings Found:\n\n${alertMessage}`);
      } else {
        console.log('No matching job listings found.');
      }
    } else {
      console.log('No data returned from scrape.');
    }

  } catch (error) {
    console.error('Error scraping job listings:', error.message);
  }
}

// Define your keywords
const keywords = ['developer', 'javascript', 'remote'];
const jobSites = ['https://www.google.com/about/careers/applications/jobs/results#!t=jo&jid=127025001&', 'https://anotherjobboard.com']; // Replace with actual job sites

// Run the scraping function
async function runScraping() {
  for (const site of jobSites) {
    console.log(`Scraping ${site}...`);
    await scrapeJobListings(site, keywords);
  }
}

// Schedule a task to run every 30 minutes
nodeCron.schedule('*/30 * * * *', async () => {
  console.log('Running scheduled job to scrape job postings...');
  await runScraping();
});

// If you want to run the scraping job immediately when starting the script
runScraping();
