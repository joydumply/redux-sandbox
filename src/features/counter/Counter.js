import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

export const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div>
			<button
				aria-label="Increment value"
				onClick={() => dispatch(increment())}
			>
				Increment
			</button>
			<span>{count}</span>
			<button
				aria-label="Decrement value"
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</button>

			<button onClick={() => dispatch(incrementByAmount(Math.floor(Math.random() * 10)))}>
				Increment by Random
			</button>
		</div>
	);
};
