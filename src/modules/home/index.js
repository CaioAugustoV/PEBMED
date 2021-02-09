import React from 'react';
import * as Styles from './styles';
import Header from '../../components/header';
import Sessions from './components/sessions';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../redux/ducks/books/actions';

const HomeScreen = () => {
  const books = useSelector((state) => state.books.books || []);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getAllBooks());
  }, []);

  console.log(books);
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

export default HomeScreen;
