import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import links from './navbar.links.json'

import styles from './navbar.module.scss'

const Navbar = () => (
  <nav className={styles.wrapper}>
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <Image src="/static/img/logo.png" alt="Farsta karate" width="496" height="156" />
        </a>
      </Link>
    </div>

    <input id="menu-toggle" className={styles.menuToggle} type="checkbox" />
    <label className={styles.menuButtonContainer} htmlFor="menu-toggle">
      <div className={styles.menuButton} />
    </label>

    <div className={styles.menu}>
      {links.map(link => {
        if (link.children) {
          return (
            <div key={link.title} className={styles.subMenu}>
              <span>{link.title}</span>
              <div className={styles.subMenuItems}>
                {link.children.map(c => {
                  return <Link key={c.url} href={c.url}>{c.title}</Link>
                })}
              </div>
            </div>
          )
        }

        return <Link key={link.url} href={link.url}>{link.title}</Link>
      })}
    </div>
  </nav>
)

export default Navbar
