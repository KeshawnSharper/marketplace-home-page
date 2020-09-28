import React from 'react'
import cx from 'classnames'

import UserIcon from '../icons/user'
import Camera from '../icons/camera'
import Down from '../icons/down'
import Setting from '../icons/settings'
import SearchIcon from '../icons/search'
import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.innerHeader}>
      <Brand />
      <Search />
      <User />
    </div>
  </header>
)

const User = () => (
  <div className={styles.user}>
    <button className={cx(styles.btn, styles.sell)}>
      <Camera />
      <span>Sell</span>
    </button>
    <button className={cx(styles.btn, styles.userIcon)}>
      <UserIcon />
    </button>
  </div>
)

const Search = () => (
  <div className={styles.search}>
    <SearchIcon />
    <input
      type="text"
      placeholder="Search ..."
      className={styles.searchInput}
    />
    <div className={styles.dropdown}>
      <span>All Cities</span>
      <Down />
    </div>
    <button className={styles.settingsBtn}>
      <Setting />
    </button>
  </div>
)

const Brand = () => (
  <a href="#!" className={styles.brand}>
    Avito
  </a>
)

export default Header
