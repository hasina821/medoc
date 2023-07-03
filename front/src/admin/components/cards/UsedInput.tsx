export const Message = ({label,placeholder}:any)=>{
    return(
        <div className="text-sm w-full">
            <label className="text-border font-semibold"> {label}</label> 
            <textarea className="w-full h-40 mt-2 p-6 bg-main border border-border rounded" placeholder="Votre message">
            </textarea> 
        </div>
    )
}

export const Select = ({label,options,onChange}:any)=>{
    return(
        <>
            <label className="text-subMain font-semibold">{label}</label>
            <select className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded" onChange={onChange}>
                {options.map((option:any,i:number)=>(
                    <option key={i} value={option.value}> 
                        {option.title}
                    </option>
                ))}
            </select>
        </>
    )
}

export const Input = ({label,placeholder,type,bg,defaultval}:any)=>{
    return(
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <input 
            defaultValue={defaultval}
            required 
            type={type} 
            placeholder={placeholder} 
            className={`w-full  text-sm  mt-2 p-5 border border-gray-300 rounded text-white ${bg? "bg-main":"bg-dry"}`}/>
        </div>
    )
}