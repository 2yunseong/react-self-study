import React from "react";

const MyChildren = (props) => {
  const { name, children } = props;

  return (
    <div>
      Props 로 받은 이름 : {name} / children 으로 받은 : {children}
    </div>
  );
};

MyChildren.defaultProps = {
  name: "default",
};

export default MyChildren;
