import './home.css'

const Home = () => {
    return (
      <div>
        <div className="big-image">
          <img src="images/3.jpg" alt="alt" />
        </div>
          <h1>What we provide <hr/></h1>
        <div className="home-items">
            <div className="home-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro id fuga quas reiciendis delectus minus, accusantium neque esse autem officia maxime dignissimos ullam vitae? Possimus quaerat doloribus recusandae consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, error? Quia error modi adipisci deleniti, voluptatibus laborum dolor quaerat a quisquam quod! Harum, tenetur quo distinctio reprehenderit debitis hic veniam.</p>
            </div>

            <div className="home-img"><img src="images/1.jpg" alt=""/></div>
        </div>
      </div>
    );
}

export default Home
