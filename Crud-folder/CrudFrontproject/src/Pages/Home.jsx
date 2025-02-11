import Carousel from 'react-bootstrap/Carousel';


const Home=()=>{
    return(
        <>
        <div style={{backgroundColor:"#4CAF50",color:"white",padding:"20px",borderRadius:"10px 10px 0 0"}}>
        <h1 style={{textAlign:"center"}}>Students Home Page Choching Center</h1>

        </div>
         <div id="photo">
         <h1 style={{textAlign:"center",backgroundColor:"lightblue"}}>Start Today itself</h1>
           <Carousel>
      <Carousel.Item>
        <img src="pic1.jpg" alt="" width="100%" height="850px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img src="pic4.jpg" alt="" width="100%" height="850px" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="pic5.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <div id="pic">
            <img src="./pic1.jpg" alt="" />
            <img src="./pic2.jpg" alt="" />
            <img src="./pic3.jpg" alt="" />
            <img src="./pic4.jpg" alt="" />
        </div>
      
        </>
    )
}

export default Home