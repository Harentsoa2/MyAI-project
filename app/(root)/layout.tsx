import { auth } from "@clerk/nextjs/server";

import NavBar from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";
import { checkSubscription } from "@/lib/subscription";

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { userId } = await auth();

  if (!userId) {
    return <>{children}</>;
  }

  const isPro = await checkSubscription();

  return (
    <div className="h-full">
      <NavBar isPro={isPro} />
      <div className="fixed inset-y-0 mt-16 hidden w-20 flex-col md:flex">
        <SideBar isPro={isPro} />
      </div>
      <main className="h-full pt-16 md:pl-20">{children}</main>
    </div>
  );
};

export default RootLayout;
