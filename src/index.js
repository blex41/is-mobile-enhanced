const isMobileFunction = require('ismobilejs').default;

/**
 * Returns an isMobile Object with an added "Class" method
 * allowing to update it using custom navigator values
 */
const isMobile = (function() {
  return {
    ...isMobileFunction(),
    Class(params) {
      const safeParams = typeof params === "string" ? {
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0,
        userAgent: params
      } : params;
      Object.assign(isMobile, isMobileFunction(safeParams));
    }
  }
})();

window.isMobile = isMobile;