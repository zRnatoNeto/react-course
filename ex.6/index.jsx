import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastName='Abreu'>
        <Member name='Renato' />
        <Member name='Larissa' />
        <Member name='Reinaldo' />
    </Family>
, document.getElementById('app'));