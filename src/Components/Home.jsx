import '../style/home.scss'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import Contact from './Contact'
const Home = () => {

  return (
    <>

    <div className="home" id="home">
      <main>
        <h1>Welcome to Ram Tech</h1>
        <p>Solution to all your problem</p>
      </main>
    </div>

    <div className="home2">
      <img src={vg} alt="" />

      <div className='content'>
        <p> We are only your one and only solution for tech problems you everyday.
        We are leading teach componey whose aim is to incrse the problem solving
        ability in children.</p>
      </div>
    </div>

    <div className="hom3" id='about'>
    <div className='content3'>

    
<h1>Who We are?</h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores molestiae esse tempore nam aspernatur voluptas doloribus dignissimos quaerat, nihil quos, numquam qui magnam. Asperiores fugit magni dolore. Quaerat beatae, velit nihil perferendis a explicabo, commodi nisi quo error maxime, libero ipsum id reprehenderit odio.
</p>
    </div>
    </div>

    <div className="home4" id='brands'>
      <div className='content4'>
        <h1>Brands</h1>

        <article>
          <div
          style={{animationDelay: "0.3s"}}
          >

<AiFillGoogleCircle />
<p>Google</p>

          </div>

          <div
          style={{animationDelay: "0.4s"}}
          >

<AiFillAmazonCircle />
<p>Amazon</p>

          </div>

          <div
          style={{animationDelay: "0.5s"}}
          >

<AiFillInstagram />
<p>Instagram</p>

          </div>


          <div
          style={{animationDelay: "0.6s"}}
          >

<AiFillYoutube />
<p>Youtub</p>

          </div>
        </article>

      </div>
    </div>


    {<Contact />}

    </>

  )
}

export default Home
