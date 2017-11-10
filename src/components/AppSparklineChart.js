/**
 * React and Redux
 */

import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

const AppSparklineChart = (props) => {
  return (
    <div>
      <h6 className="text-center font-bold">{ average(props.data) } { props.units }</h6>
      <Sparklines height={ 100 } width={ 150 } data={ props.data }>
        <SparklinesLine color={ props.color } />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
    </div>
  );
};

export default AppSparklineChart;
