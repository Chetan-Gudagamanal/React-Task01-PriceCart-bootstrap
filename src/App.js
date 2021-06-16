
import './App.css';
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';

let tierArr=[
  {"tier":"FREE","cost":"0","user":"Single User","storage":"5GB Storage","public-projects":"Unlimited Public Projects","access":"Community Access"},
  {"tier":"PLUS","cost":"9","user":"5 Users","storage":"50GB Storage","public-projects":"Unlimited Public Projects","access":"Community Access","private-projects":"Unlimited Private Projects","phone-support":"Dedicated Phone Support","subdomain":"Free Subdomain"},
  {"tier":"PRO","cost":"49","user":"Unlimited Users","storage":"150GB Storage","public-projects":"Unlimited Public Projects","access":"Community Access","private-projects":"Unlimited Private Projects","phone-support":"Dedicated Phone Support","subdomain":"Free Subdomain","reports":"Monthly Status Reports"}
]
function App() {
  return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <Card tierArr={tierArr}/>
          </div>
        </div>
      </section>
  );
}


export default App;
