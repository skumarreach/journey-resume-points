
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AdminProfile {
  id: string;
  role: string;
}

export const PostsManager = ({ adminProfile }: { adminProfile: AdminProfile }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Posts Management</h2>
        <p className="text-gray-600">Create, schedule, and manage social media posts</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Posts Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">
            Posts management interface will be implemented here. This will include:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
            <li>Create new posts with rich text editor</li>
            <li>Upload and manage media files</li>
            <li>Schedule posts for multiple platforms</li>
            <li>View draft, scheduled, and published posts</li>
            <li>Bulk operations and post templates</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
