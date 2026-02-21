class MyHeader extends HTMLElement {
    connectedCallback() {
        const isTransparent = this.getAttribute('transparent') === 'true';
        const headerClass = isTransparent ? 'header-transparent' : 'header-solid';

        this.innerHTML = `
            <header class="eduvibe-header ${headerClass}">
                <div class="container header-container">
                    
                    <div class="logo">
                        <a href="index.html" style="text-decoration: none; color: #1F1F39;">
                            <img src="images/Agrim-Logo-removebg-preview.png" alt="Agrim Logo"> 
                        </a>
                    </div>

                    <nav class="main-menu">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            
                            <li class="has-drodpown">
                                <a href="#">Courses <i class="fas fa-chevron-down"></i></a>
                                <ul class="submenu">
                                    <li><a href="/iit-jee">IIT-JEE (Mains & Advanced)</a></li>
                                    <li><a href="/neet">NEET & Medical</a></li>
                                    <li><a href="/olympiad">Olympiad</a></li>
                                    <li><a href="/ntse">NTSE</a></li>
                                    <li><a href="/cbse">CBSE Board</a></li>
                                    <li><a href="/crash-course">Crash Course</a></li>
                                    
                                </ul>
                            </li>

                            <li class="has-drodpown">
                                <a href="#">Batches <i class="fas fa-chevron-down"></i></a>
                                <ul class="submenu">
                                    <li><a href="/pre-foundation">Pre-Foundation</a></li>
                                    <li><a href="/foundation">Foundation (9th-10th)</a></li>
                                    <li><a href="/achievers">Achievers (11th-12th)</a></li>
                                    <li><a href="/target">Target (Droppers)</a></li>
                                    <li><a href="/elite">Elite Batch</a></li>
                                </ul>
                            </li>
                            
                            
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div class="header-right">
                        <button class="search-btn">
                            <i class="fas fa-search"></i>
                        </button>

                        <div class="mobile-toggle">
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>

                </div>
            </header>
        `;

        // --- 1. Sticky Header Logic ---
        window.addEventListener('scroll', () => {
            const header = this.querySelector('.eduvibe-header');
            if (window.scrollY > 50) {
                header.classList.add('header-sticky');
            } else {
                header.classList.remove('header-sticky');
            }
        });

        // --- 2. Mobile Menu Toggle Logic ---
        const toggleBtn = this.querySelector('.mobile-toggle');
        const mainMenu = this.querySelector('.main-menu');
        const icon = toggleBtn.querySelector('i');

        toggleBtn.addEventListener('click', () => {
            // Toggle the 'active' class on the menu
            mainMenu.classList.toggle('active');

            // Switch Icon between Bars and Times (X)
            if (mainMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}



customElements.define('my-header', MyHeader);