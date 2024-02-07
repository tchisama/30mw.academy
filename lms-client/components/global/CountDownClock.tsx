"use client"
import React, { useState, useEffect } from 'react';

interface Props {
  targetDate: Date;
}

const CountdownClock: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft as { days?: number; hours: number; minutes: number; seconds: number };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className='flex gap-4 text-6xl text-white'>
      <div className='flex items-end flex-row-reverse'>
        <div className='flex gap-2 items-end'>
          <span>{timeLeft.days || "0"}</span>
          <div className='text-lg'>أيام </div>
        </div>
        <span className='mx-2'>.</span>
        <div className='flex items-end'>
          <span>{addLeadingZero(timeLeft.hours)}</span>
        </div>
        <span>:</span>
        <span>{addLeadingZero(timeLeft.minutes)}</span>
        <span>:</span>
        <span>{addLeadingZero(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownClock;
