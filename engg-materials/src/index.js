import React from 'react';
import ReactDOM from 'react-dom/client';
import Loading from "./Loading/Loading.js";
import {Suspense } from "react";
import reportWebVitals from './reportWebVitals';
const App=React.lazy(()=>import("./App.js"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Suspense fallback={<Loading/>}>
    <App />
</Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default root;
