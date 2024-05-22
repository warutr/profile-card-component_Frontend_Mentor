import Image from "next/image";

export const BgBottom = () => {
  return (
    <Image
      className="min-w-[50rem] min-h-[50rem] fixed top-[52.25%] left-[48%] "
      src={"/images/bg-pattern-bottom.svg"}
      alt=""
      height={500}
      width={500}
    />
  );
};
