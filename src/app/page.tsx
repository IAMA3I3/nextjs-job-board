import { Hero } from "@/components/Hero";
import JobListSection from "@/components/JobListSection";
import { LoadingSpinner } from "@/components/Loading";
import { Suspense } from "react";

type SearchParams = {
  search?: string
  category?: string
  limit?: string
}

type PageProps = {
  searchParams?: Promise<SearchParams>
}

export default async function Home({ searchParams }: PageProps) {

  const sp = await searchParams

  return (
    <div className=" flex-1">
      <div className=" container m-auto px-6 space-y-8">
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <JobListSection searchParams={sp} />
        </Suspense>
      </div>
    </div>
  );
}
