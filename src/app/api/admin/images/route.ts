import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import SiteImage from '@/models/SiteImage';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const section = searchParams.get('section');

  await dbConnect();

  try {
    const query: any = {};
    if (page) query.page = page;
    if (section) query.section = section;

    const images = await SiteImage.find(query).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();

  try {
    const body = await request.json();
    const { page, section, imageUrl, title, description, order } = body;

    if (!page || !section || !imageUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newImage = await SiteImage.create({
      page,
      section,
      imageUrl,
      title: title || '',
      description: description || '',
      order: order || 0,
    });

    return NextResponse.json(newImage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create image' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
  }

  await dbConnect();

  try {
    await SiteImage.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();

  try {
    const body = await request.json();
    const { id, title, order, imageUrl } = body;

    if (!id) {
      return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
    }

    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (order !== undefined) updateData.order = order;
    if (imageUrl) updateData.imageUrl = imageUrl;

    const updatedImage = await SiteImage.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedImage) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json(updatedImage);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update image' }, { status: 500 });
  }
}
