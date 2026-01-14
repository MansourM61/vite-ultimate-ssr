import Alpine from "alpinejs";

export default function () {
    Alpine.data("comp", () => ({
        open: false,

        toggle() {
            this.open = !this.open;
        },
    }));
}