import '@fortawesome/fontawesome-free/css/all.min.css';

export default function CardDetails({tierObj}){
    
        return(
            <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{tierObj["user"]}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{tierObj["storage"]}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{tierObj["public-projects"]}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{tierObj["access"]}</li>
                
                {tierObj["private-projects"]?
                (<li><span className="fa-li"><i className="fas fa-check"></i></span>{tierObj["private-projects"]}</li>):
                (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>)}

                {tierObj["phone-support"]?
                (<li><span className="fa-li"><i className="fas fa-check"></i></span>{tierObj["phone-support"]}</li>):
                (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>)}

                {tierObj["subdomain"]?
                (<li><span className="fa-li"><i className="fas fa-check"></i></span>{tierObj["subdomain"]}</li>):
                (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>)}

                {tierObj["reports"]?
                (<li><span className="fa-li"><i className="fas fa-check"></i></span>{tierObj["reports"]}</li>):
                (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>)}
            </ul>
        )
    }
