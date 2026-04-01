# Retro-Game-Vault

Retro-Game-Vault is a sleek, high-performance search engine for video games, spanning everything from the 8-bit classics to modern masterpieces. Designed for gamers who want a clean, no-nonsense way to browse, compare, and save their next adventures.

---

### Core Features
- Smart Search: A high-speed search bar utilizing debounce logic to ensure smooth performance and reduced API overhead while you type.

- Platform Filtering: Quickly narrow down your hunt by platform (PC, PlayStation, Xbox, Nintendo, and more).

- Wishlist & Favorites: A dedicated "Favorites" sidebar that persists using local browser memory—no account required to start your collection.

- Compare Mode: A side-by-side spec comparison tool to help you decide which version or title deserves your time.

- Visual Grid: A responsive masonry-style grid featuring high-quality game box art and user star ratings.

---

### Built With

- Built With HTML5: Semantic structure for accessibility and SEO.

- CSS3: Custom properties (CSS variables) for easy theme management and a mobile-first Grid/Flexbox layout.

- Vanilla JavaScript: * Fetch API for asynchronous data retrieval.

- LocalStorage for the Wishlist feature.

- Intersection Observer (Optional) for lazy-loading game images.

---
### (Probable) Folder-Structure

<pre>
Retro-Game-Vault/
├── index.html        # Main entry point
├── css/
│   └── styles.css    # Grid layouts and Compare Mode UI
├── js/
│   ├── main.js       # UI Logic & Event Listeners
│   ├── api.js        # Fetch logic & Debounce
│   └── storage.js    # LocalStorage / Wishlist management
└── assets/           # Icons and placeholders
</pre>

---

### Author 

### Shivansh Sharma