import grayTitleStyles from 'styles/BigGrayTitle.module.css'
import marginStyles from 'styles/Margins.module.css'
import { createMarkup } from 'utils/helpers'

export default function AttorneyProfileBody({ content, title }) {
  return (
    <div className={marginStyles.mtMinusMd2}>
      <p className={`${grayTitleStyles.title} text-capitalize w-100`}>{title}</p>
      <div dangerouslySetInnerHTML={createMarkup(content)} />
      <style jsx>{' div { font-size: 1rem;  } '}</style>
    </div>
  )
}
