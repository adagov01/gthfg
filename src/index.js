import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Test from './components/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <table>
      <tr>
          <td><Test name='Maga' age='10'/></td>
          <td><Test name='Hasan' age='58'/></td>
      </tr>
      <tr>
          <td><Test/></td>
          <td><Test/></td>
      </tr>
  </table>
);