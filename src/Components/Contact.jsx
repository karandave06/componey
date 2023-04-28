import styled from 'styled-components'
import '../style/styled.scss'
const Contact = () => {
  const Wrapper = styled.section`
  padding:9rem 0 5rem 0;


  .container{
    margin-top:6rem;
    text-align:center;
  }
  `;

  return (
    <div id="contact">
    <Wrapper>
      <h2>Feel Free to contact us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.730569203312!2d72.55881301744382!3d23.0336629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e873488c3f5b9%3A0xa197df6e775bb7ce!2sHostingstar.in!5e0!3m2!1sen!2sin!4v1682610937475!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div >
          <form action="#" method='post' className="contact-form">
            <input type="text" 
            placeholder='Enter your name'
            autoComplete='off' 
            required/>

<input type="email" 
            placeholder='Enter your email'
            autoComplete='off' 
            required/>

<textarea name="massage" placeholder='Massage' id="" cols="30" rows="6"></textarea>

<button className="btn">
  Submit
</button>
          </form>
        </div>
      </div>
    </Wrapper>
    </div>
  )
}

export default Contact
