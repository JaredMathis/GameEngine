export function element_on_click(button, on_click) {
    let event = 'click'
    button.addEventListener(event, async () => {
        await on_click();
    });
}

