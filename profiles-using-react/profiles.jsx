
function User_profiles (info){
    return(
        <div className="child">
            <img src={info.img}>
            </img>
            <h4>
                {info.user}
            </h4>
            <div className="child-inner">
            <button>
                {info.button}
            </button>
            <button>
                {info.button2}</button>
            
            </div>
            <button>Apply Now</button>
        </div>
    )

}
export default User_profiles