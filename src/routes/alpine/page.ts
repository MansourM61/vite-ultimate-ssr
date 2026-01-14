export default function render(_url: string) {
    const html = /*html*/`
    <div x-data="{title: 'test'}">
        <x-component
            url="/alpinejs-comps/comp.html"
            x-data="{ title: title, msg: 'Content Visible!' }"
        ></x-component>
    </div>`;
    return { html }
}

