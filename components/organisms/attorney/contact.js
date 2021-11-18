import AttorneyProfileContactForm from 'components/organisms/attorney/contact-form'
import grayTitleStyles from 'styles/BigGrayTitle.module.css'
import marginStyles from 'styles/Margins.module.css'

export default function AttorneyProfileContact({ content, forwardEmail }) {
  const { profile } = content
  const { name } = profile

  return (
    <div className={marginStyles.mtMinusMd2}>
      <p className={grayTitleStyles.title}>
        <span className="mr-1">Get in touch with</span>
        {name}
      </p>
      <AttorneyProfileContactForm forwardEmail={forwardEmail} currentAttorney={name} />
    </div>
  )
}
