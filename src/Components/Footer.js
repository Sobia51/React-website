import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p
                    className=' footer-subscription-heading'>
                    Join out Newsletter to get updated with our deals----

                </p>
                <p className='footer-subscription-text'>
                    You can subscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email'
                            className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>

            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> About Us</h2>
                        <Link to='/signup'> How it works </Link>
                        <Link to='/'> Testimonials </Link>
                        <Link to='/'> Careers </Link>
                        <Link to='/'> Term and Policies</Link>
                    </div>
             
                
                    <div className='footer-link-items'>
                        <h2> Contact Us</h2>
                        <Link to='/'> Contact </Link>
                        <Link to='/'> Support </Link>
                        <Link to='/'> Designs</Link>
                        <Link to='/'> Sponsprships</Link>
                        </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> Videos</h2>
                        <Link to='/'> Watch full video </Link>
                        <Link to='/'> Ambassadors </Link>
                        <Link to='/'> Agency </Link>
                        <Link to='/'> Influencer</Link>
                    </div>
               
                
                    <div className='footer-link-items'>
                        <h2> Social Media </h2>
                        <Link to='/'> Facebook </Link>
                        <Link to='/'> Instagram  </Link>
                        <Link to='/'> YouTube  </Link>
                        <Link to='/'> Email</Link>
                    
                </div>
                </div>
            </div>
<section className='social-media'>
    <div className='social-media-wrap'>
        <div className='footer-logo'>
            <Link className='social-logo'>
               Modern Walk <i className= 'fab fa-typo3'/>

            </Link>
        </div>
        < small className='website-rights'> Modern Walk @ 2022 </small>
        <div className='social-icons'>
            <Link 
            className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
            >
                < i className ='fab fa-facebook-f'/>
            </Link>
            <Link 
            className='social-icon-link instagram '
            to='/'
            target='_blank'
            aria-label='Instagram'
            >
                < i className ='fab fa-instagram'/>
            </Link>

            <Link 
            className='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='YouTube'
            >
                < i className ='fab fa-youtube'/>
            </Link>
            <Link 
            className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
            >
                < i className ='fab fa-twitter'/>
            </Link>
            <Link 
            className='social-icon-link linkedin'
            to='/'
            target='_blank'
            aria-label='Linkedin'
            >
                < i className ='fab fa-linkedin'/>
            </Link>

        </div>

    </div>
</section>

        </div>
        
    );
}
export default Footer;