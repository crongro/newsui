import newsSection from './newsSection.js'
import {fnNewsListTemplate} from '../templates/news.js'

document.addEventListener("DOMContentLoaded", () => {
    const news = new newsSection();
    news.init(fnNewsListTemplate);
});