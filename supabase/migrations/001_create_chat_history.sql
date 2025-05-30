
-- Create chat_history table
CREATE TABLE IF NOT EXISTS chat_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT,
  message TEXT NOT NULL,
  is_bot BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_chat_history_user_id ON chat_history(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_history_created_at ON chat_history(created_at);

-- Enable RLS (Row Level Security)
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see only their own chat history
CREATE POLICY "Users can view own chat history" ON chat_history
  FOR SELECT USING (auth.uid() = user_id);

-- Create policy to allow users to insert their own chat messages
CREATE POLICY "Users can insert own chat messages" ON chat_history
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policy for admins to view all chat history
CREATE POLICY "Admins can view all chat history" ON chat_history
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email LIKE '%@admin.gurukulam%'
    )
  );
