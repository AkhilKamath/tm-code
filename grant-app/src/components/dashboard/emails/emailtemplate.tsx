
interface EmailTemplateProps {
  name: string;
  email: string;
  address: string;
  fname: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  address,
  fname
}) => (
  <div>
    <h1>Hello</h1><br/>
    <p>Sending money to {name} at address {address}</p><br/>
    <h2>Regards,</h2>
    <h2>{fname}</h2>
  </div>
);

export default EmailTemplate