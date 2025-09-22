import { useEffect, useState, useContext } from "react";
import FSContext from "../_context/FirebaseContext";
import { collection, getDocs } from "firebase/firestore";

type SkillType = 'Web Dev' | 'Engineering' | 'Design' | 'Soft Skills' | 'Other';
type SkillTableData = {
    [S in SkillType]?: {
        id: number,
        skill: string,
        proficiency: 'advanced' | 'intermediate' | 'beginner'
    }[]
};

export default function GetSkillList(){
    const fs  = useContext(FSContext);

    const [s_data, setData] = useState<SkillTableData | undefined>(undefined);
    const [s_loading, setLoading] = useState(true);
    const [s_error, setError] = useState<ApolloError | undefined>(undefined);
    
    // formatted data for better handling
    let t_data: SkillTableData = {}; // tabelurized data

    useEffect(() => {
        const readfs = async() => {
            try {
                const skillSnap = getDocs(collection(fs.fstore, 'skills'));
                console.log(skillSnap);
                
            } catch(err) {
                console.log(err);
                
            }
        }
        readfs();

    }, []);


    return [s_data, s_loading, s_error];
}

export type { SkillTableData };