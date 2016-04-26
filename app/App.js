import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './App.css';
import HomePage from 'components/HomePage';

const pages = {
  'home': HomePage
};

@Cerebral({
  page: ['currentPage'],
})
class App extends React.Component {
  render() {
    const Page = pages[this.props.page];

    if (this.props.isLoading) {
      return <div className={styles.label}/>;
    }

    return <Page/>;
  }
}

export default App;
