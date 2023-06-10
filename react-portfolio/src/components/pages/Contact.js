import React from 'react';
import Num from '../num'
let array = [1,2,3,4]
export default function Contact() {
  return (
    <div>
    {array.map((num)=>{
      return< Num value={num} />
    })}
    </div>
  );
}
