class SeaSlug {
  constructor() {
    this.trackingId = null;
    this.debug = false;
  }

  init({ trackingId, debug = false }) {
    if (!trackingId) {
      console.error("SeaSlug.js: Missing tracking ID.");
      return;
    }
    this.trackingId = trackingId;
    this.debug = debug;
    if (this.debug) {
      console.log("SeaSlug.js initialized with tracking ID:", trackingId);
    }
  }

  track(eventName, eventData = {}) {
    if (!this.trackingId) {
      console.error("SeaSlug.js: Tracking ID not initialized.");
      return;
    }
    const payload = {
      event: eventName,
      data: eventData,
      timestamp: new Date().toISOString(),
    };

    if (this.debug) {
      console.log("SeaSlug.js Tracking Event:", payload);
    }

    // Simulate sending data to an analytics server
    fetch("https://your-analytics-endpoint.com/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => console.error("SeaSlug.js: Failed to send event", err));
  }
}

const seaSlugInstance = new SeaSlug();
export default seaSlugInstance;
