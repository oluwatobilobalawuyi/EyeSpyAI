import React, { useState } from 'react';
import {
 Shield,
 MonitorSmartphone,
 Activity,
 BarChart2,
 PieChart,
 Terminal,
 Play,
 Pause,
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, Cell, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

export default function Dashboard() {
 const [isSimulating, setIsSimulating] = useState(false);

 const attackOccurrences = [
   { name: 'Content Injection', value: 10 },
   { name: 'Remote Access', value: 6 },
   { name: 'Adversary-in-the-Middle', value: 8 },
 ];

 const performanceRate = [
   { name: 'Success', value: 80 },
   { name: 'Failure', value: 20 },
 ];

 const liveMonitorLogs = [
   '> Initializing system...',
   '> Monitoring threats...',
   '> Defense modules active...',
 ];

 return (
   <div className="min-h-screen bg-gray-100 text-gray-900">
     <header className="p-4 bg-gray-800 text-white">
       <h1 className="text-2xl font-bold">EyeSpy AI Dashboard</h1>
     </header>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
       {/* Event/Attack Details */}
       <div className="bg-white p-4 rounded shadow">
         <h2 className="text-xl font-semibold">Event/Attack Details</h2>
         <textarea
           className="mt-2 w-full h-40 p-2 border border-gray-300 rounded"
           placeholder="Write a detailed report of the event or attack here..."
         ></textarea>
       </div>

       {/* Occurrence of Attacks */}
       <div className="bg-white p-4 rounded shadow">
         <h2 className="text-xl font-semibold">Occurrence of Attacks</h2>
         <ResponsiveContainer width="100%" height={200}>
           <BarChart data={attackOccurrences}>
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip />
             <Bar dataKey="value" fill="#8884d8">
               {attackOccurrences.map((entry, index) => (
                 <Cell key={cell-${index}} fill={entry.value > 8 ? '#FF4500' : '#32CD32'} />
               ))}
             </Bar>
           </BarChart>
         </ResponsiveContainer>
       </div>

       {/* Performance Rate */}
       <div className="bg-white p-4 rounded shadow">
         <h2 className="text-xl font-semibold">Performance Rate</h2>
         <ResponsiveContainer width="100%" height={200}>
           <PieChart>
             <Pie
               data={performanceRate}
               dataKey="value"
               nameKey="name"
               cx="50%"
               cy="50%"
               outerRadius={80}
               fill="#8884d8"
             >
               {performanceRate.map((entry, index) => (
                 <Cell key={cell-${index}} fill={entry.name === 'Success' ? '#4caf50' : '#f44336'} />
               ))}
             </Pie>
             <Tooltip />
           </PieChart>
         </ResponsiveContainer>
       </div>

       {/* Live Monitor */}
       <div className="bg-white p-4 rounded shadow">
         <div className="flex justify-between items-center">
           <h2 className="text-xl font-semibold">Live Monitor</h2>
           <button
             className={px-4 py-2 rounded ${isSimulating ? 'bg-red-500' : 'bg-green-500'} text-white}
             onClick={() => setIsSimulating(!isSimulating)}
           >
             {isSimulating ? <Pause size={20} /> : <Play size={20} />}
           </button>
         </div>
         <div className="bg-gray-100 p-2 rounded mt-4">
           {liveMonitorLogs.map((log, index) => (
             <p key={index} className="font-mono text-green-500">
               {log}
             </p>
           ))}
         </div>
       </div>

       {/* MITRE Attack Integration Framework */}
       <div className="bg-white p-4 rounded shadow col-span-2">
         <h2 className="text-xl font-semibold">MITRE Attack Integration Framework</h2>
         <div className="mt-2 border border-dashed border-gray-400 p-4 text-gray-600">
           <p>
             This section could integrate with the MITRE ATT&CK framework to display tactics,
             techniques, and procedures (TTPs) in an interactive view.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
}