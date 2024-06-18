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
        src="https://public.tableau.com/views/nicholas-test/Dash?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
      ></tableau-viz>
    </div>
  );
}

export default Page;
