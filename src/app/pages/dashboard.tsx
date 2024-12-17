import { useEffect, useState } from 'react';
import api from '../lib/api';

const Dashboard = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/tasks/stats');
        setStats(response.data);
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      {stats ? (
        <div>
          <p>Total Tasks: {stats.totalTasks}</p>
          <p>Completed Tasks: {stats.completedTasks}</p>
          <p>Pending Tasks: {stats.pendingTasks}</p>
          <p>Average Completion Time: {stats.avgTime.toFixed(2)} hours</p>
          <p>Time Lapsed for Pending Tasks: {stats.pendingTimeLapsed.toFixed(2)} hours</p>
          <p>Estimated Time Left for Pending Tasks: {stats.pendingTimeRemaining.toFixed(2)} hours</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;

