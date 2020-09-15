/** @format */

import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBTabContent,
  MDBTabPane,
} from 'mdbreact';
import OutputCard from '../OutputCard/OutputCard';

const Selector = () => {
  const [activeItem, setActiveItem] = useState('1');
  const toggle = (tab) => (e) => {
    if (activeItem !== tab) {
      setActiveItem(tab);
    }
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='12'>
          <MDBCard>
            <MDBCardBody>
              <MDBNav className='nav-tabs mt-5'>
                <MDBNavItem>
                  <MDBNavLink link to='#' active={activeItem === '1'} onClick={toggle('1')} role='tab'>
                    All Pending Task
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to='#' active={activeItem === '2'} onClick={toggle('2')} role='tab'>
                    All Completed Task
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to='#' active={activeItem === '3'} onClick={toggle('3')} role='tab'>
                    All Task
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={activeItem} className='mt-3'>
                <MDBTabPane tabId='1' role='tabpanel'>
                  <OutputCard />
                </MDBTabPane>
                <MDBTabPane tabId='2' role='tabpanel'>
                  <OutputCard />
                </MDBTabPane>
                <MDBTabPane tabId='3' role='tabpanel'>
                  <OutputCard />
                </MDBTabPane>
              </MDBTabContent>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Selector;
