import React from 'react'



type StepperType = {

}


function Stepper() {
    return (
        <div className='w-full flex flex-row'>
             <div className='max-w-5 w-1/12 flex flex-col justify-center items-center'>
                <div className='w-5 h-5 border bg-black'></div>
                <div className='h-full border max-w-0.5'></div>
            </div>
            <div className='w-11/12 flex flex-col justify-end items-start p-2'>
                <div className='w-10/12 text-wrap flex flex-col space-y-4 p-4'>
                    <div className='flex flex-col'>
                        <div className='text-lg'>Sofware Engineer</div>
                        <div>Altiushub</div>
                        <div className='text-zinc-800'>Oct 2024- Current</div>
                        <div>Django, Postgres, Azure, Docker, Kubernetes, RxJs, Playwright, Github, Linux, Loki, Grafana, Mimir, Tempo</div>
                    </div>
                    <div>
                        <li className="list-inside">
                            Implemented CloudNativePG Operator to manage self-hosted, highly available PostgreSQL clusters on Kubernetes.
                        </li>

                        <li className='list-inside'>Built a reusable standalone test component library for multiple frontend applications.</li>
                        <li className='list-inside'>Automated the package release workflow using GitHub private npm registry, reducing manual effort by 95%.</li>
                        <li className='list-inside'>Implemented an in-house monitoring and observability platform using Loki, Grafana, Mimir, and Tempo.</li>
                        <li className='list-inside'>Automated semantic versioning using open-source repositories such as @semantic/release and integrating with the
                            existing private repositories to handle patch, minor, and major version upgrades, reducing manual versioning
                            overhead for developers.</li>
                        <li className='list-inside'>Optimized cron-based processing, improving outbound delivery report generation time by 90%.</li>
                        <li className='list-inside'>Implemented automatic rollback of database migrations across microservices for safer deployments.</li>
                        <li className='list-inside'>Developed and delivered a complete ETL-focused microservice using Django and PostgreSQL.</li>
                        <li className='list-inside'>Performed R&D to identify the best database for high-throughput workloads, evaluating CockroachDB, YugabyteDB, and Citus.</li>
                        <li className='list-inside'>Created frontend automation test suites using RxJS and Playwright.</li>
                        <li className='list-inside'>Dockerized multiple deployments and implemented testing workflows using Docker test containers.</li>
                        <li className='list-inside'>An automation script that manages GitHub releases across 10 repositories — automatically creating tags,
                            generating release notes, and ensuring clear, transparent versioning — reducing manual effort by 90%.</li>
                        <li className='list-inside'>Designed and implemented an in-house archival system for serial numbers expiring based on user-configured
                            country compliance. Utilized GitHub Actions, Django Dynamic Database Routing, pg dump, Zstandard
                            compression, Azure Blob Storage, and a job-based approach to sync production and archival PostgreSQL databases.
                            Achieved a 13MB .dump size for 5,00,000 serial numbers, 10% increase in database read/write efficiency.</li>
                    </div>
                </div>

            </div>
           
            
        </div>
    )
}

export default Stepper