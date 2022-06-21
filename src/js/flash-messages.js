import {DEFAULT_OPTIONS, TYPE, ICON} from "./constants";

const closeFlashMessage = (item) => {
    const container = item.parentElement;
    requestAnimationFrame(() => {
        item.classList.remove("c-flash-message__item-visible");
    });
    item.addEventListener("transitionend", () => {
        item.remove()
        if (container.hasChildNodes()) return
        container.remove()
    }, {once: true});
};

const generateFlashMessageId = ()=> Math.random().toString(36).substring(2, 9);

const createContainer = position => {
    const container = document.createElement("div");
    container.classList.add("c-flash-message__container");
    container.setAttribute("data-position", position);
    document.body.append(container);
    return container;
};

const createFlashMessageByType = type => {
    return (options) => {
        const {position, text, ...settings} = {...DEFAULT_OPTIONS, type, ...options};
        const item = createFlashMessage(text, settings);
        const container = getContainer(position);
        container.append(item);
        removeFlashMessage(item.id, settings);
    };
};

const createFlashMessage = (text, options) => {
    const item = document.createElement("div");
    const icon = options.type === 'default' ? '' : `<svg class="c-flash-message__icon c-flash-message__icon--${options.type}" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false">
    <use xlink:href="#${ICON[options.type.toUpperCase()]}"/>
</svg>`;
    item.id = `fm-${generateFlashMessageId()}`;
    item.classList.add("c-flash-message__item", `c-flash-message__item--${options.type}`);
    item.setAttribute("role", "alert");
    requestAnimationFrame(() => {
        item.classList.add("c-flash-message__item-visible");
    });
    item.innerHTML = `
  		${icon}
		<div>
			${text}
		</div>
	`;
    item.addEventListener("click", () => { closeFlashMessage(item); }, {once: true});

    return item;
};

const removeFlashMessage = (id,options) => {
    const selector = `#${id}`;
    const item = document.querySelector(selector);
    if (item) {
        setTimeout(() => {
            closeFlashMessage(item);
        }, options.autoClose);
    }
};

const getContainer = position => {
    const selector = `.c-flash-message__container[data-position="${position}"]`;
    const container = document.querySelector(selector) || createContainer(position);
    return container;
};

const FlashMessage = createFlashMessageByType(TYPE.DEFAULT);
FlashMessage.success = createFlashMessageByType(TYPE.SUCCESS);
FlashMessage.fail = createFlashMessageByType(TYPE.FAIL);
FlashMessage.warning = createFlashMessageByType(TYPE.WARNING);
FlashMessage.info = createFlashMessageByType(TYPE.INFO);

export {FlashMessage};