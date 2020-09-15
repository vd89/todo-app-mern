/** @format */

import { MDBBox, MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBListGroupItem } from 'mdbreact';

import React, { useContext } from 'react';
import TodoContext from '../Context/TodoContext';

const IndividualCard = ({ todo }) => {
  const { removeTodo, modifyTodo } = useContext(TodoContext);
  const { description, isCompleted } = todo;

  return (
    <MDBCard className='mt-1 mb-1'>
      <MDBCardBody>
        <MDBListGroupItem className='mx-auto '>
          {isCompleted !== true ? description : <del>{description}</del>}
          <MDBBox display='flex' justifyContent='end' className='mx-auto'>
            <MDBBtn size='sm' color='primary' outline rounded>
              <MDBIcon far icon='edit' />
            </MDBBtn>
            <MDBBtn size='sm' rounded outline color='danger' onClick={() => removeTodo(todo._id)}>
              <MDBIcon icon='trash-alt' />
            </MDBBtn>
            <MDBBtn size='sm' rounded outline color='success' onClick={() => modifyTodo(todo._id)}>
              <MDBIcon icon='check' />
            </MDBBtn>
          </MDBBox>
        </MDBListGroupItem>
      </MDBCardBody>
    </MDBCard>
  );
};

export default IndividualCard;
