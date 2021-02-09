import * as React from 'react';
import * as Styles from './styles';

const Cards = () => (
  <Styles.Contain>
    <Styles.Card>
      <Styles.ContainImage>
        <Styles.Image source={{uri: 'https://picsum.photos/id/703/400/300'}} />
        <Styles.Mask />
      </Styles.ContainImage>
      <Styles.Text>Teste abcabc</Styles.Text>
    </Styles.Card>
    <Styles.Card>
      <Styles.ContainImage>
        <Styles.Image source={{uri: 'https://picsum.photos/id/703/400/300'}} />
        <Styles.Mask />
      </Styles.ContainImage>
      <Styles.Text>Teste abcabc</Styles.Text>
    </Styles.Card>
    <Styles.Card>
      <Styles.ContainImage>
        <Styles.Image source={{uri: 'https://picsum.photos/id/703/400/300'}} />
        <Styles.Mask />
      </Styles.ContainImage>
      <Styles.Text>Teste abcabc</Styles.Text>
    </Styles.Card>
    <Styles.Card>
      <Styles.ContainImage>
        <Styles.Image source={{uri: 'https://picsum.photos/id/703/400/300'}} />
        <Styles.Mask />
      </Styles.ContainImage>
      <Styles.Text>Teste abcabc</Styles.Text>
    </Styles.Card>
  </Styles.Contain>
);

export default Cards;
