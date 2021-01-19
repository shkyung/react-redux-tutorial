import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
let prevDispatch;
let prevIncrease;
let prevDecrease;

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  // except dispatch, onIncrease and onDecrease without useCallback
  // they are being created every time it is rendered
  console.error('prevDispatch === dispatch : ', prevDispatch === dispatch);
  console.error('prevIncrease === onIncrease : ', prevIncrease === onIncrease);
  console.error('prevDecrease === onDecrease : ', prevDecrease === onDecrease);

  prevDispatch = dispatch;
  prevIncrease = onIncrease;
  prevDecrease = onDecrease;

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
