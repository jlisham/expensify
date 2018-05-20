import React from "react";
import ReactDOM from "react-dom";

//higher order component

const Info = props => (
  <section>
    <h1>info</h1>
    <p>some content: {props.info}</p>
  </section>
);

const ReqAuth = WrappedComponent => {
  return props => (
    <section>
      {props.isAuth && props.isPrivate && <em>private stuff follows</em>}
      {props.isAuth ? (
        <WrappedComponent {...props} />
      ) : (
        <em>sign-in is required</em>
      )}
    </section>
  );
};

const AuthNotice = ReqAuth(Info);

ReactDOM.render(
  <AuthNotice isAuth={false} isPrivate={false} info="details" />,
  document.getElementById("app")
);
