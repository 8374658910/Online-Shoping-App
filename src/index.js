import React from 'react';
import ReactDOM from 'react-dom/client';

import First from "./First";
import { BrowserRouter} from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <First/>
 </BrowserRouter>
);

