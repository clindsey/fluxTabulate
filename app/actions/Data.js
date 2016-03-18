import appDispatcher from '../dispatchers/app';
import DataConstants from '../constants/Data';

export default {
  add: (datum) => {
    appDispatcher.dispatch({
      actionType: DataConstants.DATA_INSERT,
      value: datum
    });
  },

  clear: () => {
    appDispatcher.dispatch({
      actionType: DataConstants.DATA_CLEAR
    });
  },

  removeValue: (id) => {
    appDispatcher.dispatch({
      actionType: DataConstants.DATA_REMOVE_VALUE,
      id: id
    });
  },

  removeAggregates: (value) => {
    appDispatcher.dispatch({
      actionType: DataConstants.DATA_REMOVE_AGGREGATE,
      value: value
    });
  }
};
