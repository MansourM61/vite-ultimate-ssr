import { html } from "typed-htmx";

export default function render() {
  const time = new Date();
  const Time = time.toLocaleTimeString("en-GB");

  return html`<p>${{ Time }}</p>`;
}
