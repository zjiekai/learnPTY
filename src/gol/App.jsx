import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getGrids: function() {
    const N = this.props.rowN * this.props.colN;
    const map = this.props.liveMap;
    return Array.from(Array(N).keys())
      .map(k => [k, !!map[k]]);
  },
  render: function() {
    return <div className="gol">
      <div className="grid-container">
        {this.getGrids().map(state =>
          <div key={state[0]} className={state[1]}></div>
        )}
      </div>
    </div>
  }
});
