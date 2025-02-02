import fontStyles from 'styles/Fonts.module.css';
import { SITE_TITLE } from 'utils/constants';
import SubscriptionFormWithButton from 'components/molecules/subscription/SubscriptionFormWithButton';

const SubscriptionMessage = () => (
  <div className="my-4">
    <p className={`${fontStyles.ft12rem} mb-2`}>
      <strong>Get the latest from our attorneys!</strong>
    </p>
    <p>
      Please fill out our short form to get the latest articles from the
      {' '}
      {SITE_TITLE}
      attorneys weekly on the cutting-edge legal topics.
    </p>
    <SubscriptionFormWithButton />
  </div>
);

export default SubscriptionMessage;
