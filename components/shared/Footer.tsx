import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/Tumble.png"
            alt="logo"
            width={32}
            height={9}
          />
        </Link>

        <p>
          Made by{" "}
          <Link
            href="https://www.linkedin.com/in/harshiltomar/"
            className="text-violet-700 font-bold"
          >
            Harshil ✨
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
