import './style/index.less'

import GameControl from './modules/GameControl'

const gm = new GameControl();
gm.init();






if ((module as any).hot) {
  (module as any).hot.accept()
}