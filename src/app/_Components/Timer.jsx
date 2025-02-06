"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNextPray } from "../_RTK/NextPraySlice";
import moment from "moment";
const Timer = ({ data }) => {
  const dispatch = useDispatch();

  const [timerScreen, setTimerScreeen] = useState("");
  const nextPray = useSelector((s) => s.nextPray);
  const time = moment();
  const fajr = moment(data?.Fajr, "HH:mm");
  const dhuhr = moment(data?.Dhuhr, "HH:mm");
  const asr = moment(data?.Asr, "HH:mm");
  const maghrib = moment(data?.Maghrib, "HH:mm");
  const isha = moment(data?.Isha, "HH:mm");

  useEffect(() => {
    let nextPrayer = {
      next: "",
      time: "",
    };

    if (time.isBefore(fajr)) {
      nextPrayer = { next: "الفجر", time: fajr.format("HH:mm") };
    } else if (time.isBefore(dhuhr)) {
      nextPrayer = { next: "الظهر", time: dhuhr.format("HH:mm") };
    } else if (time.isBefore(asr)) {
      nextPrayer = { next: "العصر", time: asr.format("HH:mm") };
    } else if (time.isBefore(maghrib)) {
      nextPrayer = { next: "المغرب", time: maghrib.format("HH:mm") };
    } else if (time.isBefore(isha)) {
      nextPrayer = { next: "العشاء", time: isha.format("HH:mm") };
    }

    dispatch(setNextPray(nextPrayer));

    const prayerTime = moment(nextPrayer.time, "HH:mm");
    const interval = setInterval(() => {
      const diffInSeconds = prayerTime.diff(moment(), "seconds");

      if (diffInSeconds <= 0) {
        clearInterval(interval);
      } else {
        const hours = Math.floor(diffInSeconds / 3600);
        const minutes = Math.floor((diffInSeconds % 3600) / 60);
        const seconds = diffInSeconds % 60;

        setTimerScreeen(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [data, dispatch]);

  return (
    <div className="mt-5 opacity-0 ">
      <div className="w-full flex justify-between items-center py-2">
        <p className="rounded-md text-green-600 ">
          الصلاه القادمة : {nextPray?.next}{" "}
        </p>
        <h1>{moment().format("LLLL").split(" ").slice(0, 4).join(" ")}</h1>
      </div>
      <div className="bg-neutral-500 text-center w-full h-14 rounded-sm  px-1 mt-2 flex items-center justify-center">
        <p className="text-white flex items-center gap-3">
          <span className="text-2xl">{timerScreen}</span> لصلاة
          {"  "}
          {nextPray?.next}
        </p>
      </div>
    </div>
  );
};

export default Timer;
