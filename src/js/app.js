import {FlashMessage} from "./flash-messages.js"

document.querySelector("button").addEventListener("click", () => {
    FlashMessage({
        text: "Hello default",
        position: "top-right",
        autoClose: 1000,
    });
    FlashMessage.success({
        text: "Hello Success",
        position: "top-right",
        autoClose: 5000,
    });
});

setTimeout(() => {
    FlashMessage.fail({
        text: "Hello fail",
        position: "top-right",
        autoClose: 5000,
    });
}, 3000);

setTimeout(() => {
    FlashMessage.warning({
        text: "Hello warning",
        position: "top-right",
        autoClose: 5000,
    });
}, 2500);

setTimeout(() => {
    FlashMessage.info({
        text: "Hello info",
        position: "top-right",
        autoClose: 5000,
    });
}, 1500);