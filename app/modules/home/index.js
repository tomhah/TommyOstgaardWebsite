import opened from './signals/opened';


export default () => {
  return (module) => {
    module.addState({
    });

    module.addSignals({
      opened
    });
  };
};
