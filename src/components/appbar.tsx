"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { label: "home", href: "/" },
  { label: "blog", href: "/blog" },
  { label: "github", href: "/github" },
];

const Appbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe">
      <header className="border-b bg-zinc-100 px-safe dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex h-20 max-w-screen-md items-center justify-between px-6">
          <Link href="/">
            <h1 className="font-medium">Next App Route PWA Template</h1>
          </Link>

          <nav className="flex items-center space-x-6">
            <div className="hidden sm:block">
              <div className="flex items-center space-x-6 uppercase">
                {links.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`text-sm ${
                      pathname === href
                        ? "text-fuchsia-500 dark:text-fuchsia-400 font-bold"
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div
              title="Gluten Free"
              className=" h-10 w-10 rounded-full bg-zinc-200 bg-cover bg-center shadow-inner dark:bg-zinc-800"
            >
              <Image
                alt="user"
                src={`/images/user.png`}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Appbar;
