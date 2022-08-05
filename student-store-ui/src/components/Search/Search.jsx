import "./Search.css"
import CategoryFilter from "../Categories/Categories"


export default function SearchBar (props) {

    return (
        <div className = "search-bar">
            <div className = "search">
                <form className = "search-form">
                    <input className = "search-input" value = {props.searchValue} placeholder = "find a product:" onChange = {props.handleOnSearchChange}/>
                    <button className = "search-button"> GO 🚀 </button>
                </form>
            </div>
            {/* <CategoryFilter handleCategory = {props.handleCategory}/> */}
        </div>
    )
}