import './sources.css';
import { ResponseData, SourcesInterface } from '../../types';

class Sources implements SourcesInterface {
    draw(data: ResponseData) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        data.sources.forEach((item) => {
            if (sourceItemTemp) {
                const sourceClone = <Element>sourceItemTemp.content.cloneNode(true);
                const sourse_name = sourceClone.querySelector('.source__item-name');
                const sourse_item = sourceClone.querySelector('.source__item');
                if (sourse_name) {
                    sourse_name.textContent = item.name;
                }
                if (sourse_item) {
                    sourse_item.setAttribute('data-source-id', item.id);
                }
                fragment.append(sourceClone);
            }
        });
        const sourses = document.querySelector('.sources');
        if (sourses) {
            sourses.append(fragment);
        }
    }

    clear(): void {
        
    }
}

export default Sources;
