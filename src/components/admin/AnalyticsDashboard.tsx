
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AdminProfile {
  id: string;
  role: string;
}

export const AnalyticsDashboard = ({ adminProfile }: { adminProfile: AdminProfile }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <p className="text-gray-600">Track performance across all social media platforms</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Analytics Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">
            Analytics dashboard will be implemented here. This will include:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
            <li>Engagement metrics across all platforms</li>
            <li>Follower growth tracking</li>
            <li>Post performance comparisons</li>
            <li>Best posting times analysis</li>
            <li>Custom date range reports</li>
            <li>Export functionality for reports</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
