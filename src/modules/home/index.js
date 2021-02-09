import React from 'react';
import * as Styles from './styles';
import Header from '../../components/header';
import Sessions from './components/sessions';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/ducks/cards/actions';

const HomeScreen = () => {
  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(actions.getData());
  }, [])

  React.useEffect(() => {
    alert(JSON.stringify(cards));
  }, [cards])
  return (
    <Styles.Contain>
      <Header />
      <Styles.Scroll>
        <Sessions />
        <Sessions />
      </Styles.Scroll>
    </Styles.Contain>
  );
};

export default HomeScreen;
