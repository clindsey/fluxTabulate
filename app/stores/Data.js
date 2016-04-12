import EventEmitter from 'events';
import appDispatcher from '../dispatchers/app';
import DataConstants from '../constants/Data';

const CHANGE_EVENT = 'change';

let _data = [];
let _aggregates = {};

const add = (datum) => {

  // record the order of entry
  _data.push(datum);

  const count = _aggregates[datum] || 0;
  _aggregates[datum] = count + 1;
};

const clear = () => {
  _data = [];
  _aggregates = {};
};

const remove = (id) => {
  const value = _data[id];
  const count = _aggregates[value];
  if (count > 1) {
    _aggregates[value] = count - 1;
  } else {
    delete _aggregates[value];
  }
  // preserve the order of entry
  _data.splice(id, 1);
};

const removeAll = (value) => {

  _data = _data.filter(
    datum => value !== datum
  );
  delete _aggregates[value];
};

class DataStore extends EventEmitter {
  getAll () {
    return _data;
  }

  getAggregates () {
    return _aggregates;
  }

  emitChange () {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const dataStore = new DataStore();

appDispatcher.register(function (action) {
  let value = null;
  switch (action.actionType) {
    case DataConstants.DATA_INSERT:
      value = action.value;
      add(value);
      dataStore.emitChange();
      break;
    case DataConstants.DATA_CLEAR:
      clear();
      dataStore.emitChange();
      break;
    case DataConstants.DATA_REMOVE_VALUE:
      const id = action.id;
      remove(id);
      dataStore.emitChange();
      break;
    case DataConstants.DATA_REMOVE_AGGREGATE:
      value = action.value;
      removeAll(value);
      dataStore.emitChange();
      break;
    default:
      'no op'; // eslint-disable-line no-unused-expressions
  }
});

export default dataStore;
