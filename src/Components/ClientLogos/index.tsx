import * as React from 'react';
import classNames from 'classnames';
import css from './ClientLogos.module.css';

// import BSDex from '../../assets/img/clients/boerse-stuttgart.svg';

// This was supposed to work but does not longer after switching to esbuild
// export const ClientLogos = () => (
//     <section className={css.wrapper}>
//         {clientLogos.map((client) => (
//             <img alt={`Logo: ${client.name}`} key={client.name} src={require(`../../assets/img/clients/${client.image}`)} />
//         ))}
//     </section>
// );

// Use this to generate the code below
// export const ClientLogos = () => (
//     <section>
//         {clientLogos.map((client) => (
//             <>
//                 &lt;img alt="{`Logo: ${client.name}`}" className={'{css.wrapper}'} src=
//                 {'{require("' + `../../assets/img/clients/${client.image}` + '")}'} /&gt;
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
            <img alt="Logo: Volksbank" src={require('../../assets/img/clients/vr-smart-finanz.svg')} />
            <img alt="Logo: Börse Stuttgart" src={require('../../assets/img/clients/boerse-stuttgart.svg')} />
            {/* <img alt="Logo: Börse Stuttgart" src={BSDex} /> */}
            <img alt="Logo: Porsche" src={require('../../assets/img/clients/porsche.svg')} />
            <img alt="Logo: ProSiebenSat1 Digital" src={require('../../assets/img/clients/pro7sat1digital.svg')} />
            <img alt="Logo: Zalando" src={require('../../assets/img/clients/zalando.svg')} />
            <img alt="Logo: Daimler" src={require('../../assets/img/clients/daimler.svg')} />
            <img alt="Logo: Osram" src={require('../../assets/img/clients/osram.svg')} />
            <img alt="Logo: Rocket Internet" src={require('../../assets/img/clients/rocket-internet.svg')} />
            <img alt="Logo: Handelsblatt" src={require('../../assets/img/clients/handelsblatt.svg')} />
            <img alt="Logo: Wirtschaftswoche" src={require('../../assets/img/clients/wiwo.svg')} />
            <img alt="Logo: Rheinische Post Online" src={require('../../assets/img/clients/rheinischepost.svg')} />
            <img alt="Logo: Rossmann" src={require('../../assets/img/clients/rossmann.svg')} />
            <img alt="Logo: Klarna" src={require('../../assets/img/clients/klarna.svg')} />
            <img alt="Logo: TomTom Telematics" src={require('../../assets/img/clients/tomtom.svg')} />
            <img alt="Logo: Migros" src={require('../../assets/img/clients/migros.svg')} />
            <img alt="Logo: Aperto" src={require('../../assets/img/clients/aperto.svg')} />
            <img alt="Logo: C3 – Creative Code and Content" src={require('../../assets/img/clients/c3.svg')} />
            <img alt="Logo: Fotocommunity.de" src={require('../../assets/img/clients/fotocommunity.svg')} />
            <img alt="Logo: Publicis Pixelpark" src={require('../../assets/img/clients/pixelpark.svg')} />
            <img alt="Logo: Doc Morris" src={require('../../assets/img/clients/docmorris.svg')} />
            <img alt="Logo: Sevenval Technologies GmbH" src={require('../../assets/img/clients/sevenval.svg')} />
            <img alt="Logo: Adidas Predator" src={require('../../assets/img/clients/adidas.svg')} />
            <img alt="Logo: Service Partner ONE" src={require('../../assets/img/clients/servicepartnerone.svg')} />
            <img alt="Logo: Candis GmbH" src={require('../../assets/img/clients/candis.svg')} />
            <img alt="Logo: Zeotap GmbH" src={require('../../assets/img/clients/zeotap.svg')} />
        </section>
    );
};

export default ClientLogos;
