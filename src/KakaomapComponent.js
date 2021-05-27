import React, { forwardRef, Ref } from "react";

const KakaomapComponent = forwardRef((props, ref) => {
  return (
    <div style={{ width: "100%", height: "1100px" }}>
      <div ref={ref} style={{ width: "100%", height: "100%" }} />
    </div>
  );
});

export default KakaomapComponent;
