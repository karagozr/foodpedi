import React from 'react';
import { Route,RouteProps } from 'react-router-dom';

interface IAppRoute{
  component : any
  layout: any,
}


export const AppRoute = ({ component: Component,  layout: Layout, ...rest}:RouteProps&IAppRoute) => {

  Layout = (Layout === undefined) ? (props:any) => (<React.Fragment>{props.children}</React.Fragment>) : Layout;

  return (
    <Route
      {...rest}
      children={(props:any) => (
        <React.Fragment>
          <Layout>
            <Component {...props} />
          </Layout>
          </React.Fragment>
      )}
    />
  );
}
