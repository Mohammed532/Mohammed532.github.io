'use client'

import { useRef } from "react";
import Select from "react-select";
import { MdEdit } from "react-icons/md";

export default function ProjectEditPage() {
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
        <div className="edit-page">
            <ProjectCard
              proj_title="Portfolio Website" 
              desc="Developed a personal portfolio website using React and Next.js to showcase my projects and skills. Implemented responsive design and optimized performance for better user experience."
              skills={["JavaScript", "React", "Next.js"]}
              all_skills={all_skills}
            />
            <ProjectCard
              proj_title="E-commerce Platform" 
              desc="Built a full-stack e-commerce platform with features like product listing, shopping cart, and payment integration. Utilized Node.js and Express for backend development."
              skills={["Node.js", "Express", "MongoDB"]}
              all_skills={all_skills}
            />
        </div>
    )
}

function ProjectCard({ proj_title, desc, skills, all_skills }: { proj_title: string, desc: string, skills: string[] | null, all_skills: string[] }) {
    const ref = useRef<HTMLDialogElement>(null);
    return(
        <div
          role='button'
          className="bg-accent rounded-md my-4 p-4 flex justify-between items-center"
          onClick={() => {ref.current?.showModal()}}>
            <EditProjectModal ref={ref} skills={skills} all_skills={all_skills} />
            <div className="flex flex-col gap-2">
                <p className="project_name">{proj_title}</p>
            </div>
            <MdEdit className="text-2xl"/>
        </div>
    )
}

function EditProjectModal({ ref, skills, all_skills }: { ref: React.RefObject<HTMLDialogElement>, skills: string[] | null, all_skills: string[] }) {
    return(
        <dialog ref={ref} id="edit_proj_modal" className="modal">
            <div className="model-box w-5/6 max-h-3/4 bg-base-100 p-6 rounded-md overflow-y-scroll">
                <form method="dialog">
                    <h3 className="font-bold text-lg">Edit Project</h3>
                    <label htmlFor="edit_proj_title" className="block py-4">Project Title </label>
                    <input type="text" id="edit_proj_title" placeholder="Type here" className="input input-bordered w-full"/>
                    <label htmlFor="edit_proj_desc" className="block py-4">Description </label>
                    <textarea id="edit_proj_desc" placeholder="Type here" className="textarea textarea-bordered w-full"/>
                    <fieldset className="links fieldset bg-base-200 border-b-base-300 my-4">
                        <legend className="legend">Links</legend>
                        <input type="text" placeholder="Demo" className="input input-bordered w-full mb-2"/>
                        <input type="text" placeholder="Design" className="input input-bordered w-full"/>
                        <input type="text" placeholder="Code" className="input input-bordered w-full"/>
                        <input type="text" placeholder="Clips" className="input input-bordered w-full"/>
                    </fieldset>
                    <label htmlFor="edit_proj_skills" className="block py-4">Skills </label>
                    <Select
                      isMulti
                      unstyled
                      defaultValue={skills ? skills.map(skill => ({value: skill, label: skill})): []}
                      options={all_skills.map(skill => ({value: skill, label: skill}))}
                      inputId="edit_proj_skills"
                      name="edit_proj_skills"
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

function AddProjectModal() {
}