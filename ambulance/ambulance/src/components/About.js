import React from 'react'
import ambulancelogimg from "../images/ambulance logo img.jpg"
import fpolicy from "../images/fpolicy.jpg"
import mins from "../images/mins.jpg"
import hrs from "../images/hrs.jpg"
import ambulance from "../images/ambulance.jpg"
import Tranport from './Tranport'


export default function About() {
  return (
    <div>
      <div className='col-12 row m-0 p-0' style={{ backgroundColor: 'pink' }}>

        <div className='col-6 p-0 m-0'>
          <h2>Why Choose Us</h2>
          <div className="d-flex">
            <h4 style={{ width: "300px" }}>ProfessionalCare:</h4>
            <div>Our ambulances are staffed with trained medical personnel to provide you with the highest level of care.</div>
          </div>
          <div className="d-flex">
            <h4 style={{ width: "250px" }}>24/7Availability:</h4>
            <div>Our services are available round-the-clock to ensure you get the help you need at any hour</div>
          </div>
          <div className="d-flex">
            <h4 style={{ width: "220px" }}>RealTimeTracking:</h4>
            <div> Monitor the location and arrival time of your booked ambulances in real-time.</div>
          </div>
          <div className="d-flex">
            <h4 style={{ width: "280px" }}>Wide Network:</h4>
            <div>We have a vast network of ambulances across [Your City/Region], ensuring quick and efficient service.</div>
          </div>
        </div>
        <div className='col-6 p-0 m-0'>
          <h2>What We Do</h2>
          <h6>We offer an easy-to-use online platform and mobile app for booking ambulances. Whether it’s a sudden medical emergency or a planned hospital visit, our service ensures that a well-equipped ambulances reaches you promptly. Our services include</h6>
          <div className="d-flex">
            <h4 style={{ width: "295px" }}>Emergency ambulances Services:</h4>
            <div>Immediate response for critical medical situations.</div>
          </div>
          <div className="d-flex">
            <h4 style={{ width: "350px" }}>Non-Emergency Transport:</h4>
            <div>For routine check-ups, hospital discharges, and other medical appointments.</div>
          </div>
          <div className="d-flex">
            <h4 style={{ width: "490px" }}>Specialized ambulances Services:</h4>
            <div>Equipped with advanced life support (ALS) and basic life support (BLS) facilities for patients with specific needs.</div>
          </div>
        </div>
      </div>

      <div className='col-12 row m-0 p-0' >

        <div className='col-6 p-0 m-0' style={{ backgroundColor: "orange" }}>
          <div class="problem rounded-lg light__pink problem__list">
            <h3 class="mt-2 mb-4 dpink-color">Problem</h3>
            <p>In 2020, 1,51,000 fatalities were caused due to road accidents. 50%<br /> lives of road accident victims could have been saved if timely<br /> assistance was made available to them.Moreover, 40%-60%<br /> deaths in India are preventable. The major issues faced are :</p>
            <ul class="list">
              <li>Severe lack of awareness and facility of first aid communication</li>
              <li>Inability of a person to have a top of mind recall of emergency numbers</li>
              <li>High response time</li>
              <li>Large number of calls being missed</li>
              <li>The Emergency &amp; Ambulatory services sector is unorganised</li>
              <li>Lack of awareness coupled with the lack of technology</li>
              <li>No standard practice in ERS, affecting serviceability &amp; customer experienc </li>
              <li>No prominent national entity in emergency response.</li>
            </ul>
            <p>Since the COVID-19 outbreak, panic among people and lack of awareness about emergency services. </p></div>
        </div>

        <div className='col-6 p-0 m-0' style={{ backgroundColor: 'lightsalmon' }}>
          <div class="solution rounded-lg light__blue solution__list">
            <h3 class="mt-2 mb-4 blue-color">Solution</h3>
            <p>Medulance Healthcare is India's first &amp; leading comprehensive emergency response service provider, extensively dealing in the Ambulatory Services. We provide -</p>
            <ul class="list">
              <li>End to end emergency response service</li>
              <li>GPS enabled high quality ambulances</li>
              <li>Emergency Management Technology</li>
              <li>Trained Drivers and certified Paramedics</li>
              <li>Covering 22 cities in India (All metros &amp; Major tier 2 cities) </li>
              <li>Dedicated Helpline Number</li>
            </ul>
            <img src={ambulancelogimg} style={{ height: '300px', width: '400px' }} />
          </div>
        </div>
      </div>


      <section style={{backgroundColor:"#2f2e41",color:"white"}} >
        <div class="container" >
          <div class="row">
            <div >
              <h2>Why Choose Us?</h2>
              <p>At  patient care and convenience go hand-in-hand.Our integrated ambulance transport services were created to assist in saving human lives by providing an ultimate network of equipped Ambulances.By simple location-based mapping, we built a 24/7 emergency and technology platform that connects the customers and the ambulance drivers directly with each other.</p>
            </div>
          </div>
          <div className="col-12 row m-0 p-0">
            <div className='col-3' style={{display:"flex"}}>
              <img src={fpolicy} alt="fpolicy" class="rounded-circle mr-3" style={{ width: '80px' }} />
              <span>Patient first policy</span>
            </div>
            <div className='col-3' style={{display:"flex"}}>
              <img src={mins} alt="15 min" class="rounded-circle mr-3" style={{ width: "80px" }} />
              <span>Emergency <br/>assistance within<br/> 15 minutes or less</span>
            </div>
            <div className='col-3' style={{display:"flex"}}>
              <img src={hrs} alt="24*7 hrs" class="rounded-circle mr-3" style={{ width: "80px" }} />
              <span>24/7 Support</span>
            </div>
            <div className='col-3' style={{display:"flex"}}>
              <img src={ambulance} alt='ambul' class="rounded-circle mr-3" style={{ width: "80px" }} />
              <span>Biggest fleet of <br/> 7500 ambulances<br/> across India</span>
            </div>
          </div>
        </div>
      </section>

      <Tranport/>

      
    </div>
  )
}
