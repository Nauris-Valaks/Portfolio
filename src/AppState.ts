export const baseLinkUrl = 'https://nauris-valaks.github.io/';

export class AppState {
  public navigationItems = [
    { linkName: 'Work', hrefName: '#work' },
    { linkName: 'About', hrefName: '#about' },
    { linkName: 'Contact', hrefName: '#contact' },
  ];


  handleScrollTo = (elRef: any) => { // use consts or let
    const el = elRef.current ? elRef.current : elRef
    
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
