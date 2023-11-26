import { HiBadgeCheck } from "react-icons/hi";
import { FormattedMessage } from "react-intl"; //language translation library

export default function Certifications() {
  return (
    <section className="section-certs">
      <div className="certs-header">
        <HiBadgeCheck className="certs-check" />
        <p className="certs-heading">
          <FormattedMessage id="certs-heading" defaultMessage="Certificado por" />
        </p>
      </div>
      <div className="certs-container">
        <img src="irs-logo.png" alt="IRS Logo" className="cert-logo" />
        <img src="nys-logo.png" alt="IRS Logo" className="cert-logo" />
        <img src="natp-logo.png" alt="IRS Logo" className="cert-logo" />
      </div>
    </section>
  );
}
