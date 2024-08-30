// keywordManager.js

const keywords = ['developer', 'remote', 'JavaScript', 'Node.js']; // Default keywords

/**
 * Get the current list of keywords.
 * @returns {string[]} - The list of keywords.
 */
function getKeywords() {
  return keywords;
}

/**
 * Add a new keyword to the list.
 * @param {string} keyword - The keyword to add.
 */
function addKeyword(keyword) {
  if (!keywords.includes(keyword)) {
    keywords.push(keyword);
  }
}

/**
 * Remove a keyword from the list.
 * @param {string} keyword - The keyword to remove.
 */
function removeKeyword(keyword) {
  const index = keywords.indexOf(keyword);
  if (index > -1) {
    keywords.splice(index, 1);
  }
}

export { getKeywords, addKeyword, removeKeyword };

