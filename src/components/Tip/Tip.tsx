import React from 'react';
import './Tip.scss';

const Tip = () => {
  return (
    <div className="tip">
      <div className="tip__header">
        <span className="badge">Pro Tip</span>
      </div>
      <div className="tip__body">
        Make sure to be specific in your prompt. The more detail you give, the better the results will be!
      </div>
      <div className="tip__footer">
        Hit <span className="badge badge_muted">enter</span> to submit your prompt
      </div>
    </div>
  );
};

export default Tip;
