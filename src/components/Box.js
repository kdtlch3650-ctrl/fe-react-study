function Box({text, detail}){

    return(
        <div style={{ backgroundColor: 'gray' }}>
                <h1>{text}</h1>
                <p>{detail}</p>
            </div>
    );

}

export default Box;