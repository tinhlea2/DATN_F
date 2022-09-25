import React, { Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import {
  CircleLoader
} from 'react-spinners';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./app.routes";

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.3
};

const SuspenseLoading = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
              <div className="d-flex align-items-center flex-column px-4">
                <CircleLoader color={'#3c44b1'} loading={true} />
              </div>
              <div className="text-muted font-size-xl text-center pt-3">
                Please wait...
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Suspense fallback={<SuspenseLoading />}>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              {Object.entries(routes).map(([routeKey, routeConfig]) => {
                return <Route key={routeKey} {...routeConfig} />;
              })}

            </motion.div>
          </Suspense>
        </Switch>
      </AnimatePresence>
    </Router>
  );
};

export default AppRouter;
