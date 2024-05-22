import Image from "next/image";

export const BgTop = () => {
  return (
    <Image
      className="min-w-[50rem] min-h-[50rem] fixed bottom-[34.75%] right-[51.85%] z-0"
      src={"/images/bg-pattern-top.svg"}
      alt=""
      height={500}
      width={500}
    />
  );
};

export const BgBottom = () => {
  return (
    <Image
      className="min-w-[50rem] min-h-[50rem] fixed top-[52.25%] left-[48%] z-0"
      src={"/images/bg-pattern-bottom.svg"}
      alt=""
      height={500}
      width={500}
    />
  );
};
