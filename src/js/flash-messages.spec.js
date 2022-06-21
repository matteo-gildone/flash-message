import {FlashMessage} from "./flash-messages.js"

describe("FlashMessage", () => {
    beforeEach(() => {
        document.body.innerHTML = ``;
    });

    it("should be a function", () => {
        expect(FlashMessage).toBeInstanceOf(Function);
    });
    it("should create a container", () => {
        FlashMessage({
            text: "Hello",
            position: "top-right"
        });
        const actual = document.querySelectorAll('.c-flash-message__container[data-position="top-right"]');
		const expected = 1;
		expect(actual.length).toBe(expected);
		expect(actual[0].textContent.trim()).toBe('Hello');
    });
    it("should create a container in the desired position", () => {
        ['top-left', 'top-right', 'bottom-left', 'bottom-right'].forEach(position => {
            FlashMessage({
                text: "Hello",
                position: position
            });
            const actual = document
                .querySelector(`.c-flash-message__container[data-position="${position}"]`)
                .getAttribute('data-position');
            const expected = position;
            expect(actual).toBe(expected);
        })
    });
    it("should create a flash message", () => {
        FlashMessage({
            text: "Hello",
            position: "top-right"
        });
        
        const actual = document.querySelectorAll('.c-flash-message__item');
		const expected = 1;
		expect(actual.length).toBe(expected);
		expect(actual[0].textContent.trim()).toBe('Hello');
    });
    it("should not have an icon", () => {
        FlashMessage({
            text: "Hello",
            position: "top-right"
        });
        const actual = document.querySelectorAll('.c-flash-message__icon');
		const expected = 0;
		expect(actual.length).toBe(expected);
    });
    describe("FlashMessage.success", () => {
        it("should be a function", () => {
            expect(FlashMessage.success).toBeInstanceOf(Function);
        });
        it("should create a flash message", () => {
            FlashMessage.success({
                text: "Hello",
                position: "top-right"
            });
            const actual = document.querySelectorAll('.c-flash-message__item--success');
            const expected = 1;
            expect(actual.length).toBe(expected);
            expect(actual[0].textContent.trim()).toBe('Hello');
        });
        it("should have an icon", () => {
            FlashMessage.success({
                text: "Hello",
                position: "top-right"
            });
            const actual = document.querySelectorAll('.c-flash-message__icon');
            const expected = 1;
            expect(actual.length).toBe(expected);
        });
    });
    describe("FlashMessage.fail", () => {
        it("should be a function", () => {
            expect(FlashMessage.fail).toBeInstanceOf(Function);
        });
        it("should create a flash message", () => {
            FlashMessage.fail({
                text: "Hello",
                position: "top-right"
            });
            const actual = document.querySelectorAll('.c-flash-message__item--fail');
            const expected = 1;
            expect(actual.length).toBe(expected);
            expect(actual[0].textContent.trim()).toBe('Hello');
        });
        it("should have an icon", () => {
            FlashMessage.fail({
                text: "Hello",
                position: "top-right"
            });
            const actual = document.querySelectorAll('.c-flash-message__icon');
            const expected = 1;
            expect(actual.length).toBe(expected);
        });
    });
    describe("FlashMessage.warning", () => {
        it("should be a function", () => {
            expect(FlashMessage.warning).toBeInstanceOf(Function);
        });
        it("should create a flash message", () => {
            FlashMessage.warning({
                text: "Hello",
                position: "top-right"
            });
            const actual = document.querySelectorAll('.c-flash-message__item--warning');
            const expected = 1;
            expect(actual.length).toBe(expected);
            expect(actual[0].textContent.trim()).toBe('Hello');
        });
        it("should have an icon", () => {
            FlashMessage.warning({
                text: "Hello",
                position: "top-right"
            });
            const actual = document.querySelectorAll('.c-flash-message__icon');
            const expected = 1;
            expect(actual.length).toBe(expected);
        });
    });
    describe("FlashMessage.info", () => {
        it("should be a function", () => {
            expect(FlashMessage.info).toBeInstanceOf(Function);
        });
        it("should create a flash message", () => {
            FlashMessage.info({
                text: "Hello",
                position: "top-right"
            });
            const actual = document.querySelectorAll('.c-flash-message__item--info');
            const expected = 1;
            expect(actual.length).toBe(expected);
            expect(actual[0].textContent.trim()).toBe('Hello');
        });
        it("should have an icon", () => {
            FlashMessage.info({
                text: "Hello",
                position: "top-right"
            });
            const actual = document.querySelectorAll('.c-flash-message__icon');
            const expected = 1;
            expect(actual.length).toBe(expected);
        });
    });
});