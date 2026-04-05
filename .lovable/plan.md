
## Admin Dashboard Plan

### 1. Enable Lovable Cloud
- Sets up database, auth, and file storage

### 2. Database Tables
- `site_content` — stores text content (hero text, service descriptions, FAQ, etc.) as key-value pairs
- `contact_info` — stores contact details (email, phone, WhatsApp, address)
- `site_media` — stores references to uploaded images/videos with category tags

### 3. Storage Buckets
- `site-images` — for uploading/managing images
- `site-videos` — for uploading/managing videos

### 4. Auth & Admin Access
- Email/password login restricted to your email (sahilgrewal089@gmail.com)
- Admin role in `user_roles` table
- RLS policies so only admin can edit content

### 5. Admin Dashboard Pages
- `/admin/login` — login page
- `/admin` — dashboard with tabs for:
  - **Contact Info** — edit email, phone, WhatsApp, address
  - **Text Content** — edit headlines, descriptions, FAQ items
  - **Images** — upload/replace images used on the site
  - **Videos** — upload/replace videos (documentary, real estate, etc.)

### 6. Frontend Integration
- Components fetch content from database instead of hardcoded values
- Falls back to current hardcoded content if no DB entry exists

### Works on Vercel
- All data lives in Lovable Cloud (Supabase), not in files
- Frontend is static React — deploys perfectly on Vercel
