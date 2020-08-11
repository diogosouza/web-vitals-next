import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric) {
  metric.label === "web-vital" && console.log(metric);

  // const body = JSON.stringify(metric);
  // const url = "/__appsignal-web-vitals";

  // // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  // (navigator.sendBeacon && navigator.sendBeacon(url, body)) ||
  //   fetch(url, { body, method: "POST", keepalive: true });
}

export default MyApp;
