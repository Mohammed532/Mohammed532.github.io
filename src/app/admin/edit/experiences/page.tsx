'use client'

import { useRef } from "react";
import Select from "react-select";
import { MdEdit } from "react-icons/md";

export default function ExperienceEditPage() {
    const add_exp_modal = useRef<HTMLDialogElement>(null);

    // fake list of skills
    const all_skills = [
        'JavaScript',
        'React',
        'Node.js',
        'Python',
        'Django',
        'Git'
    ];

    return(
        <div className="experience-edit-page">
           <ExpCard
             exp_title="Software Engineer at XYZ Company" 
             time_span={[new Date(2020, 1), null]}
             desc="Worked on developing and maintaining web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions."
             skills={["JavaScript", "React", "Node.js"]}
             all_skills={all_skills}
           />
           <ExpCard
             exp_title="Intern at ABC Corporation" 
             time_span={[new Date(2019, 5), new Date(2019, 8)]}
             desc="Assisted in the development of internal tools and automation scripts. Gained experience in software development lifecycle and agile methodologies."
             skills={["Python", "Django", "Git"]}
             all_skills={all_skills}
           />
              <div className="exp-add-fab fixed bottom-24 right-0 m-4"> 
                <button 
                  className="btn btn-xl btn-circle btn-primary text-2xl text-center"
                  onClick={() => {add_exp_modal.current?.showModal()}}>
                    +
                </button>
                <AddExpModal ref={add_exp_modal} all_skills={all_skills}/>
            </div>
        </div>
    )
}

function ExpCard({exp_title, time_span, desc, skills, all_skills}: {exp_title: string, time_span: [Date, Date | null], desc: string, skills: string[] | null, all_skills: string[]}) {
    const edit_skill_ref = useRef<HTMLDialogElement>(null);
    return(
        <div 
          role="button" 
          className="bg-accent rounded-md my-4 p-4 flex justify-between items-center"
          onClick={() => {edit_skill_ref.current?.showModal()}}>
            <EditExpModal ref={edit_skill_ref} skills={skills} all_skills={all_skills} />
            <div className="flex flex-col gap-2 mb-2">
                <p className="skill_name">{exp_title}</p>
                <p className="skill_level text-xs">{time_span[0] ? DatetoCustomString(time_span[0]) : ''} - {time_span[1] ? DatetoCustomString(time_span[1]) : 'Present'}</p>
            </div>
            <MdEdit className="text-2xl"/>
        </div>
    )
}

function EditExpModal({ref, skills, all_skills}: {ref: React.RefObject<HTMLDialogElement>, skills: string[] | null, all_skills: string[]}) {
    return(
        <dialog ref={ref} id="edit_exp_modal" className="modal">
            <div className="model-box w-5/6 bg-base-100 p-6 rounded-md">
            <form method="dialog">
                <h3 className="font-bold text-lg">Edit Experience</h3>
                <label htmlFor="edit_exp_title" className="block py-4">Experience Title </label>
                <input type="text" id="edit_exp_title" placeholder="Type here" className="input input-bordered w-full"/>
                <div>
                    <label htmlFor="edit_exp_start" className="block py-4">Start </label>
                    <input type="month" id="edit_exp_start" className="input input-bordered"/>
                </div>
                <div>
                    <label htmlFor="edit_exp_end" className="block py-4">End </label>
                    <input type="month" id="edit_exp_end" className="input input-bordered"/>
                </div>
                <label htmlFor="edit_exp_desc" className="block py-4">Description </label>
                <textarea id="edit_exp_desc" placeholder="Type here" className="textarea textarea-bordered w-full"/>
                <label htmlFor="edit_exp_skills" className="block py-4">Skills </label>
                <Select 
                  isMulti
                  unstyled
                  defaultValue={skills ? skills.map(skill => ({value: skill, label: skill})) : []}  
                  options={all_skills.map(skill => ({value: skill, label: skill}))} 
                  inputId="edit_exp_skills" 
                  name="edit_exp_skills"
                  classNames={{
                    control: () => "border border-neutral-800 rounded-md p-2", 
                    menu: () => "bg-base-100 border border-neutral-800 rounded-md mt-1 p-2",
                    multiValue: () => "badge badge-accent badge-sm",
                  }} 
                  closeMenuOnSelect={false} 
                  blurInputOnSelect={false}/>
                <div className="modal-action">
                    <button className="btn btn-primary font-bold">Save</button>
                    <button className="btn btn-primary text-red-500 font-bold">Cancel</button>
                </div>
            </form>
            </div>
        </dialog>
    )
}

function AddExpModal({ref, all_skills}: {ref: React.RefObject<HTMLDialogElement>, all_skills: string[]}) {
    return(
        <dialog ref={ref} id="edit_exp_modal" className="modal">
            <div className="model-box w-5/6 bg-base-100 p-6 rounded-md">
            <form method="dialog">
                <h3 className="font-bold text-lg">Add Experience</h3>
                <label htmlFor="edit_exp_title" className="block py-4">Experience Title </label>
                <input type="text" id="edit_exp_title" placeholder="Type here" className="input input-bordered w-full"/>
                <div>
                    <label htmlFor="edit_exp_start" className="block py-4">Start </label>
                    <input type="month" id="edit_exp_start" className="input input-bordered w-full"/>
                </div>
                <div>
                    <label htmlFor="edit_exp_end" className="block py-4">End </label>
                    <input type="month" id="edit_exp_end" className="input input-bordered w-full"/>
                </div>
                <label htmlFor="edit_exp_desc" className="block py-4">Description </label>
                <textarea id="edit_exp_desc" placeholder="Type here" className="textarea textarea-bordered w-full"/>
                <label htmlFor="edit_exp_skills" className="block py-4">Skills </label>
                <Select 
                  isMulti
                  unstyled
                  options={all_skills.map(skill => ({value: skill, label: skill}))} 
                  inputId="edit_exp_skills" 
                  name="edit_exp_skills"
                  classNames={{
                    control: () => "border border-neutral-800 rounded-md p-2", 
                    menu: () => "bg-base-100 border border-neutral-800 rounded-md mt-1 p-2",
                    multiValue: () => "badge badge-accent badge-sm",
                  }}
                  closeMenuOnSelect={false} 
                  blurInputOnSelect={false}/>

                <div className="modal-action">
                    <button className="btn btn-primary font-bold">Add</button>
                    <button className="btn btn-primary text-red-500 font-bold">Cancel</button>
                </div>
            </form>
            </div>
        </dialog>
    )
}

function DatetoCustomString(date: Date){
    return date.toLocaleString('en-US', {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
}