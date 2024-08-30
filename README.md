# Keyword Alert System

## Description

The Keyword Alert System is a Node.js application designed to automate the monitoring of job listings across various websites. It utilizes the Firecrawl SDK to scrape job postings and filter them based on predefined keywords. When matching job listings are found, the system sends alerts to a specified Telegram chat using a Telegram bot.

### Features

- **Keyword-Based Filtering**: Automatically searches job listings for specified keywords, such as "developer," "javascript," and "remote."
- **Scheduled Scraping**: Uses `node-cron` to schedule the scraping process to run at regular intervals (every 30 minutes).
- **Telegram Notifications**: Sends alerts to a Telegram chat with details of new job listings that match the specified keywords.
- **Configurable**: Allows easy configuration of API keys, chat IDs, and keywords through environment variables.

### How It Works

1. **Initialization**: The application initializes the Firecrawl SDK with an API key and sets up the Telegram bot for sending notifications.
2. **Scraping Job Listings**: Periodically scrapes job listing pages for new postings.
3. **Filtering**: Filters the job postings based on the keywords defined in the code.
4. **Sending Alerts**: Constructs a message with details of the matching job listings and sends it to the specified Telegram chat.
5. **Scheduling**: Uses `node-cron` to schedule the scraping process to run every 30 minutes.

### Environment Variables

- `FIRECRAWL_API_KEY`: Your Firecrawl API key for accessing the Firecrawl services.
- `TELEGRAM_BOT_TOKEN`: The token for your Telegram bot.
- `TELEGRAM_CHAT_ID`: The chat ID where the alerts will be sent.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn (for managing dependencies)
- A Firecrawl API key
- A Telegram bot token and chat ID

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/keyword-alert-system.git
    ```
2. Navigate to the project directory:
    ```bash
    cd keyword-alert-system
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up your environment variables in a `.env` file.

5. Run the application:
    ```bash
    node index.js
    ```

This project helps automate job search alerts and can be customized for various use cases beyond job listings.
```

### Key Points:

- **Description**: Provides a clear overview of what the project does.
- **Features**: Lists the main features of the application.
- **How It Works**: Explains the workflow of the application.
- **Environment Variables**: Details the necessary environment variables.
- **Prerequisites and Installation**: Guides users on how to set up and run the project.

Feel free to adjust the description or add more details as needed!
