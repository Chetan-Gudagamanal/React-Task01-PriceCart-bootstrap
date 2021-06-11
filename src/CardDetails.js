import '@fortawesome/fontawesome-free/css/all.min.css';
export default function CardDetails({tier}){
    if(tier==="FREE"){
        return(
            <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
            </ul>
        )
    }
    else if(tier==="PLUS"){
        return(
            <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
            </ul>
        )
    }
    else{
        return(
            <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
        )
    }
}