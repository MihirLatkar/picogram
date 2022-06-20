import React from "react";
import SubSug  from "./subComp/SubSug";
export default function Suggestions(props) {
    const names = ["Mihir", "Sourabh", "Lohitya"]
    const map1 = names.map(x => <SubSug name={x} />)
    return (
        <div className="sugg" >
            {map1}
        </div>
    )
}