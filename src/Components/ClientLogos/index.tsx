import * as React from 'react';
import clientLogos from './logos';
import css from './ClientLogos.module.css';

export const ClientLogos = () => (
  <section className={css.wrapper}>
    {clientLogos.map((client) => (
      <img alt={`Logo: ${client.name}`} key={client.name} src={require(`./img/${client.image}`)} />
    ))}
  </section>
);
