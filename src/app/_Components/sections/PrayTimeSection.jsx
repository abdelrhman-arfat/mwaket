"use client";
import { useSelector, useDispatch } from "react-redux";
import { use, useEffect, useRef } from "react";
import { fetchTime } from "@/app/_RTK/PlaceSlice";
import moment from "moment";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PrayCard from "../PrayCard";
import Timer from "../Timer";
moment.locale("ar-kw");

const PrayTimeSection = () => {
  const mainRef = useRef(null);
  const cardRef = useRef(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.place.data.data);
  const placeMap = useSelector((state) => state.place.placeMap);
  useGSAP(() => {
    if (mainRef.current) {
      const children = Array.from(mainRef?.current?.children);
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          stagger: 0.2,
        }
      );
    }
  }, []);
  useGSAP(() => {
    if (cardRef.current) {
      const children = Array.from(cardRef?.current?.children);
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
        }
      );
    }
  }, [placeMap]);
  useEffect(() => {
    dispatch(fetchTime(placeMap));
  }, [placeMap]);

  return (
    <div id="hee" ref={mainRef} className="w-full ">
      <h1 className="text-2xl text-center font-bold text-neutral-700 uppercase opacity-0 ">
        جميع الصلاوات
      </h1>
      <Timer data={data?.timings} />
      <div
        ref={cardRef}
        className="opacity-0 w-full my-1 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2"
      >
        <PrayCard img="/fajr.jpg" name="الفجر" time={data?.timings?.Fajr} />
        <PrayCard img="/duhar.jpg" name="الظهر" time={data?.timings?.Dhuhr} />
        <PrayCard img="/asr.jpg" name="العصر" time={data?.timings?.Asr} />
        <PrayCard
          img="/mghrep.jpg"
          name="المغرب"
          time={data?.timings?.Maghrib}
        />
        <PrayCard img="/asha.jpg" name="العشاء" time={data?.timings?.Isha} />
      </div>
    </div>
  );
};

export default PrayTimeSection;
