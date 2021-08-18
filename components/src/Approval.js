


const Approval = (props) =>{
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    {props.children}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button"> Aprrovel </div>
                        <div className="ui basic red button"> dis Approvel </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Approval;