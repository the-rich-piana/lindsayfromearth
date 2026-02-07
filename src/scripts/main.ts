/**
 * Main TypeScript file for Mia Lindsay Health & Wellness website
 * Handles smooth scrolling navigation and mobile menu toggle
 */

// Type definitions
interface NavItem {
  element: HTMLElement;
  href: string;
}

/**
 * SmoothScroll class handles smooth scrolling behavior for anchor links
 */
class SmoothScroll {
  private navItems: NavItem[] = [];

  constructor() {
    this.init();
  }

  /**
   * Initialize smooth scroll behavior for all navigation links
   */
  private init(): void {
    // Select all anchor links that point to page sections
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      const element = link as HTMLElement;
      const href = element.getAttribute('href');

      if (href && href !== '#') {
        this.navItems.push({ element, href });
        element.addEventListener('click', (e) => this.handleClick(e, href));
      }
    });
  }

  /**
   * Handle click event on navigation link
   */
  private handleClick(event: Event, targetId: string): void {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Calculate offset for fixed navbar
      const navbarHeight = document.querySelector('.navbar')?.clientHeight || 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      const navbarMenu = document.getElementById('navbarMenu');
      if (navbarMenu?.classList.contains('is-active')) {
        navbarMenu.classList.remove('is-active');
        document.querySelector('.navbar-burger')?.classList.remove('is-active');
      }
    }
  }
}

/**
 * MobileMenu class handles mobile hamburger menu toggle
 */
class MobileMenu {
  private burger: HTMLElement | null;
  private menu: HTMLElement | null;

  constructor() {
    this.burger = document.querySelector('.navbar-burger');
    this.menu = document.getElementById('navbarMenu');
    this.init();
  }

  /**
   * Initialize mobile menu toggle functionality
   */
  private init(): void {
    if (this.burger && this.menu) {
      this.burger.addEventListener('click', () => this.toggle());
    }
  }

  /**
   * Toggle mobile menu open/closed
   */
  private toggle(): void {
    if (this.burger && this.menu) {
      this.burger.classList.toggle('is-active');
      this.menu.classList.toggle('is-active');
    }
  }
}

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize smooth scrolling
  new SmoothScroll();

  // Initialize mobile menu
  new MobileMenu();

  // Add fade-in animation to elements as they appear
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe sections for fade-in animation
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => observer.observe(section));

  console.log('Mia Lindsay Health & Wellness website initialized successfully');
});

// Export classes for potential reuse
export { SmoothScroll, MobileMenu };
