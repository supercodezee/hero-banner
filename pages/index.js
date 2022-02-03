import Image from 'next/image'
import Link from 'next/link'
import utils from '../styles/utils.module.css'
import styles from '../styles/Hero.module.css'

// ──────────────────────────────────────────────────  CONTENT:  ───────────────────

let text = {
  tag: 'High Yield Savings',
  title: 'High Yield Savings',
  description: 'Take your money further, faster. No monthly maintenance fees. No minimum balance requirements. Interest compounded daily.',
}

let btns = {
  primary: {
    text: 'Begin Application',
    url: 'https://www.axosbank.com',
  },
  secondary: {
    text: 'Continue Application',
    url: 'https://www.disney.com',
  },
}

let img = {
  url: '/../public/images/hero-hys.png',
  width: '604',
  height: '444',
}


// ────────────────────────────────────────────────────────────────────────────────


export default function HeroBanner() {
  return (
    <section className={styles.bannerHero}>
      <div className={utils.container}>
          <div className={`${utils.flexRow} ${utils.middle} ${styles.gutter} ${styles.shift}`}>
            <div className={styles.textWrapper}>
                <div className={styles.superTag}>{text.tag}</div>
                <h1 className={utils.mainTitle}>{text.title}</h1>
                <p className={utils.mb0}>
                  {text.description}
                </p>
                <div className={`${styles.heroBtns} ${utils.flexRow} ${utils.middle}`}>
                  <Link href={btns.primary.url}>
                    <a className={`${utils.btnPrimary} ${utils.mb0}`} role="button">
                        {btns.primary.text}
                    </a>
                  </Link>
                  <Link href={btns.secondary.url}>
                    <a className={`${utils.btnSecondary} ${utils.mb0}`}>
                      {btns.secondary.text}
                    </a>
                  </Link>
                </div>
            </div>
            <div className={styles.imgWrapper} role="figure">
                 {/* IMAGE REMOVED FOR DEMO PURPOSES ONLY  */}
                {/* <Image priority src={img.url} alt="" width={img.width} height={img.height} /> */}
            </div>
          </div>
      </div>
    </section>
  )
}
