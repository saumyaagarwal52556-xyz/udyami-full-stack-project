
function Slides(info){
    return(
        <>
         
        <div className=" shrink-0 flex flex-col w-64 h-72 p-1.5 m-2.5 gap-6 rounded-xl bg-white shadow-sm snap-center" >

            <h2 className='flex justify-center items-center h-9 w-9 bg-gray-100 text-xl font-semibold rounded-full'>{info.number}</h2>
              <img src={info.img} className="h-32 w-full object-cover rounded-md" alt="" />
      
            <p className="text-sm leading-relaxed text-gray-800 flex-1 overflow-hidden line-clamp-3">
        
                {info.par}
            </p>
            <button className="mx-auto block font-light bg-[#e7e7f6] rounded-[5px] px-4 py-1 text-sm">
        
                {info.btn}
            </button>
            
        </div>
       </>

    )

}


export default Slides;