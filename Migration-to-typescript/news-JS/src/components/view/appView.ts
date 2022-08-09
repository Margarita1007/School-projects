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

    public drawNews(data: NewsData) {
        this.news.draw(data);
    }

    public drawSources(data: ResponseData) {
        this.sources.draw(data);
    }
}

export default AppView;
