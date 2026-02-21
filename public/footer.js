class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="eduvibe-footer">
                <div class="footer-dots"></div>
                <div class="container">
                    <div class="footer-grid">
                        
                        <div class="footer-widget about-widget">
                            <div class="footer-logo">
                                <img src="images/Agrim-Logo.jpg" alt="" class="Agrim">
                            </div>
                            <p class="footer-desc">
                                Agrim Classes stands out as a premier coaching institute in Deoli, renowned for its exceptional guidance and coaching for competitive exams like IIT-JEE, NEET, and Foundation courses. With a commitment to excellence and a track record of success.
                            </p>
                            
                        </div>

                        <div class="footer-widget link-widget">
                            <h6 class="widget-title">Explore</h6>
                            <ul class="footer-links">
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Home</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> About Us</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Courses</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Batches</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="footer-widget link-widget">
                            <h6 class="widget-title">Batches</h6>
                            <ul class="footer-links">
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Pre-Foundation</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Foundation</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Achievers</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Target</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Elite</a></li>
                            </ul>
                        </div>

                        <div class="footer-widget contact-widget">
                            <h6 class="widget-title">Contact Info</h6>
                            <ul class="contact-list">
                                <li>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>B-9, 2nd Floor, Above Prabhu Dayal Jewellers Duggal Colony, Devli Road, Khanpur, New Delhi</span>
                                </li>
                                <li>
                                    <i class="fas fa-phone-alt"></i>
                                    <span>+919999474137</span>
                                </li>
                                <li>
                                    <i class="fas fa-envelope"></i>
                                    <span>agrimclassess@gmail.com</span>
                                </li>
                            </ul>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>

                    </div>
                </div>

                <a href="#" class="scroll-top-btn" id="scrollTopBtn">
                    <i class="fas fa-arrow-up"></i>
                </a>
            </footer>
        `;
        
        // Initialize the Scroll-to-Top functionality immediately after rendering
        this.initScrollBtn();
    }

    initScrollBtn() {
        const scrollBtn = this.querySelector('#scrollTopBtn');
        if(scrollBtn) {
            scrollBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
}

// Register the custom tag <my-footer>
customElements.define('my-footer', MyFooter);