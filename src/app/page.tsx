
import HomeHeader from '@/components/home/HomeHeader'
import { movieGenresList, trendingMoviesWeekly } from '@/lib/api'
import Footer from '@/components/shared/footer/Footer'
import NavSearch from '@/components/search/NavSearch'
import FormSearch from '@/components/shared/header/FormSearch'
import dynamic from 'next/dynamic'
import EspaciadoLayout from '@/components/layout/EspaciadoLayout'
const DynamicSliderContainer = dynamic(
    () => import('@/components/home/SliderContainer')
)
const DynamicColeccionContainer = dynamic(
    () => import('@/components/home/ColeccionContainer')
)

export default async function Home({
    searchParams, // Search parameters object containing the query string
}: {
    searchParams: { q: string }; // Type definition for searchParams
}) {
    // Fetch trending movies and genres
    const { results: moviesTrends } = await trendingMoviesWeekly();
    const generos = await movieGenresList();

    // Render the home page
    return (
        <main className='scrollMove'>
            {/* Navigation Bar */}
            <NavSearch type='' duration={100}>
                <FormSearch
                    defaultValue={searchParams.q || ''}
                    type={'movie'}
                />
            </NavSearch>

            {/* Home Header */}
            <HomeHeader moviesTrends={moviesTrends} genresMovies={generos} />

            {/* Collection */}
            <DynamicColeccionContainer
                id='131296'
                textColor='#12c8ff'
                subTitle='Rivalries and Redentions'
            />

            {/* Slider Movie 1 */}
            <EspaciadoLayout
                component='section'
                className='my-8 flex flex-col gap-12 lg:gap-4 2xl:gap-8 text-txtGray2'
            >
                <DynamicSliderContainer
                    path='/trending/tv/week'
                    title='POPULAR SERIES'
                />
                <DynamicSliderContainer
                    path='/movie/popular'
                    title='MODERN MASTERPIECES'
                />
                <DynamicSliderContainer
                    path='/trending/tv/week'
                    page='2'
                    title='FEATURED SERIES'
                />
                <DynamicSliderContainer
                    path='/movie/top_rated'
                    title='DISCOVER FLIX HIGHLIGHTS'
                />
            </EspaciadoLayout>

            {/* Collection 2 */}
            <DynamicColeccionContainer
                id='228446'
                textColor='#de4444'
                subTitle='Terror'
            />

            {/* Slider Movie and Serie 2 */}
            <EspaciadoLayout
                component='section'
                className='my-8 flex flex-col gap-12 lg:gap-4 2xl:gap-8 text-txtGray2'
            >
                <DynamicSliderContainer
                    path='/movie/now_playing'
                    title='POPULAR SERIES'
                />
                <DynamicSliderContainer
                    path='/trending/movie/week'
                    page='2'
                    title='TRENDING MOVIES'
                />
                <DynamicSliderContainer
                    path='/movie/upcoming'
                    page='2'
                    title='UPCOMING MOVIE RELEASES'
                />
                <DynamicSliderContainer
                    path='/trending/tv/week'
                    page='3'
                    title='TRENDING SERIES'
                />
            </EspaciadoLayout>

            {/* Footer */}
            <Footer />
        </main>
    );
}