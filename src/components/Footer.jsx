import { FormattedMessage } from "react-intl"; //language translation library

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text text-center">
        Copyright &copy; {new Date().getFullYear()} Caribe Tax Solutions. 
        <FormattedMessage
          id="footerRights"
          defaultMessage=" Derechos reservados."
        />
      </p>
    </footer>
  );
}
