export default function render(_url: string) {
    const html = /*html*/`
    <div x-data="{title: 'test'}">
        <x-component
            url="/ep/alpine-endpoint"
            x-data="{ title: title, msg: 'Content Visible!' }"
        ></x-component>
    </div>`;
    return { html }
}

