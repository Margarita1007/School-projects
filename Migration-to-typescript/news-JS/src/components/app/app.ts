import AppController from '../controller/controller';
import { AppInterface, NewsData, ResponseData } from '../types';
import { AppView } from '../view/appView';

class App implements AppInterface {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources');
        if (sources) {
            sources.addEventListener('click', (e) => this.controller.getNews(e, (data: NewsData) => this.view.drawNews(data)));
            this.controller.getSources((data: ResponseData) => this.view.drawSources(data));
        }
    }
}

export default App;
