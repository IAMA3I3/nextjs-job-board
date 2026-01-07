"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type Job = {
    id: number
    title: string
    company_name: string
    company_logo: string
    candidate_required_location: string
    job_type: string
    url: string
}

export default function JobList({ jobs }: { jobs: Job[] }) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [searchInput, setSearchInput] = useState("")
    const [categoryInput, setCategoryInput] = useState(searchParams.get("category") ?? "")
    const [limitInput, setLimitInput] = useState(searchParams.get("limit") ?? "10")

    function updateParam(key: string, value: string) {
        const params = new URLSearchParams(searchParams.toString())
        value ? params.set(key, value) : params.delete(key)
        router.push(`/?${params.toString()}`)
    }

    useEffect(() => {
        const timer = setTimeout(() => updateParam("search", searchInput), 500)
        return () => clearTimeout(timer)
    }, [searchInput])

    useEffect(() => {
        const timer = setTimeout(() => updateParam("category", categoryInput), 500)
        return () => clearTimeout(timer)
    }, [categoryInput])

    useEffect(() => {
        const timer = setTimeout(() => updateParam("limit", limitInput), 500)
        return () => clearTimeout(timer)
    }, [limitInput])

    return (
        <>
            {/* Filter */}
            <div className=" w-full max-w-200 m-auto space-y-4 mb-6">
                <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} className=" w-full rounded border-2 border-gray-400 focus:border-gray-600 py-2 px-4" placeholder="Search" />
                <div className=" flex flex-col gap-4 md:flex-row">
                    <select defaultValue={categoryInput} onChange={e => setCategoryInput(e.target.value)} className=" w-full rounded border-2 border-gray-400 focus:border-gray-600 py-2 px-4">
                        <option value="">All Categories</option>
                        <option value="software-dev">Software Development</option>
                        <option value="design">Design</option>
                        <option value="marketing">Marketing</option>
                    </select>
                    <select defaultValue={limitInput} onChange={e => setLimitInput(e.target.value)} className=" w-full rounded border-2 border-gray-400 focus:border-gray-600 py-2 px-4">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>

            {/* Render list */}
            <div className=" w-full max-w-200 m-auto space-y-4">
                {
                    jobs.map(job => (
                        <div key={job.id} className=" rounded-lg bg-white border-2 border-gray-200 shadow hover:shadow-lg p-4 transition">
                            <div className=" flex items-start gap-4">
                                <div className=" w-15 aspect-square rounded-full overflow-hidden">
                                    <img src={job.company_logo} alt={job.company_name} className=" w-full h-full object-cover" />
                                </div>
                                <div className="">
                                    <Link href={`/jobs/${job.id}`} className=" text-xl hover:text-blue-900">{job.title}</Link>
                                    <p className=" text-sm font-semibold text-gray-600">{job.company_name}</p>
                                    <p className=" mt-2 text-sm">
                                        {job.candidate_required_location} • {job.job_type}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}