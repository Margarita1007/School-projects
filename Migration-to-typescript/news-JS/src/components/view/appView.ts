import { AppViewInterface, NewsData, ResponseData } from '../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements AppViewInterface {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData) {
        const values = data.articles ? data.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ResponseData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
