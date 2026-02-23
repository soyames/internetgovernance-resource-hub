// Utility functions for the Internet Governance Resource Hub

/**
 * Format a date in a readable format
 * @param {Date|string} date - Date to format
 * @param {string} format - Format string (default: 'en-US')
 * @returns {string} Formatted date
 */
export function formatDate(date, format = 'en-US') {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString(format, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Create a URL slug from text
 * @param {string} text - Text to convert to slug
 * @returns {string} URL-friendly slug
 */
export function createSlug(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated text
 */
export function truncateText(text, length, suffix = '...') {
    if (text.length <= length) return text;
    return text.substring(0, length).trim() + suffix;
}

/**
 * Escape HTML special characters
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
export function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, char => map[char]);
}

/**
 * Highlight text in a string
 * @param {string} text - Original text
 * @param {string} highlight - Text to highlight
 * @returns {string} HTML with highlighted text
 */
export function highlightText(text, highlight) {
    if (!highlight) return escapeHtml(text);
    const regex = new RegExp(`(${highlight})`, 'gi');
    return escapeHtml(text).replace(regex, '<mark>$1</mark>');
}

/**
 * Generate a unique ID
 * @returns {string} Unique identifier
 */
export function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if an object is empty
 * @param {object} obj - Object to check
 * @returns {boolean} True if empty
 */
export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

/**
 * Deep clone an object
 * @param {*} obj - Object to clone
 * @returns {*} Cloned object
 */
export function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (obj instanceof Object) {
        const cloned = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }
}

export default {
    formatDate,
    createSlug,
    truncateText,
    escapeHtml,
    highlightText,
    generateId,
    isEmpty,
    deepClone
};
