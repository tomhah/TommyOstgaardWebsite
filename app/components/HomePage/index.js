import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css'; // TODO: Remove this;

@Cerebral()
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      canRender: false
    };
  }
  componentDidMount() {
    require.ensure([], (require) => {
      // elements = require('common/elements.css');
      this.setState({
        canRender: true
      });
    });
  }
  render() {
    if (this.state.canRender) {
      return (
        <div className={styles.wrapper}>
        </div>
      );
    }

    return null;
  }
}

export default Home;
