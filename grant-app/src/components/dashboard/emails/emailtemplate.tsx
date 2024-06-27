'use client'
export interface EmailTemplateProps {
  name: string;
  email: string;
  address: string;
  foundation_name: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  address,
  foundation_name
}) => (
  <div>
    <h1>Hello</h1><br/>
    <p>Sending money to {name} at address {address}</p><br/>
    <h2>Regards,</h2>
    <h2>{foundation_name}</h2>
  </div>
);

export const EmailTemplateString = `
<div>
    <h1>Hello</h1><br/>
    <p>Sending money to {name} at address {address}</p><br/>
    <h2>Regards,</h2>
    <h2>{foundation_name}</h2>
  </div>
`

export default EmailTemplate
