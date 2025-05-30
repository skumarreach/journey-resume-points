
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, UserCheck, UserX } from 'lucide-react';
import { AddAdminDialog } from './AddAdminDialog';

interface Admin {
  id: string;
  user_id: string;
  email: string;
  role: 'super_admin' | 'content_admin' | 'analytics_admin' | 'social_admin';
  is_active: boolean;
  created_at: string;
}

interface AdminProfile {
  id: string;
  role: string;
}

export const AdminManagement = ({ adminProfile }: { adminProfile: AdminProfile }) => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    try {
      const { data, error } = await supabase
        .from('admins')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAdmins(data || []);
    } catch (error) {
      console.error('Error loading admins:', error);
      toast({
        title: "Error",
        description: "Failed to load admin list",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (adminId: string, newRole: string) => {
    try {
      const { error } = await supabase
        .from('admins')
        .update({ role: newRole })
        .eq('id', adminId);

      if (error) throw error;

      setAdmins(prev => prev.map(admin => 
        admin.id === adminId ? { ...admin, role: newRole as any } : admin
      ));

      toast({
        title: "Success",
        description: "Admin role updated successfully"
      });
    } catch (error) {
      console.error('Error updating admin role:', error);
      toast({
        title: "Error",
        description: "Failed to update admin role",
        variant: "destructive"
      });
    }
  };

  const handleToggleActive = async (adminId: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('admins')
        .update({ is_active: !isActive })
        .eq('id', adminId);

      if (error) throw error;

      setAdmins(prev => prev.map(admin => 
        admin.id === adminId ? { ...admin, is_active: !isActive } : admin
      ));

      toast({
        title: "Success",
        description: `Admin ${!isActive ? 'activated' : 'deactivated'} successfully`
      });
    } catch (error) {
      console.error('Error updating admin status:', error);
      toast({
        title: "Error",
        description: "Failed to update admin status",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
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
          <h2 className="text-2xl font-bold text-gray-900">Admin Management</h2>
          <p className="text-gray-600">Manage admin users and their permissions</p>
        </div>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Admin
        </Button>
      </div>

      <div className="space-y-4">
        {admins.map((admin) => (
          <Card key={admin.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{admin.email}</CardTitle>
                  <CardDescription>
                    Added on {new Date(admin.created_at).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Badge variant={admin.is_active ? "default" : "secondary"}>
                  {admin.is_active ? 'Active' : 'Inactive'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div>
                    <label className="text-sm font-medium">Role:</label>
                    <Select
                      value={admin.role}
                      onValueChange={(value) => handleRoleChange(admin.id, value)}
                      disabled={admin.id === adminProfile.id} // Can't change own role
                    >
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="super_admin">Super Admin</SelectItem>
                        <SelectItem value="content_admin">Content Admin</SelectItem>
                        <SelectItem value="analytics_admin">Analytics Admin</SelectItem>
                        <SelectItem value="social_admin">Social Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {admin.id !== adminProfile.id && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleActive(admin.id, admin.is_active)}
                  >
                    {admin.is_active ? (
                      <>
                        <UserX className="w-4 h-4 mr-2" />
                        Deactivate
                      </>
                    ) : (
                      <>
                        <UserCheck className="w-4 h-4 mr-2" />
                        Activate
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AddAdminDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        onAdminAdded={() => {
          loadAdmins();
          setShowAddDialog(false);
        }}
      />
    </div>
  );
};
