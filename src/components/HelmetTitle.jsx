import { PropTypes } from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function HelmetTitle({ text }) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>THE TASTEAT | {text}</title>
            </Helmet>
        </HelmetProvider>
    )
}
HelmetTitle.propTypes = {
    text: PropTypes.string.isRequired
}