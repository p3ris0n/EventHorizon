import { useState } from 'react'
import { Bell, Shield, Zap, Terminal } from 'lucide-react'

function App() {
  const [contractId, setContractId] = useState('')
  const [eventName, setEventName] = useState('')
  const [webhookUrl, setWebhookUrl] = useState('')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8">
      <header className="max-w-4xl mx-auto mb-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Zap className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">EventHorizon</h1>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Dashboard</a>
          <a href="#" className="hover:text-white transition-colors">Triggers</a>
          <a href="#" className="hover:text-white transition-colors">Logs</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Creation Form */}
        <section className="md:col-span-1 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Bell size={20} className="text-indigo-400" />
            New Trigger
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Contract ID</label>
              <input 
                type="text" 
                value={contractId}
                onChange={(e) => setContractId(e.target.value)}
                placeholder="C..." 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Event Name</label>
              <input 
                type="text" 
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="test_event" 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Webhook URL</label>
              <input 
                type="text" 
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://..." 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-lg transition-colors mt-4">
              Add Trigger
            </button>
          </div>
        </section>

        {/* Status Section */}
        <section className="md:col-span-2 space-y-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield size={20} className="text-emerald-400" />
              Active Listeners
            </h2>
            <div className="text-slate-500 text-sm text-center py-8 border-2 border-dashed border-slate-800 rounded-xl">
              No active triggers yet. Create one to get started.
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Terminal size={20} className="text-indigo-400" />
              Live Events
            </h2>
            <div className="bg-black/50 p-4 rounded-xl font-mono text-xs text-indigo-300 overflow-x-auto">
              <div>[2024-03-16 02:50] Worker started...</div>
              <div>[2024-03-16 02:50] Listening for Soroban events on Testnet...</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
