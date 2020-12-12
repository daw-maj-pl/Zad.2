const CCC = document.getElementById('CCC');
const PepCo = document.getElementById('PepCo');
const NeoNet = document.getElementById('NeoNet');
const MartesSport = document.getElementById('MartesSport');
const TXM = document.getElementById('TXM');
const AllShops = [CCC, PepCo, NeoNet, TXM, MartesSport];

const CCCInfo = document.getElementById('CCCInfo');
const PepCoInfo = document.getElementById('PepCoInfo');
const NeoNetInfo = document.getElementById('NeoNetInfo');
const TXMInfo = document.getElementById('TXMInfo');
const MartesSportInfo = document.getElementById('MartesSportInfo');
const AllShopsInfo = [CCCInfo, PepCoInfo, NeoNetInfo, TXMInfo, MartesSportInfo];

const hideAllShopsInfo = () => AllShopsInfo.forEach(info => (info.style.display = 'none'));

window.addEventListener('load', hideAllShopsInfo);

const moveUp = (shop, shopInfo) => {
  hideAllShopsInfo();
  [...shop.children].forEach(item => item.removeAttribute('style'));

  if (shop.classList.contains('classMoveUp')) {
    shop.classList.remove('classMoveUp');
    shop.classList.add('classMoveDown');
  } else {
    const movedUpShops = AllShops.filter(shop => shop.getAttribute('class') === 'classMoveUp');
    movedUpShops.forEach(shop => shop.classList.remove('classMoveUp'));
    movedUpShops.forEach(shop => shop.classList.add('classMoveDown'));

    shopInfo.style.display = 'block';

    shop.classList.remove('classMoveDown');
    shop.classList.add('classMoveUp');
  }
};

CCC.addEventListener('click', () => moveUp(CCC, CCCInfo));
PepCo.addEventListener('click', () => moveUp(PepCo, PepCoInfo));
NeoNet.addEventListener('click', () => moveUp(NeoNet, NeoNetInfo));
MartesSport.addEventListener('click', () => moveUp(MartesSport, MartesSportInfo));
TXM.addEventListener('click', () => moveUp(TXM, TXMInfo));