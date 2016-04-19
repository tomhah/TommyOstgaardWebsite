import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';

const model = Model({
  currentPage: 'home',
  user: {}
});

export default Controller(model);
