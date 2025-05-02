import React from "react";

const AboutLayout = ({children}) => {
    // one common use case, use in protected routing
  return (
    <>
      <div>AboutLayout Start</div>
      {children}
      <div>AboutLayout end</div>
    </>
  );
};

export default AboutLayout;
