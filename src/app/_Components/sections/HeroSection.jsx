"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import { changeName } from "@/app/_RTK/PlaceSlice";
const HeroSection = () => {
  const dispatch = useDispatch();

  const handelChangeName = (e) => {
    dispatch(changeName(e.target.value));
  };

  useGSAP(() => {
    gsap.to("#main-input", {
      opacity: 1,
      x: 0,
      duration: 0.7,
      delay: 0.3,
      stagger: 0.2,
    });
  });

  const governorates = [
    { name: "القاهرة", value: "Cairo" },
    { name: "الإسكندرية", value: "Alexandria" },
    { name: "الجيزة", value: "Giza" },
    { name: "الدقهلية", value: "Dakahlia" },
    { name: "البحر الأحمر", value: "Red Sea" },
    { name: "البحيرة", value: "Beheira" },
    { name: "الفيوم", value: "Faiyum" },
    { name: "الغربية", value: "Gharbia" },
    { name: "الإسماعيلية", value: "Ismailia" },
    { name: "المنوفية", value: "Monufia" },
    { name: "المنيا", value: "Minya" },
    { name: "القليوبية", value: "Qalyubia" },
    { name: "الوادي الجديد", value: "New Valley" },
    { name: "السويس", value: "Suez" },
    { name: "أسوان", value: "Aswan" },
    { name: "أسيوط", value: "Asyut" },
    { name: "بني سويف", value: "Beni Suef" },
    { name: "بورسعيد", value: "Port Said" },
    { name: "دمياط", value: "Damietta" },
    { name: "جنوب سيناء", value: "South Sinai" },
    { name: "الشرقية", value: "Sharqia" },
    { name: "كفر الشيخ", value: "Kafr El Sheikh" },
    { name: "مطروح", value: "Matrouh" },
    { name: "الأقصر", value: "Luxor" },
    { name: "قنا", value: "Qena" },
    { name: "شمال سيناء", value: "North Sinai" },
    { name: "سوهاج", value: "Sohag" },
  ];

  return (
    <div id="main-input" className="w-full opacity-0">
      <div className="w-full text-center">
        <h1 className="text-center mt-10 text-xl sm:text-2xl">
          اهلا بك في موقع مواقيت الصلاه🕌
        </h1>
        <p className="text-[12px] sm:text-sm mt-2">
          مطور بواسطه : عبد الرحمن عرفات
        </p>
      </div>

      <div className="mt-5 mb-1 pt-7 pb-2 w-full h-40">
        <h1 className="text-green-600 mb-2">اختر محافظتك</h1>
        <select
          onChange={handelChangeName}
          className="bg-neutral-100 outline-none w-full py-2 px-4 rounded-sm cursor-pointer"
        >
          {governorates.map((governorate, index) => (
            <option value={governorate.value} key={index}>
              {governorate.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HeroSection;
