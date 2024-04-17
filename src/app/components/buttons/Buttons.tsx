import React from "react"
import Link from "next/link"
import styles from "./page.module.css"

type ButtonProps = {
  text: string,
  url: string
}

const Button = ({ text, url }: ButtonProps) => {
  return (
    <Link href={url}>
      <button className={styles.button}>
        <span className="relative z-10">{text}</span>
      </button>
    </Link>
  )
}

export default Button

