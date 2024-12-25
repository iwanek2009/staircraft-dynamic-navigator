-- Create city_content table
CREATE TABLE city_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    city TEXT NOT NULL UNIQUE,
    content JSONB NOT NULL
);

-- Set up RLS
ALTER TABLE city_content ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public city content is viewable by everyone" ON city_content
    FOR SELECT USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_city_content_updated_at
    BEFORE UPDATE ON city_content
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();