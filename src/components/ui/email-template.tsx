import * as React from "react"

interface EmailTemplateProps {
  firstName: string
  lastName: string
  message: string
  email: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <div>
    <h1>
      Email de: {firstName} {lastName}!
    </h1>
    <p>{email}</p>
    <p>{message}</p>
  </div>
)
