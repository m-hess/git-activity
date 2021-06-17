import React from 'react';
// import mhess from '../imgs/m-hess.png';
import achen from '../imgs/a-chen.png';
import amyrzabekova from '../imgs/a-myrzabekova.png.jpg';
import awalther from '../imgs/parker-walther.jpg';
import bchoy from '../imgs/b-choy.png';
import dzhong from '../imgs/d-zhong.png';
import elopes from '../imgs/e-lopes.png';
import exie from '../imgs/e-xie.png';
import etshimanga from '../imgs/EA-Tshimanga.jpg';
import ebhargava from '../imgs/e-bhargava.png';
import eseo from '../imgs/e-seo.jpg';
import echang from '../imgs/e-chang.jpeg';
// import jli from '../imgs/j-li.png'
import jwang from '../imgs/j-wang.png';
import kkapoor from '../imgs/K-Kapoor.jpg';
import sli from '../imgs/s-li.png';
// import ntsai from '../imgs/n-tsai.png';
import vwong from '../imgs/Victoria-Wong.png';
import vchen from '../imgs/v-chen.png';
import wcruzlopez from '../imgs/w-cruzlopez.jpeg';

const Home = (props) => {
  return (
    <div id="home">
      <div id="network">
        <img className="a-chen" src={achen} alt="a-chen" />
        <img className="a-myrzabekova" src={amyrzabekova} alt="a-myrzabekova" />
        <img className="a-walther" src={awalther} alt="a-walther" />
        <img className="b-choy" src={bchoy} alt="b-choy" />
        <img className="d-zhong" src={dzhong} alt="d-zhong" />
        <img className="e-lopes" src={elopes} alt="e-lopes" />
        <img className="e-xie" src={exie} alt="e-xie" />
        <img className="e-tshimanga" src={etshimanga} alt="e-tshimanga" />
        <img className="e-bhargava" src={ebhargava} alt="e-bhargava" />
        <img className="e-seo" src={eseo} alt="e-seo" />
        <img className="e-chang" src={echang} alt="e-chang" />
        {/* <img className="j-li" src={jli} alt="j-li" /> */}
        <img className="j-wang" src={jwang} alt="j-wang" />
        <img className="k-kapoor" src={kkapoor} alt="k-kapoor" />
        <img className="s-li" src={sli} alt="n-tsai" />
        {/* <img className="n-tsai" src={ntsai} alt="s-li" /> */}
        <img className="v-wong" src={vwong} alt="v-wong" />
        <img className="v-chen" src={vchen} alt="v-chen" />
        <img className="w-cruz-lopez" src={wcruzlopez} alt="w-cruz-lopez" />
        {/* <img className="extra" src={extra} alt="extra" /> */}
      </div>
    </div>
  );
};

export default Home;
