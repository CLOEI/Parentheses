import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "tableau-viz": any;
    }
  }
}

function Page() {
  return (
    <div className="flex-1 flex items-center flex-col p-2">
      <tableau-viz
        id="tableauViz"
        src="https://public.tableau.com/views/tableaufilter_17186960519700/Dashboard1?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"
      ></tableau-viz>
    </div>
  );
}

export default Page;
