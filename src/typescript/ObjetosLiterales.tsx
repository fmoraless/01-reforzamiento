interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}
interface Direccion {
    pais: string;
    casaNo: number;    
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Francisco',
        edad: 35,
        direccion: {
            pais: 'Argentina',
            casaNo: 615
        }
    }
    persona.nombreCompleto = '123123'
  return (
    <div>
        <h3>ObjetosLiterales</h3>
        <code><pre>{
            JSON.stringify(persona, null, 2)
            }
            </pre></code>
    </div>
  )
}
