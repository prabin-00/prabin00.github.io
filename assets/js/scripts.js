//Accordion Logic
    function toggleAccordion(element) {
        const body = element.nextElementSibling;
        const icon = element.querySelector('i');
        
        // Close all others
        const allBodies = document.querySelectorAll('.accordion-body');
        const allIcons = document.querySelectorAll('.accordion-header i');
        
        allBodies.forEach(b => {
            if(b !== body) b.classList.add('hidden');
        });
        allIcons.forEach(i => {
            if(i !== icon) i.style.transform = 'rotate(0deg)';
        });

        // Toggle current
        body.classList.toggle('hidden');
        if(!body.classList.contains('hidden')) {
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    }

    // Modal Logic
    function openModal() {
        document.getElementById('paymentModal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('paymentModal').style.display = 'none';
    }

    // Close modal if clicked outside
    window.onclick = function(event) {
        const modal = document.getElementById('paymentModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Mobile Menu
    function toggleMenu() {
        const nav = document.querySelector('.nav-links');
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '70px';
            nav.style.right = '0';
            nav.style.background = 'white';
            nav.style.width = '100%';
            nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            nav.style.padding = '20px';
        }
    }

    // Set Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Prevent Right Click (Content Protection)
    document.addEventListener('contextmenu', event => event.preventDefault());
    
    // Prevent Keyboard Shortcuts for Save (Ctrl+S, Ctrl+P)
    document.onkeydown = function(e) {
        if(e.ctrlKey && (e.keyCode === 83 || e.keyCode === 80 || e.keyCode === 85)) {
            alert('This content is protected. Please buy a subscription to download/print.');
            return false;
        }
    };
