import { NewsData, NewsInterface } from '../../types';
import './news.css';

class News implements NewsInterface {
    public draw(data: NewsData) {
        const news = data.articles.length >= 10 ? data.articles.filter((_item, idx) => idx < 10) : data.articles;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        const news_elem = document.querySelector('.news');

        news.forEach((item, idx) => {
            if (newsItemTemp) {
                const newsClone = <Element>newsItemTemp.content.cloneNode(true);
                const news__item = newsClone.querySelector('.news__item');
                const news__meta_photo = newsClone.querySelector('.news__meta-photo') as HTMLImageElement;
                const news__meta_author = newsClone.querySelector('.news__meta-author');
                const news__meta_date = newsClone.querySelector('.news__meta-date');
                const news__description_title = newsClone.querySelector('.news__description-title');
                const news__description_sourse = newsClone.querySelector('.news__description-source');
                const news__description_content = newsClone.querySelector('.news__description-content');
                const news__readmore = newsClone.querySelector('.news__read-more a');

                if (idx % 2) {
                    if (news__item) news__item.classList.add('alt');
                }

                if (news__meta_photo) {
                    news__meta_photo.style.backgroundImage = `url(${
                        item.urlToImage || 'assets/img/news_placeholder.png'
                    })`;
                }

                if (news__meta_author) {
                    news__meta_author.textContent = item.author || item.source.name;
                }
                if (news__meta_date) {
                    news__meta_date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                if (news__description_title) {
                    news__description_title.textContent = item.title;
                }

                if (news__description_sourse) {
                    news__description_sourse.textContent = item.source.name;
                }

                if (news__description_content) {
                    news__description_content.textContent = item.description;
                }
                if (news__readmore) {
                    news__readmore.setAttribute('href', item.url);
                }

                fragment.append(newsClone);
            }
        });

        if (news_elem) {
            news_elem.innerHTML = '';
            news_elem.appendChild(fragment);
        }
    }
}

export default News;
