import React from "react";
import { useRef, useEffect } from "react";
import { mount } from "dashboard/DashboardApp";

export default function DashboardApp() {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current)
  }, []);
  return <div ref={ref}></div>;
}
