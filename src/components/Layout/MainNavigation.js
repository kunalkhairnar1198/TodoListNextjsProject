import React from 'react';
import classes from './MainNavigation.module.css'
import Link from 'next/link';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>TodoList</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>TodoList</Link>
          </li>
          <li>
            <Link href='/Add-newtodo'> + Add new Todo</Link>
          </li>
          <li>
            <Link href='/completed-task'> CompletedTask</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
