import ActiveLink from './ActiveLink'
import style from './Navbar.module.css'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
]

export const Navbar = () => {
  return (
    <nav className={style['menu-container']}>
      {menuItems.map((i, index) => (
        <ActiveLink key={index} text={i.text} href={i.href} />
      ))}
    </nav>
  )
}
