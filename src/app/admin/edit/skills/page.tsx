'use client'

import { useRef } from "react";
import { MdEdit } from "react-icons/md";

export default function SkillEditPage(){
    const add_skill_modal = useRef<HTMLDialogElement>(null);
    return(
        <div className="skill-edit-page">
            <p>Section 1</p>
            <SkillCard skill="JavaScript" level="intermediate"/>
            <SkillCard skill="Python" level="advanced"/>
            <SkillCard skill="JavaScript" level="intermediate"/>
            <p>Section 2</p>
            <SkillCard skill="JavaScript" level="intermediate"/>
            <SkillCard skill="Python" level="advanced"/>
            <SkillCard skill="JavaScript" level="intermediate"/>
            <p>Section 3</p>
            <SkillCard skill="JavaScript" level="intermediate"/>
            <SkillCard skill="Python" level="advanced"/>
            <SkillCard skill="JavaScript" level="intermediate"/>
            <div className="skill-add-fab fixed bottom-24 right-0 m-4">
                <button 
                  className="btn btn-xl btn-circle btn-primary text-2xl text-center"
                  onClick={() => {add_skill_modal.current?.showModal()}}>
                    +
                </button>
                <AddSkillModal ref={add_skill_modal} />
            </div>
        </div>
    )
}

function SkillCard({skill, level}: {skill: string, level: 'novice' | 'intermediate' | 'advanced'}) {
    const edit_skill_modal = useRef<HTMLDialogElement>(null);
    return(
        <div 
          role="button" 
          className="bg-accent rounded-md my-4 p-4 flex justify-between items-center"
          onClick={() => {edit_skill_modal.current?.showModal()}}>
            <EditSkillModal ref={edit_skill_modal} />
            <div className="flex flex-col gap-2 mb-2">
                <p className="skill_name">{skill}</p>
                <p className="skill_level text-xs">{level}</p>
            </div>
            <MdEdit className="text-2xl"/>
        </div>
    )
}

function EditSkillModal({ref}: {ref: React.RefObject<HTMLDialogElement>}) {
    return(
        <dialog ref={ref} id="edit_skill_modal" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Edit Skill</h3>
                <label htmlFor="edit_skill_name" className="block py-4">Skill Name: </label>
                <input type="text" id="edit_skill_name" placeholder="Type here" className="input input-bordered w-full"/>
                <label htmlFor="edit_skill_level" className="block py-4">Skill Level: </label>
                <select id="edit_skill_level" className="select select-bordered w-full">
                    <option>Novice</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
                <div className="modal-action">
                    <button className="btn btn-primary font-bold">Save</button>
                    <button className="btn btn-primary text-red-500 font-bold">Cancel</button>
                </div>
            </form>
        </dialog>
    )
}

function AddSkillModal({ref}: {ref: React.RefObject<HTMLDialogElement>}) {
    return(
        <dialog ref={ref} id="add_skill_modal" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Add Skill</h3>
                <label htmlFor="add_skill_name" className="block py-4">Skill Name: </label>
                <input type="text" id="add_skill_name" placeholder="Type here" className="input input-bordered w-full"/>
                <label htmlFor="add_skill_level" className="block py-4">Skill Level: </label>
                <select id="add_skill_level" className="select select-bordered w-full">
                    <option>Novice</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
                <div className="modal-action">
                    <button className="btn btn-primary font-bold">Add</button>
                    <button className="btn btn-primary text-red-500 font-bold">Cancel</button>
                </div>
            </form>
        </dialog>   
    )
}