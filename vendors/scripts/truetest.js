console.log('[Katalon] Append Traffic Agent script');
const katalonTrafficAgent = document.createElement('script');
katalonTrafficAgent.async = true;
katalonTrafficAgent.defer = true;
katalonTrafficAgent.src = 'https://static.qa.katalon.com/libs/traffic-agent/v1/traffic-agent.min.js';
katalonTrafficAgent.id = 'katalonTrafficAgent'
document.head.appendChild(katalonTrafficAgent);
document.getElementById('katalonTrafficAgent').addEventListener('load', () => {
      startTrafficAgent("KA-12-22") }) ;