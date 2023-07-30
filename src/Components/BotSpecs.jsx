import { HiXMark } from "react-icons/hi2"
import { FaHeartbeat } from "react-icons/fa"
import { BsFillLightningFill, BsShieldShaded } from "react-icons/bs"    

function BotSpecs() {

    return (
        <div className="card h-90">
            {/* X mark icon styling */}

            <div className="card-main-details d-flex justify-content-center">
                <div className="left-details-part">
                    <img src="https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1" className="card-img-top" alt="..."/>
                </div>

                <div className="right-details-part text-left">
                    <h4>Name: u-69</h4>
                    <div className="card-body">
                        <h5 className="card-title">WJsd 3</h5>
                        <p className="card-text">0000000000185028520385023</p>
                    </div>
                    <div className="card-footer">
                        <FaHeartbeat/> 23 <BsFillLightningFill/> 53 <BsShieldShaded /> 52
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BotSpecs;