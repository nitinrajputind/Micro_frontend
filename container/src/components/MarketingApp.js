import React from "react";
import { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from 'react-router-dom'

export default function MarketingApp() {
  const ref = useRef(null);
  const history = useHistory()
  useEffect(() => {
    const { onParentNavigate } =  mount(ref.current, {
      initialPath : history.location.pathname,
      onNavigate: ({pathname : nextPathName}) => {
        const {pathname} = history.location;
        if(pathname !== nextPathName){
          history.push(nextPathName);
        }
      },
    });
    history.listen(onParentNavigate)
  }, []);
  return <div ref={ref}></div>;
}
