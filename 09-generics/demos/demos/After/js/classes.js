"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = exports.Course = exports.Musical = exports.Documentary = exports.Performer = void 0;
class Performer {
    constructor() {
        this.name = "";
        this.email = "";
        this.role = "";
    }
    rehearse(sceneNumber) {
        console.log(`${this.name} is rehearsing scene number ${sceneNumber}.`);
    }
}
exports.Performer = Performer;
class Video {
    get producer() {
        return this._producer.toUpperCase();
    }
    set producer(newProducer) {
        this._producer = newProducer;
    }
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._producer = '';
        console.log('Creating a new Video...');
    }
    printItem() {
        console.log(`${this.title} was released in ${this.year}.`);
        console.log(`Medium: ${Video.medium}`);
    }
}
Video.medium = 'Audio/Visual';
class Documentary extends Video {
    constructor(newTitle, newYear, subject) {
        super(newTitle, newYear);
        this.subject = subject;
    }
    printItem() {
        super.printItem();
        console.log(`Subject: ${this.subject} (${this.year})`);
    }
    printCredits() {
        console.log(`Producer: ${this.producer}`);
    }
}
exports.Documentary = Documentary;
let Musical = class extends Video {
    printCredits() {
        console.log(`Musical credits: ${this.producer}`);
    }
};
exports.Musical = Musical;
class Course extends class {
    constructor() {
        this.title = '';
    }
} {
    constructor() {
        super(...arguments);
        this.subject = '';
    }
}
exports.Course = Course;
class Favorites {
    constructor() {
        this._items = new Array();
    }
    add(item) {
        this._items.push(item);
    }
    getFirst() {
        return this._items[0];
    }
    find(title) {
        return this._items.filter(item => item.title === title)[0];
    }
    printTitles() {
        this._items.forEach(item => console.log(item.title));
    }
}
exports.Favorites = Favorites;
