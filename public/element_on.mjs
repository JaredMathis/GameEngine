export function element_on(button, event, on_event) {
    button.addEventListener(event, async () => {
        await on_event();
    });
}
