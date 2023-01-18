export function element_on(e, event, on_event) {
    e.addEventListener(event, async () => {
        await on_event();
    });
}
