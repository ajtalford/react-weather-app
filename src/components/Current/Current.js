import React from "react";
import classes from "./Current.module.css";

const conditions = (props) => {
  return (
    <div className={classes.Wrapper}>
      {props.error && (
        <small className={classes.Small}>Please enter a valid city.</small>
      )}

      {props.loading && <div className={classes.Loader} />}

      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <p>
            It is currently {Math.round(props.responseObj.main.temp)} degrees
            out with {props.responseObj.weather[0].description}.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default conditions;

// import React from "react";
// import classes from "./Current.module.css";

// const current = (props) => {
//   return (
//     <div className={classes.Wrapper}>
//       {props.error && <small>Please enter a valid city.</small>}
//       {props.loading && <div>Loading...</div>}
//       {props.responseObj.cod === 200 ? (
//         <div>
//           <p>
//             <strong>In {props.responseObj.name}</strong>
//           </p>
//           <p>
//             It is {Math.round(props.responseObj.main.temp)} degrees with{" "}
//             {props.responseObj.weather[0].description}.
//           </p>
//         </div>
//       ) : null}
//     </div>
//   );
// };
// export default current;
