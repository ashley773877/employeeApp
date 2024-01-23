import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from "./Employeelist"

function HomePage() {
    return(
        <div style={{border: "1px yellow solid"}}>
         <h1>This is the HomePage</h1>
         <Header/>
         <SearchBar/>
         <EmployeeList/>
    
        </div>
    )
}
export default HomePage