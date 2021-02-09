import * as React from 'react';
import * as Styles from './styles';
import * as actions from '../../../../redux/ducks/books/actions';
import Favorite from '../../../../components/favorite';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Cards = ({items = []}) => {
  const favorite = useSelector((state) => state.books.favorite || {});
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const setFavorite = (id) => {
    const value = favorite[id] || false;
    dispatch(actions.setFavorite(id, !value));
  };

  return (
    <Styles.Contain>
      {items.map((res) => (
        <Styles.Card
          key={res?.id}
          onPress={() => navigation.navigate('details', {details: res})}>
          <Styles.ContainImage>
            <Styles.Image source={{uri: res?.urlImage}} />
            <Styles.Mask />
            <Styles.Animation onPress={() => setFavorite(res?.id)}>
              <Favorite id={res?.id} />
            </Styles.Animation>
          </Styles.ContainImage>
          <Styles.Text>{res?.name}</Styles.Text>
        </Styles.Card>
      ))}
    </Styles.Contain>
  );
};

export default Cards;
