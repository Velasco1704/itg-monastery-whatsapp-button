import React from 'react';
import PropsTypes from 'prop-types';

interface Props {
  logo: string;
  phone: string;
  message: string;
  width: number;
  height: number;
}

const WhatsAppButton = ({logo, phone, message, width, height}: Props) => {
  const formattedMessage = message.replace(/ /g, "%20")
  return (
    <div className="fixed bottom-1 right-2">
      <a
        href={`https://wa.me/57${phone}?text=${formattedMessage}`}
        target='_blank'
        rel='noreferrer noopener'
      >
        <img
          src={logo}
          width={width}
          height={height}
          alt="WhatsApp Logo" />
      </a>
    </div>
  )
}

WhatsAppButton.prototype = {
  logo: PropsTypes.string.isRequired,
  phone: PropsTypes.string.isRequired,
  message: PropsTypes.string,
  width: PropsTypes.number,
  height: PropsTypes.number
}

WhatsAppButton.defaultProps = {
  logo: "logo.png",
  phone: "1234567",
  message: "este es el mensaje del botón",
  width: 65,
  height: 65
}

WhatsAppButton.schema = {
  title: "WhatsApp Button",
  type: "object",
  properties: {
    logo: {
      title: "Logo de WhatsApp que se relaciona con la marca.",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Phone",
      description: "Agrega un numero telefónico",
      type: "string",
    },
    message: {
      title: "Message",
      description: "Agrega el mensaje que verá tu cliente",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    },
    width: {
      title: "Ancho del Logo",
      type: "number",
    },
    height: {
      title: "Altura del Logo",
      type: "number",
    },
  }
}

export default WhatsAppButton;
