import routes from "./route";
import { useState, useEffect, Suspense } from "react";
const routerList = [...routes];
import RouterView from "./routerView";

const ViewRouter = () => {
  return (
    <Suspense>
      <RouterView route={routerList}></RouterView>
    </Suspense>
  );
};

export default ViewRouter;
