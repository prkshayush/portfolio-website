import experience from "@/app/data/experience"


export default function Experience () {
    return (
        <div className="flex flex-col gap-5">
            {experience.map(experience => (
                <div key={experience.id} className="bg-gray-300/90 rounded-lg px-8 py-4">
                    <p className="text-lg lg:text-xl font-semibold">{experience.name}</p>
                    <p className="text-base text-slate-800">{experience.role}</p>
                    <p className="text-sm font-light text-slate-800">{experience.duration}</p>
                </div>
            ))}
        </div>
    )
}