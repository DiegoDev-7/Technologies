const App = (props) => {
    return (
        <>
            <div>
                <GrandChild armas={props.nameGuns.join(", ")} />
            </div>
        </>
    )
}

const GrandChild = (props) => {
    return <p>{props.armas}</p>
}

export default App