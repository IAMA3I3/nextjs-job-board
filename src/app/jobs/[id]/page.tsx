import { Button } from "@/components/Buttons"
import { notFound } from "next/navigation"
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

type PageProps = {
    params: Promise<{
        id: string
    }>
}

type Job = {
    id: number
    title: string
    company_name: string
    company_logo: string
    candidate_required_location: string
    job_type: string
    description: string
    url: string
}

async function getJobs(): Promise<Job[]> {
    const res = await fetch("https://remotive.com/api/remote-jobs", {
        next: { revalidate: 3600 }
    });

    const data = await res.json();
    return data.jobs;
}

export default async function JobDetail({ params }: PageProps) {
    const { id } = await params
    const jobs = await getJobs()

    const job = jobs.find(j => j.id.toString() === id)

    if (!job) {
        notFound()
    }

    return (
        <div className=" flex-1">
            <div className=" container m-auto px-6">
                <div className=" relative w-full min-h-48 flex justify-center items-center p-8 rounded-3xl bg-linear-60 from-black/40 via-black/20 to-black/40 border-b border-gray-200 shadow-xl">
                    <h1 className=" text-3xl font-semibold text-white text-center pb-4">{job.title}</h1>
                    <div className=" absolute -bottom-16 left-8 w-32 aspect-square rounded-full bg-gray-700 shadow-lg overflow-hidden">
                        <img src={job.company_logo} alt={job.company_name} className=" w-full h-full object-cover" />
                    </div>
                </div>
                <div className=" w-full max-w-150 m-auto mt-24">
                    <p className="text-sm mb-4">
                        {job.candidate_required_location} • {job.job_type}
                    </p>

                    <div
                        className=" line-clamp-6"
                        dangerouslySetInnerHTML={{
                            __html: job.description
                        }}
                    />

                    <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" inline-block mt-8"
                    >
                        <Button text="View full job on Remotive" outlined icon={HiOutlineArrowTopRightOnSquare} iconPosition="end" />
                    </a>
                </div>
            </div>
        </div>
    )
}