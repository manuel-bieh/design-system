import * as React from 'react';
import classNames from 'classnames';
import css from './ClientLogos.module.css';

// import BSDex from './img/boerse-stuttgart.svg';

// This was supposed to work but does not longer after switching to esbuild
// export const ClientLogos = () => (
//     <section className={css.wrapper}>
//         {clientLogos.map((client) => (
//             <img alt={`Logo: ${client.name}`} key={client.name} src={require(`./img/${client.image}`)} />
//         ))}
//     </section>
// );

// Use this to generate the code below
// export const ClientLogos = () => (
//     <section>
//         {clientLogos.map((client) => (
//             <>
//                 &lt;img alt="{`Logo: ${client.name}`}" className={'{css.wrapper}'} src=
//                 {'{require("' + `./img/${client.image}` + '")}'} /&gt;
//                 <br />
//             </>
//         ))}
//     </section>
// );

type Props = {
    className?: string;
};

export const ClientLogos = ({ className }: Props) => {
    return (
        <section className={classNames(css.wrapper, className)}>
            <img alt="Logo: Volksbank" src={require('./img/vr-smart-finanz.svg')} />
            <img alt="Logo: Börse Stuttgart" src={require('./img/boerse-stuttgart.svg')} />
            {/* <img alt="Logo: Börse Stuttgart" src={BSDex} /> */}
            <img alt="Logo: Porsche" src={require('./img/porsche.svg')} />
            <img alt="Logo: ProSiebenSat1 Digital" src={require('./img/pro7sat1digital.svg')} />
            <img alt="Logo: Zalando" src={require('./img/zalando.svg')} />
            <img alt="Logo: Daimler" src={require('./img/daimler.svg')} />
            <img alt="Logo: Osram" src={require('./img/osram.svg')} />
            <img alt="Logo: Rocket Internet" src={require('./img/rocket-internet.svg')} />
            <img alt="Logo: Handelsblatt" src={require('./img/handelsblatt.svg')} />
            <img alt="Logo: Wirtschaftswoche" src={require('./img/wiwo.svg')} />
            <img alt="Logo: Rheinische Post Online" src={require('./img/rheinischepost.svg')} />
            <img alt="Logo: Rossmann" src={require('./img/rossmann.svg')} />
            <img alt="Logo: Klarna" src={require('./img/klarna.svg')} />
            <img alt="Logo: TomTom Telematics" src={require('./img/tomtom.svg')} />
            <img alt="Logo: Migros" src={require('./img/migros.svg')} />
            <img alt="Logo: Aperto" src={require('./img/aperto.svg')} />
            <img alt="Logo: C3 – Creative Code and Content" src={require('./img/c3.svg')} />
            <img alt="Logo: Fotocommunity.de" src={require('./img/fotocommunity.svg')} />
            <img alt="Logo: Publicis Pixelpark" src={require('./img/pixelpark.svg')} />
            <img alt="Logo: Doc Morris" src={require('./img/docmorris.svg')} />
            <img alt="Logo: Sevenval Technologies GmbH" src={require('./img/sevenval.svg')} />
            <img alt="Logo: Adidas Predator" src={require('./img/adidas.svg')} />
            <img alt="Logo: Service Partner ONE" src={require('./img/servicepartnerone.svg')} />
            <img alt="Logo: Candis GmbH" src={require('./img/candis.svg')} />
            <img alt="Logo: Zeotap GmbH" src={require('./img/zeotap.svg')} />
        </section>
    );
};

export default ClientLogos;
