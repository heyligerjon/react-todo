function FilterButton(props) {
    return(    
        <button 
        type="button" 
        className="btn toggle-btn" 
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
        >
            <span className="visually-hidden">Show </span>
            {props.name}
            <span className="visually-hidden"> tasks</span>
        </button>
    )
}

export default FilterButton;