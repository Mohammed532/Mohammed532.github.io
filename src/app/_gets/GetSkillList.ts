'use client'

import { useEffect, useState, useContext } from "react";
import FSContext from "../_context/FirebaseContext";
import { collection, getDocs } from "firebase/firestore";
import { PROFICIENCY_ORDER } from "@/data/constants";

type SkillType = 'Web Dev' | 'Engineering' | 'Design' | 'Soft Skills' | 'Other';
type SkillProficiency = 'advanced' | 'intermediate' | 'novice';
type SkillTableData = {
    [S in SkillType]?: {
        id: string,
        skill: string,
        proficiency: SkillProficiency;
    }[]
};

// helper function for sorting skills by proficiency type
const sortSkills = (data: SkillTableData): SkillTableData => {
    const sorted: SkillTableData = {};
  
    (Object.keys(data) as SkillType[]).forEach(type => {
      sorted[type] = [...(data[type] ?? [])].sort(
        (a, b) =>
          PROFICIENCY_ORDER[a.proficiency] -
          PROFICIENCY_ORDER[b.proficiency]
      );
    });
  
    return sorted;
  };

export default function GetSkillList(){
    const fs  = useContext(FSContext);

    const [s_data, setData] = useState<SkillTableData | undefined | null>(undefined);
    const [s_loading, setLoading] = useState(true);
    const [s_error, setError] = useState<Error | undefined | null>(undefined);
    
    useEffect(() => {
        const readfs = async() => {
            try {
                // formatted data for better handling
                let t_data: SkillTableData = {}; // tabelurized data
                const skillSnap = await getDocs(collection(fs.fstore, 'skills'));
    
                // throw error if query return empty
                if (skillSnap.empty) {throw new Error('Failed data read: Query returned empty')};
                
                // format data and place it in table
                skillSnap.forEach(doc => {
                    let data = doc.data();

                    const type = data.type as SkillType;
                    const proficiency = data.proficiency as SkillProficiency;
                
                    if (!type || !proficiency){
                        console.warn(`Skill ${doc.id} doesn't have correct type and/or proficiency, not including in dataset`)
                    };
                
                    if (!t_data[type]) {
                        t_data[type] = [];
                    }

                    t_data[type]!.push({
                        id: doc.id,
                        skill: doc.id.toUpperCase(),
                        proficiency
                    });
                });

                // sort skills by proficiency
                t_data = sortSkills(t_data);

                setData(t_data);
                setError(null);
                setLoading(false);  
            } catch(err: unknown) {
                if(err instanceof Error) {
                    console.error(err);
                    setError(err);
                } else {
                    let e = new Error("Unknown error was thrown");
                    console.error(e);
                    setError(e);
                }
                setData(null);
                setLoading(false); 
                
            }
        }
        readfs();

    }, []);


    return [s_data, s_loading, s_error];
}

export type { SkillTableData };