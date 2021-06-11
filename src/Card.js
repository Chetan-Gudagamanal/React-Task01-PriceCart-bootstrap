import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CardDetails from './CardDetails';

export default function Card({tier,cost}){
    return(
        
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{tier}</h5>
                <h6 className="card-price text-center">${cost}<span className="period">/month</span></h6>
                <hr/>
                <CardDetails tier={tier}/>
                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
            </div>
            </div>
        </div>
        
    )
}