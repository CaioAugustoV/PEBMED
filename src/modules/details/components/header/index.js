import * as React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {Icons} from '../../../../components/utils';
import * as Styles from './styles';
import Favorite from '../../../../components/favorite';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../../redux/ducks/books/actions';
import {useNavigation} from '@react-navigation/native';

const Header = ({id = null, url = null, title = null}) => {
  const favorite = useSelector((state) => state.books.favorite || {});
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const setFavorite = (id) => {
    const value = favorite[id] || false;
    dispatch(actions.setFavorite(id, !value));
  };

  return (
    <React.Fragment>
      <StatusBar />
      <StatusBar barStyle="light-content" />
      <Styles.Contain>
        <Styles.Image source={{uri: url}} />
        <Styles.Mask />
      </Styles.Contain>
      <Styles.Favorite onPress={() => setFavorite(id)}>
        <Favorite id={id} />
      </Styles.Favorite>
      <Styles.SafeArea>
        <Styles.Pressable onPress={() => navigation.goBack()}>
          <Icons
            name="arrow"
            color="#FFF"
            size={28}
            style={{transform: [{rotate: '180deg'}]}}
          />
        </Styles.Pressable>
        {title && <Styles.Text>{title}</Styles.Text>}
      </Styles.SafeArea>
    </React.Fragment>
  );
};

export default Header;
