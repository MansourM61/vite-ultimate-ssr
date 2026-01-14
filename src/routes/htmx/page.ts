export default function render(_url: string) {
    const html = /*html*/`
    <div id="parent-div"></div>
    <button hx-get="/ep/htmx-endpoint"
        hx-trigger="click"
        hx-target="#parent-div"
        hx-swap="innerHTML">
            Click Me!
    </button>`;
    return { html }
}

