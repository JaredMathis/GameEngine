export function element_on_click(button, on_click) {
    button.addEventListener('click', async () => {
        await on_click();
    });
}

