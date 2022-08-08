import App from './components/app/app';
import Controller from './components/app/controller';
//import Viewer from './components/viewer/viewer';
import './global.css';
import Buttons from './components/app/buttons';
import Viewer from './components/viewer/viewer';
//import Drive from './components/app/drive';

const app = new App();
const buttons = new Buttons();
const view = new Viewer();
const controller = new Controller();

const startApp = async () => {
    await app.start();
    view.tableWinnersTemplate();
    buttons.addListenerButtons();
    buttons.pagination();
    buttons.addListenerDriving();
    buttons.viewGarageWinners();
    controller.paginationWinners();
    controller.sortWinners();
};

startApp();
