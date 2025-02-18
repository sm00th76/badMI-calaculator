import './result.css'
const Result = ({value}) =>
{
    return(
        <>
            {value>18? <div><img className ='result' src="https://englishlanguagethoughts.com/wp-content/uploads/2016/07/ok.jpg"/>GUT</div> :<div><img className='result' src = 'https://www.allthatgrows.in/cdn/shop/products/Carrot-Orange.jpg?v=1598079671'/>EAT</div>}
        </>
    );
};
export default Result;