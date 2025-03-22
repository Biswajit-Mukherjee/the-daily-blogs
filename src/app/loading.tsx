import * as React from "react";

const Loading: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-muted flex items-center justify-center">
      <div className="loader" />
    </div>
  );
};

export default Loading;
