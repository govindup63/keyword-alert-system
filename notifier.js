// notifier.js

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file

/**
 * Send an alert notification to a specified Telegram chat using the bot API.
 * @param {string} message - The message to send in the alert.
 */
async function sendAlert(message) {
  try {
    const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const chatId = process.env.TELEGRAM_CHAT_ID; // Get the chat ID from the .env file

    // Send a POST request to the Telegram API to send a message
    await axios.post(telegramApiUrl, {
      chat_id: chatId,
      text: message,
    });

    console.log('Alert sent successfully to Telegram!');
  } catch (error) {
    console.error('Error sending alert to Telegram:', error.response ? error.response.data : error.message);
  }
}

export default sendAlert;
