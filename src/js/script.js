
        // Função para alternar a exibição do menu lateral
        const container = document.getElementById('container')
        const menuToggle = document.getElementById('menuToggle');
        const menuLateral = document.getElementById('menuLateral');
        const closeMenuBtn = document.getElementById('closeMenuBtn');
        const mainContent = document.getElementById('mainContent');
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                
                container.style.gridTemplateColumns = '';
                menuLateral.style.display = '';
                menuLateral.style.left = '';
            }
        });
        
        menuToggle.addEventListener('click', () => {
            
        
        
            container.style.gridTemplateColumns = '1fr 7fr';
            
            
            menuLateral.style.display = 'flex'; // 
            
                menuLateral.style.left = '0'; // 
           
           
                 
            
           
        });
        
        
        closeMenuBtn.addEventListener('click', () => {
            container.style.gridTemplateColumns = '1fr';
           
           
                menuLateral.style.display = 'none'; 
           
           
        });
        
        // Fecha o menu lateral ao clicar fora dele (no main)
        // mainContent.addEventListener('click', () => {
            
        //     if (menuLateral.style.left === '0px') {
                
        //         container.style.gridTemplateColumns = '1fr 7fr';
        //     }
        // });
        
        
        function closeMenu() {
            container.style.gridTemplateColumns = '1fr 7fr';
           
           
                menuLateral.style.display = 'none'; 
            
        }
        
        
        
            const carousel = document.querySelector('.carousel');
            const btnPrev = document.querySelector('.carousel-btn.prev');
            const btnNext = document.querySelector('.carousel-btn.next');
          
            let isDragging = false;
            let startX;
            let scrollLeft;
          
            // Scroll com botões
            btnPrev.addEventListener('click', () => {
              carousel.scrollBy({ left: -300, behavior: 'smooth' });
            });
          
            btnNext.addEventListener('click', () => {
              carousel.scrollBy({ left: 300, behavior: 'smooth' });
            });
          
            // Scroll com arraste do mouse
            carousel.addEventListener('mousedown', (e) => {
              isDragging = true;
              startX = e.pageX - carousel.offsetLeft;
              scrollLeft = carousel.scrollLeft;
            });
          
            carousel.addEventListener('mouseleave', () => {
              isDragging = false;
            });
          
            carousel.addEventListener('mouseup', () => {
              isDragging = false;
            });
          
            carousel.addEventListener('mousemove', (e) => {
              if (!isDragging) return;
              e.preventDefault();
              const x = e.pageX - carousel.offsetLeft;
              const walk = (x - startX) * 2;
              carousel.scrollLeft = scrollLeft - walk;
            });
        
        
        
        
        
        
        