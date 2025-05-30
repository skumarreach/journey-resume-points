
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, ExternalLink, Trash2 } from 'lucide-react';
import { AddSocialAccountDialog } from './AddSocialAccountDialog';

interface SocialAccount {
  id: string;
  platform: string;
  account_name: string;
  account_id: string;
  is_active: boolean;
  created_at: string;
}

interface AdminProfile {
  id: string;
  role: string;
}

export const SocialAccountsManager = ({ adminProfile }: { adminProfile: AdminProfile }) => {
  const [accounts, setAccounts] = useState<SocialAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadSocialAccounts();
  }, []);

  const loadSocialAccounts = async () => {
    try {
      const { data, error } = await supabase
        .from('social_accounts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAccounts(data || []);
    } catch (error) {
      console.error('Error loading social accounts:', error);
      toast({
        title: "Error",
        description: "Failed to load social accounts",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleActive = async (accountId: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('social_accounts')
        .update({ is_active: !isActive })
        .eq('id', accountId);

      if (error) throw error;

      setAccounts(prev => prev.map(acc => 
        acc.id === accountId ? { ...acc, is_active: !isActive } : acc
      ));

      toast({
        title: "Success",
        description: `Account ${!isActive ? 'activated' : 'deactivated'} successfully`
      });
    } catch (error) {
      console.error('Error updating account:', error);
      toast({
        title: "Error",
        description: "Failed to update account status",
        variant: "destructive"
      });
    }
  };

  const handleDeleteAccount = async (accountId: string) => {
    if (!confirm('Are you sure you want to delete this social account?')) return;

    try {
      const { error } = await supabase
        .from('social_accounts')
        .delete()
        .eq('id', accountId);

      if (error) throw error;

      setAccounts(prev => prev.filter(acc => acc.id !== accountId));

      toast({
        title: "Success",
        description: "Account deleted successfully"
      });
    } catch (error) {
      console.error('Error deleting account:', error);
      toast({
        title: "Error",
        description: "Failed to delete account",
        variant: "destructive"
      });
    }
  };

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      facebook: 'bg-blue-500',
      instagram: 'bg-pink-500',
      twitter: 'bg-sky-500',
      linkedin: 'bg-blue-700',
      youtube: 'bg-red-500',
      tiktok: 'bg-black'
    };
    return colors[platform] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Social Media Accounts</h2>
          <p className="text-gray-600">Manage connected social media platforms</p>
        </div>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Account
        </Button>
      </div>

      {accounts.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500 mb-4">No social media accounts connected yet</p>
            <Button onClick={() => setShowAddDialog(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Account
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <Card key={account.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getPlatformColor(account.platform)}`}></div>
                    <div>
                      <CardTitle className="text-lg capitalize">
                        {account.platform}
                      </CardTitle>
                      <CardDescription>{account.account_name}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={account.is_active ? "default" : "secondary"}>
                    {account.is_active ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Account ID:</span> {account.account_id}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Added:</span> {new Date(account.created_at).toLocaleDateString()}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleActive(account.id, account.is_active)}
                    >
                      {account.is_active ? 'Deactivate' : 'Activate'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteAccount(account.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <AddSocialAccountDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        onAccountAdded={() => {
          loadSocialAccounts();
          setShowAddDialog(false);
        }}
        adminProfile={adminProfile}
      />
    </div>
  );
};
