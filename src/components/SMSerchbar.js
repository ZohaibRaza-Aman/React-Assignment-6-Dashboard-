import { Box } from "@mui/system";
import { useState } from "react";

function SMSearchbar(props){
    const {searchList,onSearch} = props;
    const [selectedList, setSelectedList] = useState("");

    let searchVal = (e) =>{
        onSearch(selectedList, e);
    };
    return(
        <>
        <Box>
            <Box>
            <input placeholder="Search..."
            onChange={(e)=>searchVal(e.target.value)}
            />
            </Box>
            <Box>
                <select onChange={(e)=>setSelectedList(e.target.value)}>
                    <option value="">Select</option>
                    {searchList.map((x,i)=>(
                    <option key={i} value={x.key}>
                        {x.displayName}
                    </option>
                    ))}
                </select>
            </Box>
        </Box>
        </>
    );
}
 export default SMSearchbar;