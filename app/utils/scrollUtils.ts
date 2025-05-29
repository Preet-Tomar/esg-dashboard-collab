export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = 64; // Adjust this value based on your navbar height
    const sectionTop = section.offsetTop - navbarHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
};

