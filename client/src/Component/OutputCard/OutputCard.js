/** @format */

import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
/** @format */

import React, { useContext, useEffect } from 'react';
import TodoContext from '../Context/TodoContext';
import IndividualCard from './IndividualCard';

const OutputCard = () => {
  const { getAll, todos } = useContext(TodoContext);
  useEffect(() => {
    getAll();
    //eslint-disable-next-line
  }, []);

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='12'>
          {todos.map((todo) => (
            <IndividualCard todo={todo} key={todo._id} />
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default OutputCard;
