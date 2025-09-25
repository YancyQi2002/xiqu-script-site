import { jsx } from 'react/jsx-runtime'
import styles from './index.module.css'

// 使用内联 SVG 替代 ArrowRight 图标
const ArrowRightIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 32 32">
    <path fill="currentColor" d="M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z" />
  </svg>
)

interface LinkCardProps {
  /**
   * The URL of the link.
   */
  href: string
  /**
   * The title of the link.
   */
  title: string
  /**
   * The description of the link.
   */
  description?: React.ReactNode
  /**
   * The style of the link card.
   */
  style?: React.CSSProperties
}

export function LinkCard(props: LinkCardProps) {
  const { href, title, description, style } = props

  function SvgWrapper({ icon: Icon, ...rest }: { icon: React.ComponentType | string, [key: string]: any }) {
    if (!Icon) return null
    if ('string' == typeof Icon) return /*#__PURE__*/ jsx("img", {
        src: Icon,
        alt: "",
        ...rest
    })
    return /*#__PURE__*/ jsx(Icon, {
        ...rest
    })
  }

  return (
    <div
      className={styles.linkCard}
      style={style}
    >
      <div className={styles.content}>
        <a
          href={href}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`访问 ${title}`}
        >
          <h3 className={styles.title}>{title}</h3>
        </a>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
      <div className={styles.iconWrapper}>
        <SvgWrapper icon={ArrowRightIcon} />
      </div>
    </div>
  )
}