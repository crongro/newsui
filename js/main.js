import newsSection from './newsSection.js'
import {fnNewsListTemplate, fnNewsCompanyList} from '../templates/news.js'

document.addEventListener("DOMContentLoaded", () => {
    const url = "/data/newslist.json";
    const news = new newsSection(url);
    news.init(fnNewsListTemplate, fnNewsCompanyList);
});