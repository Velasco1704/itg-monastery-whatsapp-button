# WhatsApp Button Component

El botón de WhatsApp puede es una funcionalidad que permite a los usuarios iniciar una conversación de WhatsApp directamente desde la aplicación. Esto puede ser útil para proporcionar soporte al cliente, facilitar las consultas de los usuarios o permitir a los usuarios compartir contenido directamente a través de WhatsApp.

## Instalación

### 1. Clonar repositorio

Copia el [repositorio](https://github.com/Velasco1704/itg-monastery-whatsapp-button) del proyecto y clonarlo en en tu terminal.

```bash
git clone https://github.com/Velasco1704/itg-monastery-whatsapp-button
```

### 2. Acceder a la Carpeta del Proyecto

Después de clonar el repositorio, entra a la carpeta del proyecto utilizando el siguiente comando:

```bash
cd itg-monastery-whatsapp-button
```

### 3. Instalar dependencias de la carpeta react

Entra a la carpeta de react y instala las dependencias.

```bash
cd react && yarn
```

> [!NOTE]
> No uses npm y yarn al mismo tiempo esto va a causar conflictos

### 4. Iniciar Sesión en VTEX

Para poder trabajar con VTEX, necesitas iniciar sesión con tu cuenta. Utiliza el siguiente comando y reemplaza {account} con tu nombre de cuenta de VTEX:

```bash
vtex login { account }
```

### 5. Seleccionar el Espacio de Trabajo

Una vez que hayas iniciado sesión, selecciona el espacio de trabajo en el que deseas trabajar utilizando el siguiente comando. Reemplaza {workspace} con el nombre de tu espacio de trabajo:

```bash
vtex use { workspace }
```

### 6. Enlazar el Proyecto al Espacio de Trabajo

Finalmente, enlaza el proyecto a tu espacio de trabajo para visualizarlo ejecutando el siguiente comando:

```bash
vtex link
```

### 7. Agrega el componente

Agrega el componente en el `manifest.json` de tu **store theme**

```JSON
"dependencies": {
   "{accountName}.{appName}": "{appVersion}",
    "vtex.store": "2.x",
    "vtex.store-header": "2.x"
}
```

## Descripción general del proyecto y su uso

Dentro de la carpeta react tenemos todo el codigo del componente, el archivo `WhatsAppButton.tsx` y la carpeta components.

El componente **WhatsAppButton** es un componente de React que representa un botón de WhatsApp. Permite a los usuarios iniciar una conversación de WhatsApp con un número de teléfono específico y un mensaje predefinido.

### Props

El componente acepta las siguientes propiedades:

- **logo** (string, requerido): La ruta de la imagen del logotipo de WhatsApp.
- **phone** (string, requerido): El número de teléfono al que se enviará el mensaje de WhatsApp.
- **message** (string): El mensaje predefinido que se mostrará en la conversación de WhatsApp.
- **width** (number): El ancho del logotipo de WhatsApp.
- **height** (number): La altura del logotipo de WhatsApp.

```ts
interface Props {
  logo: string;
  phone: string;
  message: string;
  width: number;
  height: number;
}

```

### Validación de Propiedades

El componente **WhatsAppButton** utiliza la biblioteca **prop-types** para validar las propiedades. Asegúrate de instalar esta biblioteca y agregarla a tu proyecto.

```js
WhatsAppButton.prototype = {
  logo: PropsTypes.string.isRequired,
  phone: PropsTypes.string.isRequired,
  message: PropsTypes.string,
  width: PropsTypes.number,
  height: PropsTypes.number
}
```

### Esquema de Propiedades

El componente **WhatsAppButton** también proporciona un esquema de propiedades que se puede utilizar para modificar el componente desde el **site editor**. El esquema de propiedades incluye las siguientes propiedades:

- **logo**: Ruta de la imagen del logotipo de WhatsApp.
- **phone**: Número de teléfono al que se enviará el mensaje de WhatsApp.
- **message**: Mensaje predefinido que se mostrará en la conversación de WhatsApp.
- **width**: Ancho del logotipo de WhatsApp.
- **height**: Altura del logotipo de WhatsApp.

```js
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
```
