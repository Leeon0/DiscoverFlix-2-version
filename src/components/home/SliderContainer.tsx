import { fetchData } from '@/utils/fetchData'
import SliderMedia from '../UI/slider/SliderMedia'

export default async function SliderContainer({
    path, // Ruta para la solicitud de datos
    title, // Título que se mostrará encima del slider
    page, // Número de página opcional para la solicitud de datos
}: {
    path: string; // Tipo de la propiedad path
    title: string; // Tipo de la propiedad title
    page?: string; // Tipo de la propiedad page, opcional
}) {
    // Determina el tipo de datos (película o serie) basado en la ruta
    const type = path.includes('movie') ? 'movie' : 'tv';

    // Construye la cadena de consulta para la solicitud de datos
    const query = page ? `language=en-US&page=${page}` : '';

    // Realiza la solicitud de datos al servidor y espera la respuesta
    const { results: data } = await fetchData(path, query);

    // Renderiza el componente
    return (
        <section>
            {/* Encabezado con el título del slider */}
            <header className='mb-2'>
                <h3 className='font-medium text-sm text-txtGray1'>{title}</h3>
            </header>
            {/* Renderiza el componente SliderMedia y pasa los datos y el tipo */}
            <SliderMedia data={data} type={type} />
        </section>
    );
}