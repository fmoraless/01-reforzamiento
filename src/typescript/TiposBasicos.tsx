
export const TiposBasicos = () => {
    const nombre: string | number = 'Francisco';
    const edad: number = 35;
    const estaActivo: boolean = true;

    const poderes: string[] = []; //Volar, Rayos, Fuerza
    //poderes.push(1);
    poderes.push('Hola');

  return (
    <>
    <h3>TiposBasicos</h3>
    {nombre} - {edad} - { estaActivo ? 'Activo' : 'No activo'}
<br />
    { poderes.join(', ')}
    </>
  )
}
