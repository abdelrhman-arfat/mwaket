import Link from "next/link";

const MenuLinks = ({ isOpen , links }) => {

  return (
    <div
      className={`flex justify-center z-50 bg-neutral-100 w-full duration-200 ${
        isOpen ? "opacity-100" : "opacity-0"
      } items-center gap-3 py-8 absolute right-0 top-14 shadow-md`}
    >
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuLinks;
