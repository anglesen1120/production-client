/**
 *
 * TechnicalDrawing
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectTask,
  makeSelectIsLoading,
} from 'containers/WorkerPage/selectors';
import { useSelector } from 'react-redux';
import { getImageUrl } from 'services/aws.service';
import Container from './Container.style';
import Img from './Img.style';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const stateSelector = createStructuredSelector({
  task: makeSelectTask(),
  isLoading: makeSelectIsLoading(),
});

export default function TechnicalDrawing() {
  const { task, isLoading } = useSelector(stateSelector);

  return (
    <Container className={isLoading && 'bp3-skeleton'}>
      <Img
        alt="Technical Drawing"
        src={getImageUrl(task.technicalDrawing)}
      ></Img>
    </Container>
  );
}
