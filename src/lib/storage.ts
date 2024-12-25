import { supabase } from './supabase';

export const uploadProjectImage = async (
  file: File,
  projectId: string,
  type: 'project_photo' | 'design_sketch' | 'blueprint',
  description?: string
) => {
  try {
    // Get file extension
    const fileExt = file.name.split('.').pop();

    // Get signed URL for upload
    const { data, error } = await supabase.functions.invoke('handle-image-upload', {
      body: {
        projectId,
        imageType: type,
        description,
        fileExt
      }
    });

    if (error) throw error;

    // Upload file using signed URL
    const uploadResponse = await fetch(data.uploadUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    });

    if (!uploadResponse.ok) {
      throw new Error('Failed to upload file');
    }

    return data.imageRecord;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const getImageUrl = (path: string) => {
  const { data } = supabase.storage.from('project-images').getPublicUrl(path);
  return data.publicUrl;
};