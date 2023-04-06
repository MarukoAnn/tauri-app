import { Routes, Navigate, Route} from 'react-router-dom';
import { Suspense, Fragment, useState, useEffect } from 'react';
// import Red
import Redirect from './Redirect'

const RouterView = (props: {route: any}) => {
    let { route } = props
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        setIsLogin(false);
    }, []);

    // 路由
    const RouterList = (route: any) => {
        return (
          <Fragment>
            {route.map((item: any, index: number) => {
              return item.component ? (
                <Route key={index} path={item.path} element={<item.component />}>
                  {item?.children ? RouterList(item.children) : null}
                </Route>
              ) : (
                <Route
                  key={index}
                  path={item.path}
                  element={<Redirect to={item.redirect} />}
                ></Route>
              ) // 配置路由重定向
            })}
          </Fragment>
        )
      }
      return (
        // <Suspense
        //   fallback={
        //     <div>
        //       <Spin size={'large'} tip="Loading..."></Spin>
        //     </div>
        //   }
        // >
          <Routes>{RouterList(route)}</Routes>
        // </Suspense>
      )

}
export default RouterView;