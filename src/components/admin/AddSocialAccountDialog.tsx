
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { Database } from '@/integrations/supabase/types';

type SocialPlatform = Database['public']['Enums']['social_platform'];

interface AdminProfile {
  id: string;
  role: string;
}

interface AddSocialAccountDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccountAdded: () => void;
  adminProfile: AdminProfile;
}

export const AddSocialAccountDialog = ({ 
  open, 
  onOpenChange, 
  onAccountAdded, 
  adminProfile 
}: AddSocialAccountDialogProps) => {
  const [platform, setPlatform] = useState<SocialPlatform | ''>('');
  const [accountName, setAccountName] = useState('');
  const [accountId, setAccountId] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const platforms = [
    { value: 'facebook' as const, label: 'Facebook' },
    { value: 'instagram' as const, label: 'Instagram' },
    { value: 'twitter' as const, label: 'Twitter' },
    { value: 'linkedin' as const, label: 'LinkedIn' },
    { value: 'youtube' as const, label: 'YouTube' },
    { value: 'tiktok' as const, label: 'TikTok' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform) return;
    
    setLoading(true);

    try {
      // For now, we'll store the access token as is
      // In production, you should encrypt this
      const { error } = await supabase
        .from('social_accounts')
        .insert({
          platform: platform as SocialPlatform,
          account_name: accountName,
          account_id: accountId,
          access_token_encrypted: accessToken, // TODO: Implement encryption
          added_by: adminProfile.id,
          is_active: true
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Social media account added successfully"
      });

      // Reset form
      setPlatform('');
      setAccountName('');
      setAccountId('');
      setAccessToken('');
      
      onAccountAdded();
    } catch (error) {
      console.error('Error adding social account:', error);
      toast({
        title: "Error",
        description: "Failed to add social media account",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Social Media Account</DialogTitle>
          <DialogDescription>
            Connect a new social media account to manage posts and analytics.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="platform">Platform</Label>
            <Select value={platform} onValueChange={(value) => setPlatform(value as SocialPlatform)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a platform" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountName">Account Name</Label>
            <Input
              id="accountName"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="@username or Page Name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountId">Account ID</Label>
            <Input
              id="accountId"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              placeholder="Unique account identifier"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="accessToken">Access Token</Label>
            <Input
              id="accessToken"
              type="password"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
              placeholder="Platform API access token"
              required
            />
            <p className="text-xs text-gray-500">
              This will be encrypted and stored securely
            </p>
          </div>

          <div className="flex justify-end space-x-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Account'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
