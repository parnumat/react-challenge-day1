import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as box1Action from "../../../actions/learn-redux/box1.action";
export default function ReduxBox1() {
  const box1Reducer = useSelector(({ box1Reducer }) => box1Reducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 onClick={() => dispatch(box1Action.add())}>
        Box1: {box1Reducer.count1}
      </h2>
    </div>
  );
}
