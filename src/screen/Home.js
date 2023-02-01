import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <section className='hero-section mt-2'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://media.istockphoto.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=612x612&w=0&k=20&c=6up_J8ekhYIbF3qiUEo9t28u8X-UrFNqwryyRhBl35w=" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1077470988/photo/smart-phone-and-tablets-in-the-near-future-can-play-games-with-vr-or-scan-the-brain-waves-for.jpg?s=612x612&w=0&k=20&c=YZIBvaOs8bEhhWFebhQkjfDHIXiZVK68pl3Bd7MRzCc=" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1192643098/photo/hacker-with-laptop-in-night-city-network.jpg?s=612x612&w=0&k=20&c=5gYjwafU_NOj3ViMfWbfy2NExAbMJMzsVV_eMRQ7HTY=" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </section>
      <section className='featured-post container'>
       <h3 className='text-center text-uppercase pt-4'>FEATURED POSTS</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12 '>
           <div className='card'>
           <img src="https://media.istockphoto.com/id/683754162/photo/success-concept.jpg?s=612x612&w=0&k=20&c=YWDg7OeSDmCaQJ0tsXOP_ruaYlrKuaQ63P2xeghBSY0=" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <div className='d-grid'>
             <a href="#" className="btn btn-warning">Read More</a>
             </div>
           </div>
         </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 '>
          <div className='card'>
          <img src="https://media.istockphoto.com/id/685018656/photo/workplace-with-laptop-coffee-and-sketch.jpg?s=612x612&w=0&k=20&c=l9U-B21BJaDGqAVtbezfpg4r7prftk494kjxvgIE9GA=" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='d-grid'>
             <a href="#" className="btn btn-warning">Read More</a>
             </div>
          </div>
        </div>
         </div>
         <div className='col-lg-4 col-md-4 col-sm-12 '>
         <div className='card'>
         <img src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw=" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className='d-grid'>
             <a href="#" className="btn btn-warning">Read More</a>
             </div>
         </div>
       </div>
        </div>
       </div>
      </section>
      <section className='featured-post container'>
       <h3 className='text-center text-uppercase pt-4'>LATEST POSTS</h3>
       <div className='row'>
       <div className='col-lg-4 col-md-4 col-sm-12 '>
        <div className='card'>
        <img src="https://media.istockphoto.com/id/683754162/photo/success-concept.jpg?s=612x612&w=0&k=20&c=YWDg7OeSDmCaQJ0tsXOP_ruaYlrKuaQ63P2xeghBSY0=" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className='d-grid'>
          <a href="#" className="btn btn-warning">Read More</a>
          </div>
        </div>
      </div>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 '>
         <div className='card'>
         <img src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw=" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className='d-grid'>
             <a href="#" className="btn btn-warning">Read More</a>
             </div>
         </div>
       </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 '>
         <div className='card'>
         <img src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw=" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className='d-grid'>
             <a href="#" className="btn btn-warning">Read More</a>
             </div>
         </div>
       </div>
        </div>
       </div>
       </section>
       <section className='featured-post container'>
       <h3 className='text-center text-uppercase py-4'>OUR PORTFOLIO</h3>
       <div className="container">
       <div className="row g-2">
         <div className="col-6">
           <div className="p-1 border bg-danger ">
           <img src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw=" className="card-img-top" alt="..."/>
           </div>
         </div>
         <div className="col-6">
           <div className="p-1 border bg-dark">
           <img src="https://media.istockphoto.com/id/891036828/photo/saving-money-for-retirement-plan.jpg?s=612x612&w=0&k=20&c=PtWmG88gLx-XSHyVkg-j_Aw1wPyAIfRNfhPmmWY4384=" className="card-img-top" alt="..."/>
           </div>
         </div>
         <div className="col-6">
           <div className="p-1 border bg-dark">
           <img src="https://media.istockphoto.com/id/1436918941/photo/business-and-investment.jpg?s=612x612&w=0&k=20&c=CM8vaQxaaiIy2tGypKgsdD9Fhx5L-22TyVrcRfFLep8=" className="card-img-top" alt="..."/>
           </div>
         </div>
         <div className="col-6">
           <div className="p-1 border bg-danger">
           <img src="https://media.istockphoto.com/id/1449854429/vector/concept-of-coffee-break-brunch-or-time-lunch-at-work-successful-business-woman-take-a-break.jpg?s=612x612&w=0&k=20&c=GoeNinQU9_Tb1vEzbhIGIVkHLPFI-J_FvXAuy_ryhrA=" className="card-img-top" alt="..."/>
           </div>
         </div>
       </div>
     </div>
       </section>
       <section className="testimonials">
       <h3 className='text-center text-uppercase py-4'>TESTIMONIALS</h3>
       <section>
       <div className="row text-center  text-uppercase pt-4">
         <div className="col-md-6 mb-4 mb-md-0">
           <div className="d-flex justify-content-center mb-4">
             <img
               src="https://avatars.githubusercontent.com/u/65748069?v=4"
               className="rounded-circle shadow-1-strong"
               width={100}
               height={100}
             />
           </div>
           <p className="lead my-3  text-center">
           “If debugging is the process of removing software bugs, then programming must be the process of putting them in”
           </p>
           <p className="font-italic font-weight-normal mb-0">- Sudhanshu Singh</p>
         </div>
         <div className="col-md-6 mb-0">
           <div className="d-flex justify-content-center mb-4">
             <img
               src="https://avatars.githubusercontent.com/u/110010807?v=4"
               className="rounded-circle shadow-1-strong"
               width={100}
               height={100}
             />
           </div>
           <p className="lead my-3 ">
           “Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”
           </p>
           <p className="font-italic font-weight-normal mb-0">- Divi Sharma </p>
         </div>
       </div>
     </section>
       </section>
    </div>
  )
}

export default Home