import React from "react";
import {Star} from './Star.tsx';

export function Stars({count} :{count :number}):React.JSX.Element {
  const starList = [];

  if (count >= 1 && count <= 5) {
    for (let i = 1; i <= count; i++) {
      starList.push(<Star/>);
    }
  }

  return (
    <>
      <ul className="card-body-stars u-clearfix">
        {starList.map((item :React.JSX.Element) => {
          return (
            <>
              <li>{item}</li>
            </>
          )
        })}
      </ul>
    </>
  )
}
