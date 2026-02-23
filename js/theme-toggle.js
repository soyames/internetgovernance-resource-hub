/**
 * Theme Toggle - Light/Dark Mode Switch
 * Handles theme switching for the Internet Governance Resource Hub
 */

(function() {
    'use strict';

    const STORAGE_KEY = 'ig-hub-theme';
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';

    /**
     * Initialize theme based on user preference or saved preference
     */
    function initTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;

        // Check for saved theme preference
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Determine initial theme
        const theme = savedTheme || (prefersDark ? THEME_DARK : THEME_LIGHT);
        
        // Apply theme
        setTheme(theme);
        
        // Add click listener
        themeToggle.addEventListener('click', toggleTheme);
    }

    /**
     * Set the theme
     * @param {string} theme - 'light' or 'dark'
     */
    function setTheme(theme) {
        const html = document.documentElement;
        const themeToggle = document.getElementById('theme-toggle');
        
        if (theme === THEME_DARK) {
            html.setAttribute('data-theme', THEME_DARK);
            updateToggleIcon(THEME_DARK);
            localStorage.setItem(STORAGE_KEY, THEME_DARK);
        } else {
            html.removeAttribute('data-theme');
            updateToggleIcon(THEME_LIGHT);
            localStorage.setItem(STORAGE_KEY, THEME_LIGHT);
        }
    }

    /**
     * Toggle between light and dark themes
     */
    function toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme') || THEME_LIGHT;
        const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
        
        setTheme(newTheme);
        
        // Add animation effect
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.classList.add('spinning');
        setTimeout(() => {
            themeToggle.classList.remove('spinning');
        }, 600);
    }

    /**
     * Update the toggle button icon
     * @param {string} theme - current theme
     */
    function updateToggleIcon(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;

        const icon = themeToggle.querySelector('i');
        if (theme === THEME_DARK) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            themeToggle.title = 'Switch to light mode';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            themeToggle.title = 'Switch to dark mode';
        }
    }

    /**
     * Listen for system theme preference changes
     */
    function listenToSystemTheme() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', (e) => {
            // Only apply system preference if user hasn't saved a preference
            if (!localStorage.getItem(STORAGE_KEY)) {
                setTheme(e.matches ? THEME_DARK : THEME_LIGHT);
            }
        });
    }

    // Add spinning animation class
    const style = document.createElement('style');
    style.textContent = `
        .theme-toggle.spinning i {
            animation: spin 0.6s linear;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        /* Smooth transitions for dark mode */
        * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        html[data-theme="dark"] {
            color-scheme: dark;
        }

        html:not([data-theme="dark"]) {
            color-scheme: light;
        }
    `;
    document.head.appendChild(style);

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            listenToSystemTheme();
        });
    } else {
        initTheme();
        listenToSystemTheme();
    }
})();
