/** @format */

import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBRow, MDBInput } from 'mdbreact';
/** @format */

import React, { useContext, useState } from 'react';
import TodoContext from '../Context/TodoContext';

const InputCard = () => {
  const [description, setDescription] = useState('');
  const { createTodo } = useContext(TodoContext);
  const handleChange = (event) => {
    setDescription(event.target.value);
  };
  // On SubmitHandler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(description);
    createTodo({ description: description });
    setDescription('');
  };
  return (
    <MDBContainer className='mt-5 mb-1'>
      <MDBRow>
        <MDBCol md='12'>
          <MDBCard md='8'>
            <MDBCardBody className='text-center'>
              <MDBCardTitle className='h2'>Add task</MDBCardTitle>
              <form action='' onSubmit={onSubmitHandler}>
                <MDBInput label='Description' type='text' value={description} onChange={handleChange} />
                <MDBBtn type='submit' rounded outline color='info'>
                  Submit
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default InputCard;
