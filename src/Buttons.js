function Buttons ({filteredPhoto}) {
    return(
        <div className="buttons">
            <button className="change" onClick={() => filteredPhoto("мероприятия")}>мероприятия</button>
            <button className="change" onClick={() => filteredPhoto("портреты")}>портреты</button>
            <button className="change" onClick={() => filteredPhoto("события")}>события</button>
            <button className="change" onClick={() => filteredPhoto("семья")}>семья</button>
        </div>
    )
}

export default Buttons;