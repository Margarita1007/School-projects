import DataLoader from './data-loader';
import './style.css';

const load = new DataLoader({});

const card_filter = () => {
    const data = load.getDataObj();
    //const data = dataJSON as { [key: string]: string | number }[];
    //type data = { [key: string]: string }[];
    //const data = dataJSON as Array<object>;
    const cardsName = document.querySelectorAll('.card__description_name');
    const checkboxes = document.querySelectorAll<HTMLInputElement>("input[type='checkbox']");
    const checkboxObj: { [key: string]: string[] } = {};
    //const checkboxValues = [];
    checkboxes.forEach((box) => {
        box.addEventListener('change', () => {
            const keyObj = box.name;
            const boxValue = box.id.split('-')[0];
            if (box.checked === true) {
                if (Object.prototype.hasOwnProperty.call(checkboxObj, keyObj) === false) checkboxObj[keyObj] = [];
                checkboxObj[keyObj].push(boxValue);
            } else {
                if (Object.prototype.hasOwnProperty.call(checkboxObj, keyObj) === true) {
                    checkboxObj[keyObj].splice(checkboxObj[keyObj].indexOf(boxValue), 1);
                    if (checkboxObj[keyObj].length === 0) {
                        delete checkboxObj[keyObj];
                    }
                }
            }
            //const filtered:  {[key: string]: string }[] = [];
            const checkboxKeys = Object.keys(checkboxObj);
            const filtered = data.filter((product) => {
                return checkboxKeys.every((key) => {
                    if (checkboxObj[key].length === 0) {
                        console.log('a');
                    }
                    if (Array.isArray(checkboxObj[key])) {
                        //console.log(product[key]);
                        return checkboxObj[key].includes(product[key].toLowerCase());
                        //filtered.push(product);
                    }
                    return checkboxObj[key].includes(product[key].toLowerCase());
                });
            });
            //console.log(filtered);
            const filterCard: string[] = [];
            filtered.forEach((elem) => {
                filterCard.push(elem.article);
            });
            //console.log(filtered);
            //localStorage.setItem('filter', JSON.stringify(filtered));

            cardsName.forEach((elem) => {
                const name_card = elem.textContent?.trim();
                console.log(name_card);
                //console.log(name_card);
                filtered.filter((item) => {
                    const blockCard = elem.parentElement?.parentElement;
                    if (name_card != item.name) {
                        if (blockCard != null) {
                            blockCard.classList.add('hidden');
                        }
                    }
                });
            });
        });
    })
};

export default card_filter;
