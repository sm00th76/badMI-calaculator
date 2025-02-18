// bmi_stats.js
import Result from "./result";
const BmiStats = ({ bmis }) => {
    
    return (
        <>
        <div>
            <br />
            Your BMI is: {parseInt(bmis)}   
        </div>
        <Result value = {bmis}/> 
        </>
    ); 
};

export default BmiStats;
