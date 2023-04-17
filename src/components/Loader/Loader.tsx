import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    0: "#FF5F6D",
    "1.0": "#FF5F6D",
  },
});

const Loader: React.FC = ({ delay = 300 }: { delay?: number }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return show ? <TopBarProgress /> : null;
};

export default Loader;
