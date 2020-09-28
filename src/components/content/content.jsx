import React from 'react'

import HeroImage from './hero-image'
import styles from './content.module.css'

import LabelIcon from '../icons/label'
import Car from '../icons/car'
import Home from '../icons/home'
import Job from '../icons/job'
import Phone from '../icons/phone'
import Clothing from '../icons/clothing'
import Headphone from '../icons/headphone'
import Book from '../icons/book'
import More from '../icons/more'

const Content = () => (
  <div className={styles.content}>
    <Hero />
    <Categories />
  </div>
)

const Categories = () => (
  <div>
    <div className={styles.catTitle}>
      <h3>Categories</h3>
      <a href="#!">See all</a>
    </div>
    <div className={styles.catList}>
      {[
        { label: 'Cars', icon: <Car /> },
        { label: 'Real estate', icon: <Home /> },
        { label: 'Jobs', icon: <Job /> },
        { label: 'Phones', icon: <Phone /> },
        { label: 'Clothing', icon: <Clothing /> },
        { label: 'Accessories', icon: <Headphone /> },
        { label: 'Books', icon: <Book /> },
        { label: 'Other', icon: <More /> },
      ].map(({ label, icon }, index) => (
        <Cat label={label} icon={icon} key={index} />
      ))}
    </div>
  </div>
)

const Cat = ({ label, icon }) => (
  <div className={styles.cat}>
    <span className={styles.catIcon}>{icon}</span>
    <span className={styles.catLabel}>{label}</span>
  </div>
)

const Hero = () => (
  <div className={styles.hero}>
    <div>
      <h3 className={styles.titleTag}>
        <LabelIcon />
        <span>Trending Category</span>
      </h3>
      <h2 className={styles.bigTitle}>Clothing</h2>
      <p className={styles.titleLead}>62% more content than last week</p>
      <button className={styles.heroCta}>Explore</button>
    </div>
    <div>
      <HeroImage width="220px" height="auto" />
    </div>
  </div>
)

export default Content
