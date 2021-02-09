import React from 'react';
import * as Styles from './styles';
import Header from '../../components/header';
import Sessions from './components/sessions';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../redux/ducks/books/actions';

const Home = () => {
  const books = useSelector((state) => state.books.books || []);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getAllBooks());
  }, []);

  return (
    <Styles.Contain>
      <Header />
      <Styles.Scroll>
        {books.map((res) => (
          <Sessions key={res?.id || null} {...res} />
        ))}
      </Styles.Scroll>
    </Styles.Contain>
  );
};

export default Home;
