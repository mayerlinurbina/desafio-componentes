const Input = ({setNombre , setPassword}) => {

    return (
        <div className="inputs-container">
            <input type="text" placeholder="Nombre" onChange={(e)=> setNombre(e.target.value)}/>
            <input type="password" placeholder="Ingrese contraseña" onChange={(e)=> setPassword(e.target.value)}/>
        </div>
    )
}

export default Input