import type { ExperienceType } from "../utils/types"


function ExperienceStepper({ experiences }: { experiences: ExperienceType[] }) {
    return (
        <div>
            {
                experiences.map((experience, idx) => {
                    return <div key={idx} className='w-full flex flex-row'>
                        <div className='max-w-5 w-1/12 flex flex-col justify-center items-center'>
                            <div className={`w-5 h-5 border ${experience.currentlyWorkingHere ? 'bg-black': 'bg-white'}`}></div>
                            <div className='h-full border max-w-0.5'></div>
                        </div>
                        <div className='w-11/12 flex flex-col justify-end items-start p-2'>
                            <div className='w-10/12 text-wrap flex flex-col space-y-4 p-4'>
                                <div className='flex flex-col'>
                                    <div className='text-lg'>{experience.designation}</div>
                                    <div>{experience.company}</div>
                                    <div className='text-zinc-800'>{experience.startDate} - {experience.currentlyWorkingHere ? "Current" : experience.endDate}</div>
                                    <div>{experience.technologies.join(", ")}</div>
                                </div>
                                <div className="flex flex-col w-full">
                                    {
                                        experience.works.map((work, idx) => {
                                            return <li key={idx} className='list-inside'>{work}</li>
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ExperienceStepper