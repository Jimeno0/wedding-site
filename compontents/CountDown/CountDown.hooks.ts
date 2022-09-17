import { useEffect, useState } from 'react';

export const useCountDown = () => {
  const [countDownDiff, setCountDownDiff] = useState({
    months: 0,
    days: 0,
    minutes: 0,
    hours: 0,
  });
  useEffect(() => {
    const getTimeDiff = () => {
      const weddingHour = 19;
      const weddingDay = 15;
      const weddingMonth = 7;
      const now = new Date();
      const minutes = 60 - now.getMinutes();
      const monthDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

      const getHours = () => {
        let sustractinHours = minutes === 0 || minutes === 60 ? now.getHours() : now.getHours() + 1;
        let diffHours = weddingHour - sustractinHours;
        if (diffHours < 0) diffHours += 24;
        return diffHours;
      };

      const hours = getHours();

      const getDays = () => {
        let sustractinDays = hours > 19 ? now.getDate() + 1 : now.getDate();
        let diffDays = weddingDay - sustractinDays;
        if (diffDays < 0) diffDays = weddingDay + (monthDays - sustractinDays);
        return diffDays;
      };

      const days = getDays();

      const getMonths = () => {
        let sustractinMonths = days > 15 ? now.getMonth() + 2 : now.getMonth() + 1;
        let diffMonths = weddingMonth - sustractinMonths;
        if (diffMonths < 0) diffMonths = weddingMonth + (12 - sustractinMonths);
        return diffMonths;
      };
      const months = getMonths();

      return {
        minutes,
        hours,
        days,
        months,
      };
    };
    const diff = getTimeDiff();
    setCountDownDiff(diff);
  }, []);
  return countDownDiff;
};
