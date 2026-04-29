INSERT INTO public.contact_info (key, value) VALUES ('email', 'godpromoinc@gmail.com')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;