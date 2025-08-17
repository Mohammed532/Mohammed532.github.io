import GetSkillList from "../_qraphql/GetSkillList"
import { skills } from "@/data/resume-data";

// types
type SkillType = 'Web Dev' | 'Engineering' | 'Design' | 'Soft Skills' | 'Other';

type Skill = {
    id: number,
    skill: string,
    proficiency: 'advanced' | 'intermediate' | 'beginner'
}

type SkillTableData = {
    [S in SkillType]?: Skill[]
}

type SkillCardProps = {
    s_type: SkillType,
    s_objs: Skill[]
}

export default function SkillGrid(){
    // const [data, loading, error] = GetSkillList()
    let data = skills;
    
    return(
        <div className="skillgrid flex flex-col">
            {Object.entries(data as SkillTableData).map(([k,v], idx) => (
                <SkillCard key={idx} s_type={k as SkillType} s_objs={v}/>
            ))}
        </div>
    )
}

function SkillCard({ s_type, s_objs }: SkillCardProps){
    const profiency_text_cs = {
        'advanced': 'text-[#9552ea]',
        'intermediate': 'text-[#52ea77]',
        'novice': 'text-[#e2ea52]'
    }

    const profiency_border_cs = {
        'advanced': 'border-2 rounded-xl border-[#9552ea]',
        'intermediate': 'border-2 rounded-xl border-[#52ea77]',
        'novice': 'border-2 rounded-xl border-[#e2ea52]'
    }

    return(
        <div className="mb-16 md:w-5/6 self-center">
            <div className="flex justify-between">
                <p className="italic text-secondary">{s_type}</p>
                <div className="hidden md:flex justify-self-stretch gap-5">
                    <p className={`${profiency_text_cs.advanced}`}>ADVANCED</p>
                    <p className={`${profiency_text_cs.intermediate}`}>INTERMEDIATE</p>
                    <p className={`${profiency_text_cs.novice}`}>NOVICE</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 bg-gradient-to-b from-accent to-[#0e1022] p-5 py-12 rounded-md my-1">
                {s_objs.map((s, idx) => (
                    <div key={idx} className={`${profiency_border_cs[s.proficiency]} text-wrap p-1 px-7 bg-[var(--cs-background)]`}>{s.skill} </div>
                ))}
            </div>
        </div>
    )
}

function Loader(){
    return(
        <div className="my-8 md:w-5/6 self-center">
            <div className="flex my-4 justify-between">
                <div className="skeleton h-4 w-24"></div>
                <div className="hidden md:flex justify-self-stretch gap-5">
                    <div className="skeleton w-20"></div>
                    <div className="skeleton w-20"></div>
                    <div className="skeleton w-20"></div>
                </div>
            </div>
            <div className="skeleton h-64"></div>
        </div>
    )
}

function Error(){
    return(
        <p className="text-error capitalize">
            Error with obtaining skill list. Please Reload.
        </p>
    )
}