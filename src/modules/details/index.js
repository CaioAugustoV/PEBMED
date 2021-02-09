import * as React from 'react';
import * as Styles from './styles';
import {useRoute} from '@react-navigation/native';
import Header from './components/header';

const DetailsScreen = () => {
  const route = useRoute();
  const details = route?.params?.details || null;
  console.log(details);
  return (
    <Styles.Contain>
      <Styles.Scroll>
        <Header
          id={details?.id}
          url={details?.urlImage}
          title={details?.name}
        />
        <Styles.Texts>
          <Styles.Title>DESCRIÇÃO</Styles.Title>
          <Styles.Text margin>{details?.description}</Styles.Text>
          <Styles.Title>Autores</Styles.Title>
          {details?.authors?.map((res, i) => (
            <Styles.Text key={i}>{res.name}</Styles.Text>
          ))}
        </Styles.Texts>
      </Styles.Scroll>
    </Styles.Contain>
  );
};

export default DetailsScreen;
