import Frame from '@/components/UI/frame/Frame'

export default function ActorPage({ params }: { params: { id: string } }): JSX.Element {
    // Extracting the actor ID from the parameters
    const { id } = params;

    return (
        <div className='container mx-auto my-10'>
            {/* Container for displaying the actor information */}
            <div className='mx-auto border border-gray-700 max-w-[384px]'>
                {/* Rendering the frame component with the actor ID */}
                <Frame path={id} />
            </div>
        </div>
    );
}