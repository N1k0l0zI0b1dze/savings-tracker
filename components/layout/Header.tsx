import Image from "next/image";

const Header = () => {
  return (
    <header className="flex w-full h-18.75 justify-between items-center border-b border-neutral-700 px-4">
      <Image src="/assets/images/Logo.svg" alt="logo" height={40} width={40} />

      <button className="flex items-center w-35 h-10 rounded-4xl bg-orange-400 gap-2.5 px-4 py-2 text-neutral-900 transition-colors hover:bg-orange-500 cursor-pointer">
        <Image
          src="/assets/images/plus.svg"
          alt="plus"
          height={20}
          width={20}
        />
        <span className="font-inter text-preset-5-semibold">New goal</span>
      </button>
    </header>
  );
};

export default Header;
