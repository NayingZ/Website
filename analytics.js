/* =============================================================
   VISITOR ANALYTICS — one-file activation for the whole site.
   This file is loaded by every page (via <script src="analytics.js">).
   While the code below is commented out, analytics is OFF.
   =============================================================

   --- HOW TO ACTIVATE (Google Analytics 4) ---
   1. Go to https://analytics.google.com and sign in with a Google account.
   2. Admin (gear icon) → Create → Property. Give it your site name.
   3. Add a "Web" data stream → enter your future site URL.
   4. Copy the "Measurement ID" — it looks like  G-XXXXXXXXXX
   5. Below, do TWO things:
        a) Replace G-XXXXXXXXXX (both spots) with YOUR Measurement ID.
        b) Delete the line that says START_COMMENT and the line that
           says END_COMMENT (they wrap the code in a comment).
   6. Save this file and re-upload. After ~24 hours, sign back in to
      analytics.google.com to see who has visited:
        - Pages viewed     - Country / city
        - Devices used      - Time on each page
        - How they got there (search, direct, links)

   --- PRIVACY-FRIENDLIER ALTERNATIVE: Cloudflare Web Analytics ---
   Free, no cookies, lighter weight. Sign up at
   https://www.cloudflare.com/web-analytics/ then replace the GA snippet
   below with the small script tag Cloudflare gives you (paste it inside
   a function call so it runs at load time, or move it into each HTML
   <head> if you prefer).
   ============================================================= */

/* START_COMMENT
(function loadGoogleAnalytics() {
  const GA_ID = 'G-XXXXXXXXXX';   // ← replace with your Measurement ID

  // load gtag.js from Google
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(tag);

  // initialize tracking
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_ID);
})();
END_COMMENT */
