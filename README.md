# Sorteo de Amigos

Este proyecto permite agregar nombres a una lista y realizar un sorteo aleatorio para seleccionar un "amigo secreto".

## Descripción del código

1. **Agregar amigos**: Los usuarios pueden ingresar nombres en un campo de texto y agregarlos a la lista. Si el nombre está vacío o si ya hay 10 nombres en la lista, no se permite agregar más.
   
2. **Mostrar la lista**: Cada vez que se agrega un nombre, la lista se actualiza en la interfaz.

3. **Sorteo de amigo secreto**: Al hacer clic en "Sortear Amigo", se selecciona aleatoriamente un nombre de la lista y se muestra como el amigo secreto.

4. **Lógica**:
   - Se valida que el nombre no esté vacío y que no haya más de 10 amigos.
   - La lista se limpia cuando se realiza un sorteo, mostrando solo el nombre del amigo secreto sorteado.
