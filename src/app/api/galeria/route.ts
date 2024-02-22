import { fetchDataNoStore } from "@/utils/fetchDataNoStore"
import { NextResponse } from "next/server"

export async function GET(request: Request): Promise<NextResponse> {
    // Extracting search parameters from the request URL
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    // Constructing the path for fetching movie images by ID
    const path = `/movie/${id}/images?include_image_language=en&language=eng-MX`;
    
    // Fetching data without storing
    const data = await fetchDataNoStore(path, '');

    // Returning the fetched data as JSON response
    return NextResponse.json(data);
}