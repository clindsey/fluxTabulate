import React from 'react';
import DataInsert from './DataInsert';
import UniqueList from './tables/UniqueList';
import AggregateList from './tables/AggregateList';
import AsterPlot from './charts/AsterPlot';
import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';
import DataActions from '../actions/Data';
import dataStore from '../stores/Data';
import Ballot from './Ballot';

function getDataState () {
  return {
    allData: dataStore.getAll(),
    aggregateData: dataStore.getAggregates()
  };
}

export default class TabulateApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = getDataState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount () {
    dataStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    dataStore.removeChangeListener(this._onChange);
  }

  render () {
    const chartWidth = 480;
    const chartHeight = 320;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <DataInsert />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
                className="btn btn-danger"
                onClick={this._onClick}
            >{'Clear All Data'}</button>
            <br /><br />
            <Ballot />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="nav nav-tabs">
              <li className="active">
                <a
                    data-toggle="tab"
                    href="#aster-series"
                >{'Aster Series'}</a>
              </li>
              <li>
                <a
                    data-toggle="tab"
                    href="#bar"
                >{'Bar Chart'}</a>
              </li>
              <li>
                <a
                    data-toggle="tab"
                    href="#pie"
                >{'Pie Chart'}</a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                  className="tab-pane active"
                  id="aster-series"
              >
                <AsterPlot
                    allData={this.state.allData}
                    height={chartHeight}
                    width={chartWidth}
                />
              </div>
              <div
                  className="tab-pane"
                  id="bar"
              >
                <BarChart
                    aggregateData={this.state.aggregateData}
                    height={chartHeight}
                    width={chartWidth}
                />
              </div>
              <div
                  className="tab-pane"
                  id="pie"
              >
                <PieChart
                    aggregateData={this.state.aggregateData}
                    height={chartHeight}
                    width={chartWidth}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <UniqueList allData={this.state.allData} />
          </div>
          <div className="col-xs-6">
            <AggregateList aggregateData={this.state.aggregateData} />
          </div>
        </div>
      </div>
    );
  }

  _onClick () {
    DataActions.clear();
  }

  _onChange () {
    this.setState(getDataState); // eslint-disable-line react/no-set-state
  }
}
