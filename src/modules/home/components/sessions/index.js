import * as React from 'react';
import * as Styles from './styles';
import Cards from '../card'

const Sessions = ({ id = null, name = null, contents = [] }) => (
  <Styles.Contain key={id}>
    {name && <Styles.Title>{name}</Styles.Title>}
    <Cards items={contents} />
  </Styles.Contain>
);

export default Sessions;
