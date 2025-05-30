
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface AddAdminDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdminAdded: () => void;
}

export const AddAdminDialog = ({ open, onOpenChange, onAdminAdded }: AddAdminDialogProps) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const roles = [
    { value: 'content_admin', label: 'Content Admin' },
    { value: 'analytics_admin', label: 'Analytics Admin' },
    { value: 'social_admin', label: 'Social Admin' },
    { value: 'super_admin', label: 'Super Admin' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // First, check if a user with this email exists in auth.users
      // Since we can't query auth.users directly, we'll try to add the admin record
      // and let the foreign key constraint handle validation
      
      // For now, we'll need the user to provide a user_id
      // In a real implementation, you'd have a way to look up or invite users
      
      toast({
        title: "Feature Not Implemented",
        description: "Admin invitation system needs to be implemented. Users must sign up first, then be granted admin access.",
        variant: "destructive"
      });

      // TODO: Implement proper user invitation flow
      // This would typically involve:
      // 1. Sending an invitation email
      // 2. User signs up with the invitation link
      // 3. Admin record is created automatically upon signup

    } catch (error) {
      console.error('Error adding admin:', error);
      toast({
        title: "Error",
        description: "Failed to add admin user",
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
          <DialogTitle>Add Admin User</DialogTitle>
          <DialogDescription>
            Grant admin access to a user. The user must have an account first.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              required
            />
            <p className="text-xs text-gray-500">
              User must already have an account
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Admin Role</Label>
            <Select value={role} onValueChange={setRole} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> This feature requires additional implementation. 
              Currently, users must sign up first, then be manually added to the admins table.
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
              {loading ? 'Adding...' : 'Add Admin'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
