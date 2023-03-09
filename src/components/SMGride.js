import { Box } from "@mui/system";
import SMSearchbar from "./SMSerchbar";


function SMGride(props){
    const {title,columns,datasource ,onRowClick, isloading} = props

    return(
    <div>
        <Box>
        <h2>{title}</h2>
        <Box>
            <SMSearchbar
            searchList={columns.filter((x)=> x.searchList)}
            onSearch={(key,val)=>{
                console.log(key,val);

                let dt = datasource.filter((x)=> x[x].includes(val));
                console.log(dt);
            }}
            />
        </Box>
      </Box>
        {isloading ? (
        <img width='40%' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
         alt="loading..."/>
        ):datasource && Array.isArray(datasource) && datasource.length < 1 ?(
            <img
            src="https://static.vecteezy.com/system/resources/thumbnails/016/026/432/small/user-not-found-account-not-register-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
            width="40%"
            alt="No Data Found :("
          />
          ):(
        <table className="table table-stipped">
            <thead>
                <tr>
                    {columns && Array.isArray(columns) && columns.length > 0
                    ? columns.map((x,i)=> <th key={i}>{x.displayName}</th>)
                :null}
                </tr>
            </thead>
            <tbody>
                {datasource && Array.isArray(datasource) && datasource.length > 0
                ? datasource.map((x,i)=>(
                    <tr key={i}>
                        {columns.map((e,ind)=>(
                            <td key={ind}>
                               {e.displayField ? e.displayField(x) : x[e.key]}
                            </td>
                        ))}
                    </tr>
                ))
            :null}
            </tbody>
        </table>
          )}
    </div>
    );
}
export default SMGride;