import { currentUser } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";

import { Categories } from "@/components/Categories";
import Characters from "@/components/Characters";
import MyAiLanding from "@/components/marketing/myai-landing";
import { SearchInput } from "@/components/SearchInput";
import prismadb from "@/lib/prismaDB";

type CharacterWithCount = Prisma.CharacterGetPayload<{
  include: {
    _count: {
      select: {
        messages: true;
      };
    };
  };
}>;

interface RootPageProps {
  searchParams: Promise<{
    categoryId?: string;
    name?: string;
  }>;
}

const RootPage = async (props: RootPageProps) => {
  const user = await currentUser();

  if (!user) {
    return <MyAiLanding />;
  }

  const searchParams = await props.searchParams;
  const categories = await prismadb.category.findMany();
  const isTrending = searchParams.categoryId === "trending";

  const characterWhere = isTrending
    ? undefined
    : {
        ...(searchParams.categoryId
          ? { categoryId: searchParams.categoryId }
          : {}),
        ...(searchParams.name
          ? {
              name: {
                contains: searchParams.name,
                mode: "insensitive" as const,
              },
            }
          : {}),
      };

  const data: CharacterWithCount[] = await prismadb.character.findMany({
    where: characterWhere,
    orderBy: isTrending
      ? {
          messages: {
            _count: "desc",
          },
        }
      : {
          createdAt: "desc",
        },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });

  return (
    <div className="h-full space-y-2 p-4">
      <SearchInput />
      <Categories data={categories} />
      <Characters data={data} />
    </div>
  );
};

export default RootPage;
