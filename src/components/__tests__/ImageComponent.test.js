import React from 'react'
import ImageComponent from '../ImageComponent'
import {render } from '@testing-library/react';   

describe('ImageComponent', () => {
 
 it('should render male image when gender is male', () => {
   const appElement = render(<ImageComponent gender='male' />).baseElement;
   expect(appElement).toMatchSnapshot()
   });

   it('should render female image when gender is female', () => {
    const appElement = render(<ImageComponent gender='female' />).baseElement;
    expect(appElement).toMatchSnapshot()
    });

  });