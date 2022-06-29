import React from "react";
import axios from "axios";
import SubSug from "./subComp/SubSug";
export default function Suggestions(props) {
    const [list,setList] = React.useState([])
    async function recco(name) {
     const res = await axios.post("/api/login/recommendations", {
        username: name,
     });
     console.log(res);
     return res;
    }
    React.useEffect(() => {
        recco(props.username).then((res)=>{
            setList(res.data.recommend_set)
        })
    },[])
  

    const map1 = list.map((x) => <SubSug name={x} username={props.username} />);
    return <div className="sugg">{map1}</div>;
}
