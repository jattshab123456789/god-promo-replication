
-- User roles
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create policy "Admins can read roles"
  on public.user_roles for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Site content
create table public.site_content (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text not null,
  updated_at timestamptz default now()
);
alter table public.site_content enable row level security;

create policy "Anyone can read site_content"
  on public.site_content for select to anon, authenticated using (true);

create policy "Admins can insert site_content"
  on public.site_content for insert to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update site_content"
  on public.site_content for update to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete site_content"
  on public.site_content for delete to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Contact info
create table public.contact_info (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text not null,
  updated_at timestamptz default now()
);
alter table public.contact_info enable row level security;

create policy "Anyone can read contact_info"
  on public.contact_info for select to anon, authenticated using (true);

create policy "Admins can insert contact_info"
  on public.contact_info for insert to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update contact_info"
  on public.contact_info for update to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete contact_info"
  on public.contact_info for delete to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Site media
create table public.site_media (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  media_type text not null check (media_type in ('image', 'video')),
  url text not null,
  storage_path text,
  display_order int default 0,
  label text,
  created_at timestamptz default now()
);
alter table public.site_media enable row level security;

create policy "Anyone can read site_media"
  on public.site_media for select to anon, authenticated using (true);

create policy "Admins can insert site_media"
  on public.site_media for insert to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update site_media"
  on public.site_media for update to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete site_media"
  on public.site_media for delete to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Storage buckets
insert into storage.buckets (id, name, public) values ('site-images', 'site-images', true);
insert into storage.buckets (id, name, public) values ('site-videos', 'site-videos', true);

create policy "Anyone can view site images"
  on storage.objects for select using (bucket_id = 'site-images');

create policy "Admins can upload site images"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'site-images' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can update site images"
  on storage.objects for update to authenticated
  using (bucket_id = 'site-images' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete site images"
  on storage.objects for delete to authenticated
  using (bucket_id = 'site-images' and public.has_role(auth.uid(), 'admin'));

create policy "Anyone can view site videos"
  on storage.objects for select using (bucket_id = 'site-videos');

create policy "Admins can upload site videos"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'site-videos' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can update site videos"
  on storage.objects for update to authenticated
  using (bucket_id = 'site-videos' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete site videos"
  on storage.objects for delete to authenticated
  using (bucket_id = 'site-videos' and public.has_role(auth.uid(), 'admin'));

-- Seed default contact info
insert into public.contact_info (key, value) values
  ('email', 'sahilgrewal089@gmail.com'),
  ('phone', '+91 7404141096'),
  ('whatsapp', '917404141096'),
  ('address', '');

-- Seed default site content
insert into public.site_content (key, value) values
  ('hero_badge', 'Remote Video Editing Agency'),
  ('hero_heading_1', 'Grab more audience'),
  ('hero_heading_2', 'Using '),
  ('hero_heading_3', 'our banger content'),
  ('hero_subheading', 'We partner with growth-focused businesses, providing Done-For-You organic content systems that drive leads effortlessly.'),
  ('cta_label', 'Fuel Your Growth'),
  ('cta_heading', 'Team Up With Us to Elevate Your Business'),
  ('footer_description', 'Professional video editing services that help your content stand out.');
