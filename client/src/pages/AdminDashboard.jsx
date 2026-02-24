import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Zentora <span className="text-blue-600">Command Center</span></h1>
        <p className="text-slate-500">Monitoring Transparansi & Arus Transaksi Global</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Widget Arus Kas Escrow */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-sm font-semibold text-slate-400 uppercase">Total Dana Escrow (Pending)</h2>
          <p className="text-2xl font-bold mt-2 text-green-600">Rp 152.000.000</p>
        </div>

        {/* Status Sistem */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-sm font-semibold text-slate-400 uppercase">Kesehatan Server</h2>
          <p className="text-2xl font-bold mt-2 text-blue-500">99.9% Online</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
