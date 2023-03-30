import React from "react";

function Term(info) {
  return (
    <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {info.emoji}
            </span>
            <span>{info.name}</span>
          </dt>
          <dd>
            {info.meaning}
          </dd>
        </div>
  );
}

export default Term;
