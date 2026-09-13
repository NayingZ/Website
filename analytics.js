/* =============================================================
   VISITOR ANALYTICS — Google Analytics 4
   Loaded by every page via <script src="analytics.js" defer>.
   Analytics stays OFF until you paste your Measurement ID below.
   =============================================================

   --- SETUP (about ten minutes) ---
   1. Go to https://analytics.google.com and sign in with a Google
      account (use a personal one you will keep, not a school account
      that may be closed when you graduate).
   2. Admin (gear, bottom left) -> Create -> Property.
      Name it anything, e.g. "Personal site". Set your time zone.
   3. Choose "Web" as the platform and add a data stream:
      enter your site URL (https://yoursite.com) and a stream name.
   4. Google shows a "Measurement ID" that looks like G-ABC1234XYZ.
      Copy it into GA_ID below, then save this file.
   5. Re-upload the site, open it once in your browser, and check
      Reports -> Realtime in Google Analytics. Your own visit should
      show up within about a minute. That is your confirmation.
   6. Recommended once it works: Admin -> Data Streams -> your stream
      -> Configure tag settings -> Show all -> Define internal traffic,
      and add your home IP so your own visits stop inflating counts.

   --- WHERE THE LOCATION DETAIL LIVES ---
   Reports -> User -> User attributes -> Demographic details, then
   switch the first column to "City". You can also build:
     Explore -> Free form -> Dimensions: City, Region, Country
                             Metrics: Sessions, Average engagement time
   That gives you city, region, country, plus how long each visitor
   stayed and which page held them.

   --- SEEING WHICH OUTREACH GOT OPENED ---
   When you send the link somewhere specific, tag it:
     https://yoursite.com/?utm_source=chla
     https://yoursite.com/?utm_source=signature
   These appear under Reports -> Acquisition -> Traffic acquisition.
   Leave the ERAS field as the plain URL.

   --- HONEST LIMITS ---
   City comes from IP geolocation, which is approximate. Hospital and
   university networks often resolve to the city of the network hub
   rather than the building, and phones on cellular data are worse.
   Google also suppresses city for very low-volume days to protect
   privacy, so expect some "(not set)" rows on a quiet site.
   Nothing here identifies an individual visitor.

   --- ONE THING TO KNOW ---
   GA4 sets cookies. If you expect visitors from the EU or UK, a
   consent notice is technically required there. For a US residency
   application audience this is a small risk, but it is the tradeoff
   for the extra detail. Cloudflare Web Analytics avoids cookies
   entirely but reports country only, not city.
   ============================================================= */

(function loadGoogleAnalytics() {
  const GA_ID = 'G-K044ZZENGD';   // Measurement ID for this site. Empty = analytics off.

  if (!GA_ID) return;                        // not configured yet
  if (location.protocol === 'file:') return; // skip local previews

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(tag);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
})();
