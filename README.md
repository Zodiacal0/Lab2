# API del Sistema de Adopción

Esta API está diseñada para gestionar citas para adopciones de mascotas. Incluye funcionalidades para crear, actualizar y listar citas, así como gestionar la información del usuario.

## Variables de Entorno

Cree un archivo `.env` en el directorio raíz y agregue las siguientes variables:

```
MONGO_URI=<tu_cadena_de_conexión_mongodb>
PORT=<tu_puerto_del_servidor>
JWT_SECRET=<tu_secreto_jwt>
```

## Endpoints de la API

### Autenticación

- **Registrar Usuario**
  - **URL:** `/adoptionSystem/v1/auth/register`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "surname": "string",
      "username": "string",
      "email": "string",
      "phone": "string",
      "password": "string",
      "role": "string",
      "profilePicture": "file"
    }
    ```

- **Iniciar Sesión**
  - **URL:** `/adoptionSystem/v1/auth/login`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

### Usuarios

- **Obtener Usuario por ID**
  - **URL:** `/adoptionSystem/v1/user/findUser/:uid`
  - **Método:** `GET`

- **Eliminar Usuario**
  - **URL:** `/adoptionSystem/v1/user/deleteUser/:uid`
  - **Método:** `DELETE`

- **Listar Usuarios**
  - **URL:** `/adoptionSystem/v1/user/`
  - **Método:** `GET`

- **Actualizar Contraseña del Usuario**
  - **URL:** `/adoptionSystem/v1/user/updatePassword/:uid`
  - **Método:** `PATCH`
  - **Cuerpo:**
    ```json
    {
      "newPassword": "string"
    }
    ```

- **Actualizar Información del Usuario**
  - **URL:** `/adoptionSystem/v1/user/updateUser/:uid`
  - **Método:** `PUT`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "surname": "string"
    }
    ```

### Mascotas

- **Registrar Mascota**
  - **URL:** `/adoptionSystem/v1/pet/addPet`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "description": "string",
      "age": "number",
      "type": "string",
      "email": "string"
    }
    ```

- **Obtener Mascota por ID**
  - **URL:** `/adoptionSystem/v1/pet/findPet/:pid`
  - **Método:** `GET`

- **Eliminar Mascota**
  - **URL:** `/adoptionSystem/v1/pet/deletePet/:pid`
  - **Método:** `DELETE`

- **Listar Mascotas**
  - **URL:** `/adoptionSystem/v1/pet/`
  - **Método:** `GET`

### Citas

- **Crear Cita**
  - **URL:** `/adoptionSystem/v1/appointment/createAppointment`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "date": "2023-10-15T10:00:00Z",
      "pet": "string",
      "user": "string"
    }
    ```

## Funcionalidades Adicionales

Las siguientes funcionalidades necesitan ser desarrolladas:

1. **Actualizar Foto del Usuario**
   - Descripción: Implementar funcionalidad para actualizar la foto de perfil del usuario.

2. **Listar Citas**
   - Descripción: Implementar funcionalidad para listar todas las citas de un usuario.

3. **Actualizar Cita**
   - Descripción: Implementar funcionalidad para actualizar una cita existente.

4. **Cancelar Cita**
   - Descripción: Implementar funcionalidad para cancelar una cita existente.

5. **Entrega**
   - Funcionalidades deben ser parte del código fuente y ser entregadas en tiempo y forma indicada en clase.
