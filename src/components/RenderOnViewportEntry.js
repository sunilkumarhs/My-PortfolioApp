import React, { useRef } from "react";
import useFirstViewportEntry from "./UseFirstViewportEntry";
import { Suspense } from "react";
import ShimmerUI from "./insideComponents/ShimmerUi";

const RenderOnViewportEntry = ({
  children,
  threshold = 0,
  root = null,
  rootMargin = "0px 0px 0px 0px",
  ...wrapperDivProps
}) => {
  const ref = useRef();
  const entered = useFirstViewportEntry(ref, { threshold, root, rootMargin });
  return (
    <div {...wrapperDivProps} ref={ref}>
      {entered && <Suspense fallback={<ShimmerUI />}>{children}</Suspense>}
    </div>
  );
};

export default RenderOnViewportEntry;
