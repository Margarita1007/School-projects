import App from './components/app/app';
//import Controller from './components/app/controller';
//import Viewer from './components/viewer/viewer';
import './global.css';
import Buttons from './components/app/buttons';
//import Drive from './components/app/drive';

const app = new App();
const buttons = new Buttons();
//const drive = new Drive();
//const controller = new Controller();

const startApp = async () => {
    await app.start();
    buttons.addListenerButtons();
    buttons.pagination();
    buttons.addListenerDriving();
    buttons.viewGarageWinners();
};

startApp();
// const startApp = async () => {
//     await app.start();
//     const buttons_remove = document.querySelectorAll('.garage__track__head__buttons-remove') as NodeListOf<HTMLElement>;
//     buttons_remove.forEach((button) => {
//         app.buttonsEventRemove(button);
//     });
//     //app.buttonsEvent();
//     const button_create = document.querySelector('.main__buttons__create-create') as HTMLElement;
//     controller.addListener(button_create, 'click', async () => {
//         const dataCar = controller.readOptionsForCreateQuery();
//         const result = await app.createCar(dataCar.data);
//         console.log(result);
//         //app.buttonsEventRemove();
//     });
// };
// startApp();
