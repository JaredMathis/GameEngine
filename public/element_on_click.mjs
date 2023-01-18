export function element_on_click(button, on_click) {
    let event = 'click'
    element_on(button, event, on_click);
}

function element_on(button, event, on_click) {
    button.addEventListener(event, async () => {
        await on_click();
    });
}

