declare const window : any

export const FB_PIXEL_ID = "291208782875876";

export const pageview = () => {
  window.fbq("track", "PageView");
}

export const event = (name: string, options: any) => {
  window.fbq("track", name, options);
}
