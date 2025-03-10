import Head from "next/head";
import Appbar from "@/components/appbar";
import BottomNav from "@/components/bottom-nav";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Page = ({ title, children }: Props) => (
  <>
    {title ? (
      <Head>
        <title>Next App Route PWA Template | {title}</title>
      </Head>
    ) : null}

    <Appbar />

    <main className="mx-auto max-w-screen-md pt-20 pb-16 px-safe sm:pb-0">
      <div className="p-6">{children}</div>
    </main>

    <BottomNav />
  </>
);

export default Page;
