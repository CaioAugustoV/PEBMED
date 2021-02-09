import * as React from 'react';
import * as Styles from './styles';

const Cards = ({items = []}) => (
  <Styles.Contain>
    {items.map((res) => (
      <Styles.Card key={res?.id}>
        <Styles.ContainImage>
          <Styles.Image
            source={{uri: res?.urlImage}}
          />
          <Styles.Mask />
        </Styles.ContainImage>
        <Styles.Text>{res?.name}</Styles.Text>
      </Styles.Card>
    ))}
  </Styles.Contain>
);

export default Cards;
