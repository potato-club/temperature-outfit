import { SupabaseStorageClient } from '@supabase/storage-js';

const STORAGE_URL = `https://${process.env.SUPABASE_PROJECT_REF}.supabase.co/storage/v1`;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE ?? '';

export const storageClient = new SupabaseStorageClient(STORAGE_URL, {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
});
