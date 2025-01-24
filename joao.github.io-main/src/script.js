function scrollToSection(className) {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  document.querySelector('.button:nth-child(1)').addEventListener('click', () => {
    scrollToSection('sobreMim_image');
  });
  
  document.querySelector('.button:nth-child(2)').addEventListener('click', () => {
    scrollToSection('projectos_finalBanner');
  });
  
  document.querySelector('.button:nth-child(3)').addEventListener('click', () => {
    scrollToSection('contacto_banner');
  });
  