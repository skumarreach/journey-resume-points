
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdminLogin } from '@/components/admin/AdminLogin';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { SocialAccountsManager } from '@/components/admin/SocialAccountsManager';
import { PostsManager } from '@/components/admin/PostsManager';
import { AnalyticsDashboard } from '@/components/admin/AnalyticsDashboard';
import { AdminManagement } from '@/components/admin/AdminManagement';

interface AdminProfile {
  id: string;
  user_id: string;
  email: string;
  role: 'super_admin' | 'content_admin' | 'analytics_admin' | 'social_admin';
  is_active: boolean;
}

const Admin = () => {
  const { user } = useAuth();
  const [adminProfile, setAdminProfile] = useState<AdminProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      checkAdminAccess();
    } else {
      setLoading(false);
    }
  }, [user]);

  const checkAdminAccess = async () => {
    try {
      const { data, error } = await supabase
        .from('admins')
        .select('*')
        .eq('user_id', user?.id)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error('Error checking admin access:', error);
        toast({
          title: "Access Denied",
          description: "You don't have admin access to this system.",
          variant: "destructive"
        });
        setAdminProfile(null);
      } else {
        setAdminProfile(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AdminLogin />;
  }

  if (!adminProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-red-600">Access Denied</CardTitle>
            <CardDescription>
              You don't have permission to access the admin panel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => supabase.auth.signOut()}
              variant="outline"
              className="w-full"
            >
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const canAccessAdminManagement = adminProfile.role === 'super_admin';
  const canAccessSocialAccounts = ['super_admin', 'social_admin'].includes(adminProfile.role);
  const canAccessPosts = ['super_admin', 'content_admin', 'social_admin'].includes(adminProfile.role);
  const canAccessAnalytics = ['super_admin', 'analytics_admin'].includes(adminProfile.role);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-600">
                Welcome back, {adminProfile.email} ({adminProfile.role.replace('_', ' ')})
              </p>
            </div>
            <Button 
              onClick={() => supabase.auth.signOut()}
              variant="outline"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            {canAccessSocialAccounts && (
              <TabsTrigger value="social">Social Accounts</TabsTrigger>
            )}
            {canAccessPosts && (
              <TabsTrigger value="posts">Posts</TabsTrigger>
            )}
            {canAccessAnalytics && (
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            )}
            {canAccessAdminManagement && (
              <TabsTrigger value="admins">Admin Management</TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <AdminDashboard adminProfile={adminProfile} />
          </TabsContent>

          {canAccessSocialAccounts && (
            <TabsContent value="social" className="mt-6">
              <SocialAccountsManager adminProfile={adminProfile} />
            </TabsContent>
          )}

          {canAccessPosts && (
            <TabsContent value="posts" className="mt-6">
              <PostsManager adminProfile={adminProfile} />
            </TabsContent>
          )}

          {canAccessAnalytics && (
            <TabsContent value="analytics" className="mt-6">
              <AnalyticsDashboard adminProfile={adminProfile} />
            </TabsContent>
          )}

          {canAccessAdminManagement && (
            <TabsContent value="admins" className="mt-6">
              <AdminManagement adminProfile={adminProfile} />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
