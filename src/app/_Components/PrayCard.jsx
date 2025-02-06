import Image from "next/image";
import moment from "moment";
moment.locale("ar-kw");
const PrayCard = ({ img, name, time }) => {
  const now = 24 + (time?.split(":")[0] - moment().format("H"));
  const def = `${
    time?.split(":")[0] - moment().format("H") > 0
      ? time?.split(":")[0] - moment().format("H")
      : now === 24
      ? "الان فترة"
      : 24 + (time?.split(":")[0] - moment().format("H"))
  }`;
  return (
    <div className=" bg-neutral-100  min-w-[10px]  h-[250px] overflow-hidden rounded-md shadow-md">
      <div className="w-full h-[120px] relative">
        <Image
          as="image"
          fill
          style={{ objectFit: "cover" }}
          sizes="100%"
          alt="Your borswer dosn't support this image ( صورة شخص يصلي )"
          src={img}
          priority
        ></Image>
      </div>
      <div className="flex w-full mt-2 py-2 px-5 justify-between items-center">
        <h1 className="">{name}</h1>
        <h1 className="text-neutral-800">
          {time?.split(":")[0] > 12
            ? time?.split(":")[0] - 12
            : time?.split(":")[0] == 12
            ? time?.split(":")[0]
            : time?.split(":")[0][1]}
          :{time?.split(":")[1]}{" "}
          {time?.split(":")[0] > 12 && time?.split(":")[0] < 24 ? "م" : "ص"}
        </h1>
      </div>
      <div>
        <p className="w-full px-5 mt-2">
          <span className="font-semibold text-orange-500">{def.toString()}</span>{" "}
          {now == 24
            ? ""
            : time?.split(":")[0] < 12 ||
              time?.split(":")[0] - moment().format("H") <= 1
            ? " ساعه علي"
            : "ساعات علي"}{" "}
          صلاة {name}
        </p>
      </div>
    </div>
  );
};

export default PrayCard;
