import JobList from "./JobList"

type Job = {
    id: number
    title: string
    company_name: string
    company_logo: string
    candidate_required_location: string
    job_type: string
    url: string
}

type SearchParams = {
    search?: string
    category?: string
    limit?: string
}

type SectionProps = {
    searchParams?: SearchParams
}

async function getJobs(params?: SearchParams): Promise<Job[]> {
    const qs = new URLSearchParams()

    if (params?.search) qs.append("search", params.search)
    if (params?.category) qs.append("category", params.category)
    if (params?.limit) qs.append("limit", params.limit)

    const res = await fetch(
        `https://remotive.com/api/remote-jobs?${qs.toString()}`,
        { next: { revalidate: 3600 } }
    );

    const data = await res.json()
    return data.jobs
}

export default async function JobListSection({ searchParams }: SectionProps) {
    const jobs = await getJobs(searchParams)

    return <JobList jobs={jobs} />
}