import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';
function average(data) {
  return _.round(_.sum(data)/data.length);
}
export default (props)  => {
  return(
    <div>
      <Sparklines height={140} width={200} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)}&nbsp;{props.units}</div>
    </div>
  )
}
